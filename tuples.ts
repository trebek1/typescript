const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40
};

type Drink = [string, boolean, number];

// tuple instead of an array
const pepsi: Drink = ["brown", true, 40];

// tuple prevents this issue
pepsi[0] = 40;

const tea: Drink = ["brown", false, 0];

const carSpecs: [number, number] = [400, 3354];

const carStats = {
  horsepower: 400,
  weight: 3354
};
