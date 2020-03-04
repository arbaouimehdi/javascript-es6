// Object Litteral
let studentInfo = {
  firstName: "John",
  lastName: "Doe",
};

// Property - Data
Object.defineProperty(studentInfo, "college", {
  value: "Oxford",
  enumerable: true,
});

// Property - Accessor
Object.defineProperty(studentInfo, "fullName", {
  get() {
    return `${this.firstName} ${this.lastName}`;
  },
  set(value) {
    [this.firstName, this.lastName] = value.split(
      " ",
    );
  },
  enumerable: true,
});

studentInfo.fullName = "Michael Smith";

console.log(studentInfo.fullName);
