interface Reportable {
  //   name: string;
  //   year: Date;
  //   broken: boolean;
  summary(): string;
}

const oldCivic = {
  name: "civic",
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  }
};

const drank = {
  color: "brown",
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My Drink has ${this.sugar} grams of sugar`;
  }
};

const printSummary = (item: Reportable): void => {
  item.summary();
};

printSummary(oldCivic);
printSummary(drank);

// strategy for reuse
// create functions that accept arguments that are typed with interfaces
// object/classes can decide to implement a given interface to work with a fn
