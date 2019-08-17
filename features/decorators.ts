@classDecorator
class Boat {
  @testDecorator
  color: string = "red";

  get formattedColor(): string {
    return `This boats colir is ${this.color}.`;
  }

  @logError("Oh no the boat was sunk")
  pilot(
    @parameterDecorator speed: string,
    @parameterDecorator generateWake: boolean
  ): void {
    if (speed === "fast") {
      console.log("swish");
    } else {
      console.log("slow");
    }
  }
}

// target is prototype of class boat (first variable)
// key is what we are applying decorator to (method, getter/setter, method)
// 3rd arg is property descriptor
// decorator is applied when class is defined not after
// function testDecorator(target: any, key: string): void {
//   console.log("target ", target);
//   console.log("key ", key);
// }

// Property Descriptors
// writable, enumerable, value, configurable
// Object.getOwnPropertyDescriptor(obj);
function logError(errorMessage: string) {
  return function(target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;
    desc.value = function() {
      try {
        method();
      } catch (e) {
        console.log(errorMessage);
      }
    };
  };
}

function testDecorator(target: any, key: string) {
  console.log(target.formattedColor);
  console.log(key);
}

function parameterDecorator(target: any, key: string, index: number) {
  console.log(key, index);
}

function classDecorator(constructor: typeof Boat) {
  console.log(constructor);
}

new Boat().pilot("fast", true);
