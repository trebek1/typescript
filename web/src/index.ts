import { User } from "./models/User";

const user = new User({ name: "new rec", age: 0 });

console.log(user.get("name"));

// reminder on how this works in js

user.on("change", () => console.log("abc"));

// user.trigger("change");
user.set({ name: "new name" });
