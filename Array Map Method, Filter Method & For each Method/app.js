// Loops: are used to perform repeated actions based on conditions. Types of loops :  while loops, do-while loops, for loops, for-of loops, for-in loops. The commonly used one is for loop.
// Three things need to be implemented when using for loop : they are : initialization, condition, inreament.  for(initialization ; condition ; increament)

// ARRAY MAP METHOD
// map() creates a new array from calling a function for every array element.
// map() does not execute the function for empty elements.
// map() does not change the original array.

// Example 1

    


// FOR EACH METHOD
// The forEach() allows you to perform a certain action on a particular position in an array
// The forEach() method calls a function for each element in an array.
// The forEach() method is not executed for empty elements.

// EXAMPLE 1
const names = ["Shola", "Bola", "Tola"]

// ES5 FOR LOOP METHOD
for(let i = 0; i < names.length; i++) {
    console.log(i, names[i]);
}

for(const name of names) {
    console.log(name);
}


// ES6 FOR EACH METHOD
names.forEach(function() {})

names.forEach(() => {})

names.forEach((value, i, arr) => {
    console.log(value);
})

// EXAMPLE 1
let totalValue = 0
const trns = [42, 45, 26, 4, 13, 16];
trns.forEach((trns) => {
    console.log(totalValue, (totalValue += trns), trns);
});

console.log(totalValue);

// EXAMPLE 2
const colors = ["red", "blue", "pink", "green"]
colors.forEach((color) => {
    console.log(color);
})


// EXAMPLE 3
const numbers = [10, 20, 30]
let sum = 0
numbers.forEach((add) => {
    sum += add;
})
console.log(sum);


// FILTER METHOD --> creates a new array with only the element that passes a condition or test defined in a function. It will return a new array with the original array and the original array is not modified.
// We normally use filter when you want to keep a certain element and exclude others based on a condition.

const arrNumbers = [-20, -40, 43, 30, -1, 23, 34, -50, 44, -75]

const negative = arrNumbers.filter((negativeNum) => negativeNum < 0)
console.log(negative);


// CLASS EXERCISE
let negNums = []

for (let i = 0; i < arrNumbers.length; i++) {
    if (arrNumbers[i] < 0) {
        negNums.push(arrNumbers[i]);
    }
    
}
console.log(negNums);


// FOR EACH METHOD 
let negNums1 = []

arrNumbers.forEach((arrNumbers) => {
    if (arrNumbers < 0) {
        negNums1.push(arrNumbers)
    }
})

console.log(negNums1);

// EXAMPLE USING FILTER


// TRY 
nums = [1, 2, 3, 4]

const newNums = nums.filter((lessThan) => lessThan < 3)
console.log(newNums);

// TRY 2 
// ADD 1 TP ALL NUMBERS

nums.forEach((num, index) => {
    nums[index] = num + 1;
});
console.log(nums);

// CLASS TRY
// MAKE AN ARRAY OF YOUR FELLOW COHORTSAND THEIR STATE OF ORIGIN
// FILTER OUT THE PEOPLE FROM EKITI STATE 
// LIST OUT THE FILTERED PEOPLE 

const cohorts = [
    {
        name: 'emma',
        state: 'Ekiti'
    },
    {
        name: 'mubarak',
        state: 'Borno'
    },
    {
        name:'Teddy',
        state: 'Delta'
    },
    {
        name: 'rodiyat',
        state: 'Kwara'
    },
    {
        name: 'Chapo',
        state: 'Kogi'
    },
    {
        name: 'Opera',
        state: 'Ekiti'
    }
]

const ekitiCohorts = cohorts.filter((cohort) => cohort.state === "Ekiti")
console.log(ekitiCohorts);

ekitiCohorts.forEach((cohort) => console.log(cohort.name));

// MAP METHOD: ITERATES AND ALLOWS US TO ADD A FUNCTION
const numbas = [
    1,2,3,4,5,6
]

const multiplied = numbas.map(num => num * 2)

console.log(multiplied);

const words = ["Hello", "world", "Really"]

const upperCaseWords = words.map(word => word.toUpperCase());

console.log(upperCaseWords);

const users = [
    {name:"Opera", age: 67},
    {name:"Mubarak", age: 100},
    {name:"Rodiyah", age: 30},
    {name:"OG", age: 25},
]

// EXAMPLE 
const userNames = users.map(user => user.name)

console.log(userNames);

const oldUsers = users.map(user => ({
    ...user,
    isOld: user.age >= 67
}))

console.log(oldUsers);

// An Array of people having their name and age
// Add an isSenior property that brings true when the age is more 20 and false when the age is less than 20

// Add another ageGroup property that carries 
// 1 - Child if the person age is less than 18
// 2 - Adult if the person is 16-49 in age 
// 3 - Old if the person is 50 and above in age

// 
const people = [
    {name:"Opera", age: 20},
    {name:"Mubarak", age: 15},
    {name:"Rodiyah", age: 10},
    {name:"OG", age: 30},
]

const lowAge = people.map(low => low.age) 
console.log(lowAge);

// 
const lessThan = people.map(low => ({
    ...low,
    isBelow: low.age < 18
}))
console.log(lessThan);

//
let ageGroup 
if (people.age < 18) {
    ageGroup = "Child"
}else if(people.age >= 18 && people.age < 50) {
    ageGroup = "Adult"
}else{
    ageGroup = "Old"
}

// CLASS EXERCISE
const peoplee = [
    {name:"Mukikan", age: 67},
    {name:"Barrow", age: 50},
    {name:"Usman", age: 16},
    {name:"Emmanuel", age: 40},
    {name:"Musa", age: 18},
    {name:"David", age: 33},
    {name:"Javier", age: 45},
    {name:"Jago", age: 20}
]

const peopleAgeVerification = peoplee.map(person => {
    let ageGroupCalc

    if (person.age < 18){
        ageGroupCalc = "Child"
    }else if(person.age >= 18 && person.age < 50){
        ageGroupCalc = "Adult"
    }else{
        ageGroupCalc = "Old"
    }

    return{
        ...person,
        isSenior: person.age >= 20,
        ageGroups: ageGroupCalc
    }
})

console.log(peopleAgeVerification);


// ANOTHER APPROACH TO ABOVE QUESTION
const seniorCitizen = people.map(person => ({...person, isSenior: person.age >= 20}))

console.log(seniorCitizen);

const ageDetermination = seniorCitizen.map(person => {
    let ageGroupCalc

    if (person.age < 18){
        ageGroupCalc = "Child"
    }else if(person.age >= 18 && person.age < 50){
        ageGroupCalc = "Adult"
    }else{
        ageGroupCalc = "Old"
    }

    return{
        ...person,
        ageGroup: ageGroupCalc
    }
})

console.log(ageDetermination);

//  