// FOR DATE 
//
class Dates {
    constructor(day, month, year, alive) {
        this.day = day,
        this.month = month,
        this.year = year,
        this.alive = alive
    }
}
const myNewDate = new Dates(26, "sept", 2024, "alive");
console.log(myNewDate);
//

const myDate = new Date();
console.log(myDate);
console.log(myDate.getFullYear());

// OBJECT 

const people = {
    name: "Bob",
    age: 24,
    isBlack: true
}

console.log(people);

// CLASS 

class Persons {
    constructor(name, age, Gender,address) {
        this.name = name,
        this.age = age,
        this.Gender = Gender,
        this.address = address
    }
}

// console.log(new Persons);

const user1 = new Persons('Naheem', 10, "Male", "Ogun")
const user2 = new Persons('Opera', 50, "Male", "Lagos")
const user3 = new Persons('Chapo', 30, "Male", "Lagos")
const user4 = new Persons('Roddy', 80, "Female", "Kogi")
const user5 = new Persons('Teddy', 100, "other", "Delta")
const user6 = new Persons('Muby', 125, "Male", "Borno")
const user7 = new Persons('Emma', 150, "Null", "Ekiti")

console.log(user1);
console.log(user2);
console.log(user3);
console.log(user4);
console.log(user5);
console.log(user6);
console.log(user7);

console.log([user1, user2]);

// Using ARROW FUNCTION

const createPerson = (name, age, gender, address) => {
    const schemaCreate = 
    {
        name,
        age,
        gender,
        address
    }
    return schemaCreate
}


const addUser = createPerson('kk', 12, "male", "lagos")
console.log(addUser);


// INHERITANCE 

class Animal { // parent class
    alive = true;

    isBeautiful = `This is beautiful` 

    eat() { // eat becomes a constructor here because of this. keyword mentioned in it.
        console.log(`This ${this.name} can eat`);
    }

    sleep() { // sleep as a constructor also
        console.log(`This ${this.name} can sleep`);
    }
}

class Rabbit extends Animal {
    name = 'hare'

    run() {
        console.log(`This ${this.name} can run`);
    }
}

class Fish extends Animal {
    name = 'Fish'

    run() {
        console.log(`This ${this.name} can runswim`);
    }
}

const rabbit = new Rabbit
console.log(rabbit);
console.log(rabbit.name);
rabbit.run()
rabbit.eat()

// Web API is a simple way to store key-value pair data in the browser storage.
