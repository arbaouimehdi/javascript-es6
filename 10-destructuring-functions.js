// Example 1
// const getStudentInfos = () => ({
//   name: "John Doe",
//   age: 22,
// })
const getStudentInfos = () => {
  const studentInfos = {
    name: "John Doe",
    age: 22
  };

  return studentInfos;
};
const student = getStudentInfos();
console.log(student);

// Example 2
const getStudentInfos1 = () => ({
  name: "John Doe",
  age: 22
});
const { name, age } = getStudentInfos1();
console.log(name, age);

// Example 3
const getFullName2 = (firstName = "John", lastName = "Doe") => {
  return `${firstName} ${lastName}`;
};
const person = getFullName2();
const person2 = getFullName2("Maria", "Brewer");
console.log(person, person2);

// Example 4
const getFullName3 = ({ firstName = "John", lastName = "Doe" }) => {
  return `${firstName} ${lastName}`;
};
const person3 = getFullName3({
  firstName: "Maria",
  lastName: "Brewer"
});
console.log(person3);

// Example 5
const { firstName = "John", lastName = "Doe" } = {
  firstName: "Maria",
  lastName: "Brewer"
};
console.log(firstName, lastName);
