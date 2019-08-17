class Boat {
  color: string = "red";

  get formattedColor(): string {
    return `This boats colir is ${this.color}.`;
  }

  @logError
  pilot(): void {
    throw new Error();
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
function logError(target: any, key: string, desc: PropertyDescriptor): void {
  const method = desc.value;
  desc.value = function() {
    try {
      method();
    } catch (e) {
      console.log("Oops the boat sunk");
    }
  };
}

new Boat().pilot();
