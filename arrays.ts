const carMakers: string[] = ["ford", "toyota"];
const dates = [new Date(), new Date()];

const carsByMake: string[][] = [["f150"], ["corolla"], ["camaro"]];

// help with inference when extracting values

const car = carMakers[0];
const myCar = carMakers.pop();

carMakers.push(100);

// help with map
// can get autocomplete since it is typed

carMakers.map(
  (car: string): string => {
    return car;
  }
);

const importantDates: (Date | String)[] = [new Date(), "2030-10-10"];
importantDates.push("alex");
importantDates.push(10);

// use an array to reprsent a collection of records with some arbitrary
// sort order (not tuples)

// tuples (like a drink) - order matters
// each element represents a property of a record
