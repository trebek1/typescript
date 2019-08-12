import { User } from "./models/User";

const user = new User({ name: "new rec", age: 0 });

// user.set({ name: "NEW NAME", age: 999 });
user.save();
