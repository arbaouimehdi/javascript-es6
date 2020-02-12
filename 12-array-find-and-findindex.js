const users = [
  {
    id: 45,
    fullName: "Vasily Maystone",
    email: "vmaystone0@amazon.de",
    gender: "Male",
  },
  {
    id: 46,
    fullName: "Artie Mardy",
    email: "amardy@usgs.gov",
    gender: "Male",
  },
  {
    id: 47,
    fullName: "Rex Michael",
    email: "rhussel@senate.gov",
    gender: "Male",
  },
  {
    id: 48,
    fullName: "Jenna Belliss",
    email: "jbellis3@princeton.edu",
    gender: "Female",
  },
  {
    id: 49,
    fullName: "Harriot Kroll",
    email: "hkroll4@dot.gov",
    gender: "Female",
  },
];

/**
 * Find a Specific User By using the full name
 * @param {*} users
 * @param {*} fullName
 */
const getUser = (users, fullName) => {
  // Iterate through each user on the users array
  for (let user of users) {
    if (user.fullName === fullName) {
      return user;
    }
  }
};

// Get a Selected User
const selectedUser = getUser(
  users,
  "Jenna Belliss",
);

/**
 *
 * Find a Specific User by using the Array.find Method
 *
 */
const selectedUser2 = users.find(user => {
  if (user.fullName === "Rex Michael") {
    return user;
  }
});

// Refactor the previous code
const selectedUser3 = users.find(
  user => user.fullName === "Rex Michael",
);

/**
 * Find a Specific User by using the Array.find method
 * @param {*} users
 * @param {*} fullName
 */
const getUser2 = (users, fullName) =>
  users.find(user => user.fullName === fullName);

const selectedUser4 = getUser2(
  users,
  "Artie Mardy",
);

/**
 *
 * Get the selected User Index
 *
 */
const currentUserIndex = users.findIndex(
  user => user.fullName === "Jenna Belliss",
);
