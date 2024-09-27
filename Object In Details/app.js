// ********** OBJECT IN DETAILS ******//
// An object is a common data structure that holds key and value pairs
// Inside object we have key and value
// Key and value are seperated by column
// Properties are seperated by commas


// An object is a common data structure that holds key and value pairs


// An object is a common data structure that holds key and value pairs

console.log('JavaScript Object Methods');

const person = {
    firstName : 'John',
    lastName : 'Doe',
    age : 23
}
console.log(person);

const supreme = {
    firstName : 'Olamide',
    lastName : 'Abiodun',
    profession : 'Caterer',
    isMarried : true,
    gender : 'male'
}

console.log(supreme);

const director = {
    firstName : 'Aliu',
    lastName : 'Musa',
    age : 40,
    gender : 'Male',
    isMarried : true,
    car1 : {
        carName : 'Lexus',
        year : '2010',
        color : 'grey'
    },
    car2: {
        carName: "Toyota",
        year: "2015",
        color: "grey"
    }
}

console.log(director);

// Variables as value in an object
// We can also have variables as value in object

const firstName = "Dodiyah";
const lastName = "Yusuf";

const person2 = {
    firstName: firstName,
    lastName: lastName
}
console.log(person2);
/***** or ***** **/
const person3 = {
    firstName,
    lastName
}
console.log(person3);

// ACCESSING, UPDATE, ADDING PROPERTIES IN AN OBJECT, ALSO ALLOWS THE RETREIVAL OF SOME VALUES IN AN OBJECT.
// => Dot Notation .
// => square Bracket []

// ************ DOT *************//
// it is used to access, add or update properties of an object.
// it allows us to retreive some values from an object

const player = {
    firstName: "Silva",
    lastName: "Thiago",
    age: 38,

    team: {
        clubName: "Chelsea",
        location: "England",
        manager: "pochettino"
    },

    jerseyNumber: 6
}
                         
console.log(player)


console.log(player.team.clubName);
console.log(player['team']["location"]);

// BUILT-IN-METHOD -> is a property that contains a function declaration.

const myObject = {
    myObject1: () => {}, // arrow function
    myObject2: function() {}, // function expression
    myObject3() {} // function declaration
}

// EXAMPLE 

const dog = {
    name: "fluffy",
    age: 6,

    bark() {
        console.log("woof woof!");
    }
}

console.log(dog.name);
dog.bark()

/************** OBJECT METHODS **********************/

// object.keys()
// object.values()
// object.entries()
// object.freeze()
// object.seal()

/************ OBJECT KEYS********************/
const employees = {
    boss: "Team Lead",
    secretary: "John",
    sales: "Jummy",
    accountant: "Oscar"
}

const employeesInfo = Object.keys(employees)
console.log(employeesInfo);

/********* Object.values()***************/

const session = {
    id: 1,
    date: "5-september-2024",
    device: "Mobile",
    browser: "Chrome"
}

const sessionValue = Object.values(session)
console.log(sessionValue);

// Object entries()--> creates a nested arrays of the key nad value pairs of an onbject

// Object.freeze()
// Object.seal() 

// example 
const sessionEntries = Object.entries(session)
console.log(sessionEntries);

// Object.freeze() --> This prevents modifications of existing properties and prevents properties from being added or removed 

const user = {
    username: "Alamu",
    password: 123456
}

console.log(user);

const userInfo = Object.freeze(user)
console.log(userInfo);

// EXAMPLE
const user1 = {
    username: "Cohort",
    password: "123123"
}

/** Seal() **/
const userInfo1 = Object.seal(user1)
user.username = "Bola"
userInfo1.age = 32
console.log(userInfo1);

let x;

const person5 = {
    name: "Ali",
    age: 22,
    isAdmin: true,

    address: {
        street: "12, unity and peace",
        city: "Ilorin",
        state: "Kwara state"
    },

    hobbies: ["Music", "Sport"]
}

x = person5.name
console.log(x);

// ACCESS AN ARRAY INSIDE AN OBJECT 

x = person5.hobbies[0]
let y = person5["hobbies"][1]
console.log(x, y);

// UPDATE A PROPERTY
person5.name = "Abu"
console.log(person5);

person5.isAdmin = false
console.log(person5);

// DELETE A PROPERTY

delete person5.address.state;
console.log(person5);

// add a property
person5.hasChildren = true
console.log(person5);

person5.greet = function() {
    console.log(`Hello, My name is ${this.name}`);
}
person5.greet()

// Example

const displayAge = person5.age
console.log(displayAge);

// Another approach
person5.displayAge = function () {
    console.log(person5.age);
}
person5.displayAge()

