// Exercise 1 : List Of People

const people = ["Greg", "Mary", "Devon", "James"]

// Part I - Review About Arrays

// 1. Write code to remove “Greg” from the people array.
people.shift()
// 2. Write code to replace “James” to “Jason”.
people[people.indexOf('James')] = 'Jason'
// 3. Write code to add your name to the end of the people array.
people.push("Yao")
// 4. Write code that console.logs Mary’s index
console.log(people.indexOf("Mary"))
// 5. Write code to make a copy of the people array using the slice method.
// The copy should NOT include “Mary” or your name.
let copy = people.slice(1, people.length - 1)
console.log(`copy of people: ${copy}`)
// 6. Write code that gives the index of “Foo”.
console.log(`Index of Foo: ${people.indexOf("Foo")}`)
// It returns -1 because Foo is not in the people array
// 7. Create a variable called last which value is the last element of the array.
let last = people[people.length - 1]

// Part II - Loops

// 1. Using a loop, iterate through the people array and console.log each person.
for (const person of people) {
    console.log(`${person}`)
}
// 2. Using a loop, iterate through the people array and exit the loop after you console.log “Jason” .
for (const person of people) {
    console.log(`${person}`)
    if (person == 'Jason')
        break
}


// Exercise 2 : Your Favorite Colors
// 1. Create an array called colors where the value is a list of your five favorite colors.
const colors = ["black", "white", "red", "blue", "purple"]
// 2. Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
for (const key in colors) {
    console.log(`My #${parseInt(key) + 1} choice is ${colors[key]}`)
}
// 3. Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
const suffixes = ["st", "nd", "rd", "th", "th"]
for (const key in colors) {
    console.log(`My #${parseInt(key) + 1 + suffixes[key]} choice is ${colors[key]}`)
}


// Exercise 3 : Repeat The Question

// 1. Prompt the user for a number.
// 2. While the number is smaller than 10 continue asking the user for a new number.
let number;
do {
    number = Number(prompt("Enter a number: "))
} while (number < 10);



// Exercise 4 : Building Management

const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent: {
        sarah: [3, 990],
        dan: [4, 1000],
        david: [1, 500],
    },
}
// 1. Copy and paste the above object to your Javascript file.
// 2. Console.log the number of floors in the building.
console.log(`Number of floors: ${building.numberOfFloors}`)

// 3. Console.log how many apartments are on the floors 1 and 3.
console.log(`Ther are ${building.numberOfAptByFloor.firstFloor} apartments are on the floor 1`)
console.log(`Ther are ${building.numberOfAptByFloor.thirdFloor} apartments are on the floor 3`)
// 4. Console.log the name of the second tenant and the number of rooms he has in his apartment.
console.log(`The second tenant is: ${building.nameOfTenants[1]}`)
console.log(`${building.nameOfTenants[1]} has ${building.numberOfRoomsAndRent[building.nameOfTenants[1].toLowerCase()][0]}`)
// 5. Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.
if (building.numberOfRoomsAndRent['sarah'][1] + building.numberOfRoomsAndRent['david'][1] > building.numberOfRoomsAndRent['dan'][1])
    building.numberOfRoomsAndRent['dan'][1] += 1200



// Exercise 5 : Family

// 1. Create an object called family with a few key value pairs.
const family = {
    father: 'John',
    mother: 'Mary',
    firstSon: 'Peter',
    secondSon: 'Mark'
}
// 2. Using a for in loop, console.log the keys of the object.
for (const key in family) {
    console.log(key)
}
// 3. Using a for in loop, console.log the values of the object.
for (const key in family) {
    console.log(family[key])
}


// Exercise 6 : Rudolf
const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
}
// 1. Given the object above and using a for loop, console.log “my name is Rudolf the raindeer”
let sentence = ""
for (const key in details) {
    sentence += key + ' ' + details[key]
}
console.log(sentence)


// Exercise 7 : Secret Group

const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"]
// 1. A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
// 2. Console.log the name of their secret society.
let firstLetters = []
for (const name of names) {
    firstLetters.push(name[0])
}
console.log(`Society name: ${firstLetters.sort().join('')}`)