// Create a class person

class Person  {
    alive = true;
    favouriteFood = ['rice', 'eba', 'garri']

    active() {
        console.log(`This ${this.name} Student is active`);
    }

    listens() {
        console.log(`This ${this.name} listens attentively`);
    }
}

class Teacher extends Person {
    firstName = "Adamu"
    lastName = "Musa"

    teach() {
        console.log(`Mr. ${this.firstName} can teach and is friendly.`);
    }

    getName() {
        console.log(` ${this.firstName} ${this.lastName}`);
    }
}


const teacher = new Teacher
console.log(teacher);
teacher.teach()
teacher.getName()

// ANOTHER APPROACH 

class Human {
    constructor(first, last, age) {
        this.firstNamer = first,
        this.lastNamer =last,
        this.age = 30
    }

    isVerified() {
        return (`Hello ${this.firstNamer} ${this.lastNamer} you have been verified`)
    }

    
}

