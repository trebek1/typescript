import { AxiosPromise, AxiosResponse } from "axios";

interface ModelAttributes<T> {
  set(value: T): void;
  getAll(): T;
  get<K extends keyof T>(key: K): T[K];
}

interface Sync<T> {
  fetch(id: number): AxiosPromise;
  save(data: T): AxiosPromise;
}

interface Events {
  on(eventName: string, callback: () => void): void;
  trigger(eventName: string): void;
}

interface HasId {
  id?: number;
}

export class Model<T extends HasId> {
  constructor(
    private attributes: ModelAttributes<T>,
    private events: Events,
    private sync: Sync<T>
  ) {}

  // these can be refactored from getters since we
  // are passing in composed components in constructor now
  on = this.events.on;
  trigger = this.events.trigger;
  get = this.attributes.get;

  set(update: T): void {
    this.attributes.set(update);
    this.events.trigger("change");
  }

  fetch(): void {
    const id = this.attributes.get("id");
    if (typeof id !== "number") {
      throw new Error("Cannot fetch without id ");
    }
    this.sync.fetch(id).then((resp: AxiosResponse) => {
      this.set(resp.data);
    });
  }

  save(): void {
    this.sync
      .save(this.attributes.getAll())
      .then(
        (resp: AxiosResponse): void => {
          this.trigger("save");
        }
      )
      .catch(() => this.trigger("error"));
  }
}
