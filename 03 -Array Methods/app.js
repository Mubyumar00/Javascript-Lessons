// Array Methods

const fruits = [
    "Banana", "Apple", "Cherry", "Orange", "Strawberry", "Almonds"
];

// Length
const length = fruits.length;
console.log(length);

// String
const string = fruits.toString();
console.log(string);

// Replace
const ReplaceEl = (fruits[2] = "Pineapple");
console.log(ReplaceEl);
console.log(fruits);

// POP - removes the last item in an array
const popped = fruits.pop();
console.log(popped);

// PUSH - method adds a new element to an array (at the end).
const pushed = fruits.push("Mango");
console.log(fruits);

// SHIFT - Shifting is equivalent to popping, but working on the first element instead of the last. The shift() method removes the first array element and "shifts" all other elements to a lower index.
const shifted = fruits.shift();
console.log(fruits);

// UNSHIFT - method adds a new element to an array (at the beginning), and "unshifts" older elements:
const unshifted = fruits.unshift("lemon");
console.log(fruits);

// Class Exercise
const classTest = [
    "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"
];

// Length
const lengther = classTest.length;
console.log(lengther);

// Replace
const Replacer = (classTest[2] = "numbers");
console.log(ReplaceEl);
console.log(fruits);

// String
const stringer = classTest.toString();
console.log(stringer);

// POP
const popper = classTest.pop();
console.log(classTest);

//PUSH
const pusher = classTest.push("eleven");
console.log(classTest);

//SHIFT
const shifter = classTest.shift();
console.log(classTest);

// UNSHIFT
const unshifter = classTest.unshift("eleven")
console.log(classTest);

// CONCAT 
const myBoys = ["Linus", "Mubarak", "Emmanuel"];
const myGirls = ["Ceiceil", "Shade"];
const myPets = ["Cat", "Dog"];

const concat = myBoys.concat(myGirls);
console.log(concat.concat(myPets));

// SPLICE 
const spliced = fruits.splice(1, 2, "Banana", "Agbalumo");
console.log(fruits);

// SLICE 
const sliced = fruits.slice(1);
console.log(fruits);
console.log(sliced);

// Class Exercise

const numbr = [1,2,3,4,5,6,7]
console.log(numbr.indexOf(4));
console.log(numbr.lastIndexOf(6));

// INCLUDES
const checkIncludes = myBoys.includes("Linus");
console.log(checkIncludes);

// INDEX - LASTINDEXOF 
const num = [1,2,3,1,2,3,4,5,6,7,8,9,3];
console.log(num.indexOf(2));

console.log(num.lastIndexOf(7));

// SORT 
console.log(num.sort());

// PRIMITIVE(value) AND REFERENCE(NON PRIMITIVE)

// Primitive value type store the actual value in the variable

let a = "hi"
let c = 2
let b = 5

console.log(a);
console.log(c);
console.log(b);

// Reference types store the referene address of the actual object in the variable

let m = [1,2,3]; // 0x01
let n = [5,4,6] // 0x02
let k = m
k.push(4)
m.push(5)

// m = [1,2,3]

console.log(`m = ${m}`);
console.log(`k = ${k}`);

let z = [1,2] // storage address: 0x01
let y = [1,2] // storage address: 0x02

// Non primitive stored in the storage address then the storage address is later stored in the variable

console.log(`z === y ${z === y}`);

console.log(`z = ${z}`);

add(z, 3)

console.log(`z = ${z}`);

function add(array, element) {
    array.push(element)
}
