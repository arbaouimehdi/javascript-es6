const numbers = [45, 78, 95, 36, 47]

/**
 *
 * Old School for Loop
 *
 */
for (let i = 0; i < numbers.length; i += 1) {
  console.log(numbers[i])
}

/**
 *
 * forEach Loop
 *
 */
numbers.forEach(number => {
  if (number === 36) {
    console.log("terminate the current loop")
    // break
    // return false
  }

  console.log(number)
})

/**
 *
 * for in Loop
 *
 */
for (index in numbers) {
  // console.log(numbers[index]);
  console.log(index + 1) // concatenation instead of arithmetic "0" + 1 = 01
  console.log(typeof index) // string
}

/**
 *
 * for of loop (iterating through an array)
 *
 */
for (let number of numbers) {
  if (number === 36) {
    console.log("terminate the current loop")
    // break // break the iteration once the condition (number === 36) is true
    // return false // stop anything
  }

  console.log(number) // 45, 78, 95 (36 excluded)
}

// return false will break anything after the for of loop
console.log(numbers)

/**
 *
 * Getting Object keys by using the for of loop
 * Iterating through an object
 *
 */
const studentInfos = {
  fullName: "John Doe",
  age: 22,
}

for (let objKey in studentInfos) {
  console.log(objKey)
}
