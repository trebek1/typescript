import "reflect-metadata";
// adds Reflect to global scope

// const plane = {
//   color: "red"
// };

// Reflect.defineMetadata("note", "hi there", plane);
// Reflect.defineMetadata("height", 10, plane);

// console.log(plane);

// const note = Reflect.getMetadata("note", plane);
// const height = Reflect.getMetadata("height", plane);

// console.log(note);
// console.log(height);

// Reflect.defineMetadata("note", "hi hi", plane, "color");
// const note2 = Reflect.getMetadata("note", plane, "color");

// console.log(note2);

@printMetadata
class Plane {
  color: string = "red";

  @markFunction("hithere")
  fly(): void {
    console.log("vrrrr");
  }
}

function markFunction(secretInfo: string) {
  return function(target: Plane, key: string) {
    Reflect.defineMetadata("secret", secretInfo, target, key);
  };
}

const secret = Reflect.getMetadata("secret", Plane.prototype, "fly");
console.log(secret);

function printMetadata(target: typeof Plane) {
  for (let key in target.prototype) {
    const secret = Reflect.getMetadata("secret", target.prototype, key);
    console.log(secret);
  }
}
