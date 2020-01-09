// Array Destructuring
// Present the basic terminology of Array Destructuring
// Explain the difference between Object and Array Destructuring
// Arrays are zero-based indexing
// Object rely on properties

// Example 1
// Destructure an Array by binding variables to a specific
// element on a specific index of the Array
const studentInfos = [8634, "Maria Carter", "Washington"];
const [id, name, city] = studentInfos;

// Example 2
// Add a New element to the Destructured Object and
// assign a value to it
const studentInfos = [8634, "Maria Carter", "Washington"];
const [id, name, city, college = "Harvard"] = studentInfos;

// Example 3
// Update the "id" variable by using the value of "id"
// within the object by using Array Destructuring
const studentInfos = [8634, "Maria Carter", "Washington"];
let id = 4352;
const studentInfos = [8634, "Maria Carter", "Washington"];

[id] = studentInfos;

// Example 4
const studentInfos = [8634, "Maria Carter", "Washington"];
const [, , city] = studentInfos;

// Example 5
// Swapping Values
let a = 12;
let b = 45;

let initialA = a;

a = b;
b = initialA;

// Swapping values using array destructuring
[a, b] = [b, a];

// Example 6
// Destructuring Nested Array
const studentInfos = [
  8634,
  "Maria Carter",
  ["flashtoni", "@corpoint", "Ali_bird"],
  "Washington"
];

const [id, name, [facebook, twitter, instagram], city] = studentInfos;
