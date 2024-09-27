   //---  WEB API ---//
// WEB STORAGE API is a mechanism provided by web browser to store key value pairs in a web application.

// TYPES OF BROWSER STORAGE --> 1. LOCAL STORAGE  &  2. SESSION STORAGE
// LOCAL STORAGE is useful for storing data that should be available across browser sessions such as user preference.

// SESSION STORAGE is useful for storing temporary data that should be accessible during the life time of the current browser.

// KEY features of web storage API (1). Key Value Pair. (2). synchronous - It is going to store data as it appears. (3). Same Origin Policy - The data stored in local storage will only apply from the data it is saved from.

// Similarities are they can both store data from 5mb to 10 mb. They both store all data as strings. Non string data types like Objects, Array will need to be converted to JSON strings using JSON.stringify(). 



// store an Object

localStorage.setItem('myObject', JSON.stringify({name:'Emmy', age: 20}));

// localStorage.removeItem('myObject') removes just a single item example here is myObject

// localStorage.clear('') clears all the saved variable key and value 

const storeObject = JSON.parse(localStorage.getItem('myObject'));
console.log(storeObject);

// JSON.parse() converts a String to an Object.

localStorage.setItem("theme", "dark");
localStorage.setItem("fontSize", "10px");

console.log(localStorage.getItem("theme"));
console.log(localStorage.getItem("fontSize"));

const myChoice = {theme: "dark", fontSize: "10px"}

console.log(myChoice);

sessionStorage.setItem("formData", JSON.stringify({ name: "Chapo", age: 30}));

const getData = JSON.parse(sessionStorage.getItem("formData"))
console.log(getData.name);


// ASYNCHRONOUS JAVASCRIPT. // 
// This allows handling of tasks without taking a break.
// Asynchronous code, on the other hand, allows operations to execute without blocking the main execution thread. This means other tasks can run while waiting for the async operation to complete.

// SYNCHRONOUS JAVASCRIPT. // 
// SYNCHRONOUS must be execued line-by-line where each operation must be executed before the next one.
// Synchronous code is executed line by line, in order, where each operation must complete before moving on to the next.

// CALLBACK --> is one of the common asynchronous pattern. It is like a function. One of the ways of handling asynchronous is using CALLBACK function. A FUNCTION that is passed as an ARGUEMENT in another FUNCTION.

// function fetchData(callback) {
//     setTimeout(() => {
//         console.log("Data fetched");
//         callback();
//     }, 5000)
// } 

// fetchData()
// console.log("callback done");

function myDisplayer(some) {
    return some;
}

function myFormatter(solution) {
    return `The result is ${solution}`
}

function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    return myCallback(sum); // Return the result of the callback
}

const result = myCalculator(5, 5, myDisplayer);
const result2 = myCalculator(5, 5, myFormatter);
console.log(result);
console.log(result2);

// 

let c = [1,2,3]
 console.log(`prints same ${c}`);