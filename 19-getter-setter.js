// Object Litteral
let studentInfo = {
  firstName: "Arbaoui",
  lastName: "Mehdi",

  // Get the values of firstName and lastName
  // by using a Getter
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  // Update the values of firstName and lastName
  // by using a Setter
  set fullName(value) {
    [this.firstName, this.lastName] = value.split(" ")
  },
};

studentInfo.fullName = "Michael Smith";

console.log(studentInfo.fullName);
