// classes --> blueprints

class Vehicle {
  //   color: string = "red";

  //   constructor(color: string) {
  //     this.color = color;
  //   }
  // same as the above
  // could use privae or protected here then wont be accessible

  constructor(public color: string = "red") {}
  protected drive(): void {
    console.log("beep beep");
  }
  honk(): void {
    console.log("woog");
  }
}

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  // override superclass
  driveMe(): void {
    this.drive();
    console.log("vroom");
  }
}

// access modifiers public private protected

// private ==> can only call inside class
// protected ==> only accessable in class or subclass
// restrict methods that developers can call

const car = new Car(4, "blue");

car.driveMe();
car.honk();

const vehicle = new Vehicle("orange");
console.log(vehicle.color);
// vehicle.drive();
vehicle.honk();
