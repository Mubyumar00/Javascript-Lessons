console.log('Class-Work');

const contacts = [
    {
        name : 'Anate',
        email : 'anate@gmail.com',
        phoneNumber : +2348080910750
    },
    {
        name : 'Rodiyat',
        email : 'rodiyat@gmail.com',
        phoneNumber : +2348080910750
    },
    {
        name : 'Mubarak',
        email : 'mubarak@gmail.com',
        phoneNumber : +2348080910750
    }
]

const addContact = (contact) => {
    contacts.push(contact)
}

const newContact = {
    name : 'Teddy',
    email : 'dbnmxndrewsaw',
    phoneNo : +2342945849937
}

addContact(newContact);
console.log(contacts);

const deleteContact = (name) => {
    return contacts.filter((contact) => contact.name != name)
}

const deletedContact = deleteContact('Mubarak')

console.log(deletedContact);


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