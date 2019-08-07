let apples: number = 5;
let speed: string = "fast";
let hasName: boolean = true;
let nothingMuch: null = null;
let no: void = null;
let nothing: undefined = undefined;
let now: Date = new Date();

let colors: string[] = ["red", "green"];
let co: Array<string> = ["red", "blue"];

let truths: boolean[] = [true, false];

class Car {}

let car: Car = new Car();

let point: { x: number; y: number } = {
  x: 10,
  y: 20
};

// two versions of functions
const logNumber = (i: number): void => {
  console.log(i);
};

const log2: (i: number) => void = (i: number) => {
  console.log(i);
};
