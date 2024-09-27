
// ASSIGNMENT 1
// Given an array ["apple", "banana", "orange”, “”, “watermelon”, “Pawpaw”].
// - Write a function that removes the last element.
// - ⁠Write a function that replaces "banana" with "kiwi”.

let fruits = ["apple", "banana", "orange", "", "watermelon", "Pawpaw"];


//Function to Remove the last element
function removed(remove) {
    return remove.slice(0, -1);
  }
  
  //Function to Replace "banana" with "kiwi”
  function replaced(array) {
    const index = array.indexOf("banana");
    if (index !== -1) {
      array[index] = "kiwi";
    }
    return array;
  }
  
  const fruitsy = ["apple", "banana", "orange", "", "watermelon", "Pawpaw"];
  
  console.log(removed(fruits)); // Output: ["apple", "banana", "orange", "", "watermelon"]
  console.log(replaced(fruits)); // Output: ["apple", "kiwi", "orange", "", "watermelon", "Pawpaw"]


  // ASSIGNMENT 2
  // Create an object Person with properties name, age, and location.

  const person = {
    name: "OG PORERO",
    age: 28,
    location: "DLT AFRICA"
  };

  // 1 - Write a function to access and print these properties using dot notation and square brackets.


  // USING DOT NOTATION
  function printDetails(person) {
    console.log("using dot notation:");
    console.log("Name:", person.name);
    console.log("Age:", person.age);
    console.log("Location:", person.location);
  

    // USING SQUARE BRACKETS
    console.log("Using square brackets:");
    console.log("Name:", person["name"]);
    console.log("Age:", person["age"]);
    console.log("Location:", person["location"]);
  }
  
  printDetails(person);


  // 2 - Write a function to update the age property of the person object to 25 and add a new property profession with the value "developer".

  function updateDetails(person) {
    person.age = 25;
    person.profession = "developer";

  }
  
  updateDetails(person);
  
  console.log("Updated property details:", person);

  // 3 - Write a function to return the key-value pairs of the person object as an array.

  function returnValue() {
    console.log(object.entries(person.person));
  }

  // 4- Prevent adding new properties to the person object, but allow updates to existing properties.

  function freezePerson(name, age, location) {
    const person = {
      name,
      age,
      location
    };
  
    Object.freeze(person);
  
    return person;
  }
  
  const personNew = freezePerson("Terry Young", 30, "Lagos City");
  
  // Attempt to add a new property
  person.profession = "developer";
  
  // Attempt to update an existing property
  person.age = 25;
  
  console.log(person);
  