// Example 1
// bind variables to different "car1" object properties
const car1 = {
  name: "fiat",
  model: 500,
  weight: 850,
  color: "red"
};

const { name, color, weight } = car1;

// Example 2
// destruct an object property from a variable
// Rename a variable
// set a value to a variable
const car2 = {
  brand: "fiat",
  model: 500,
  weight: 850,
  colors: {
    red: true,
    green: false
  }
};

// Use ":" sign" to change the name of the variable
// Use the "=" sign to assign a value to a variable
const {
  colors: { red: redColor, white: whiteColor = false, brown = "true" }
} = car2;
