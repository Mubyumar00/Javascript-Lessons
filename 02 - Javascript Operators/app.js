console.log("Yello Africa 🌍");

//LOGICAL OPERATORS
// && --> LOGICAL AND - AMPERSAND
    const isAdult = true;
    const hasTicket = true;
    console.log(isAdult && hasTicket);
    
    const a = true;
    const b = true;
    console.log(a && b)


// || --> LOGICAL OR
    const c = false;
    const d = true;
    console.log(c || d);
    

// --> LOGICAL NOT
    const e = true;
    console.log(!e);

    
    const isSleeping = true;
    console.log(!isSleeping);


    // IF-ELSE.
    const temperature = 25;

    if(temperature > 25){
        console.log("Temperature is hot")
    }else if(temperature == 25){
        console.log("Oops");
    }else{
        console.log("Temperature is cool")
        
    }
    

    const OG = true;
    const tall = false;
    const gold = true;

if(OG && tall && gold){
    console.log("OG is tall");
}else if(!OG || tall && gold){
    console.log("OG is short");
}else{
    console.log("OG poraro");
    
}


// SWITCH STATEMENT
const num = 6;

if(num < 0) {
    console.log("Negative Number");
}


// if-else statement to check if elible to vote
const age = 18;

if(age < 18) {
    console.log("Not eligible to vote.");
}else if(age == 18 || age > 18){
    console.log("You are eligble to vote");
}else{
    console.log("Invalid age");
}


// if-else statement to chack if number is divisible by 3 and 5
const numCheck = 17;

if(numCheck % 3 == 0 && numCheck % 5 == 0) {
    console.log("Number is divisible by 3 and 5");
}else{
    console.log("Number is not divisible by 3 and 5");
}

// SWITCH

const day = "Friday"

switch(day) {
    case "Monday":
    console.log("Statrt of the week");
    break;
    case "Tuesday":
    console.log("Have a great day");
    break;
    case "Wednesday":
    console.log("Have a great day");
    break;
    case "Thursday":
    console.log("Have a great day");
    break;
    case "Friday":
    console.log("Almost the weekend");
    break;
    case "Saturday":
    console.log("Enjoy your weekend");
    break;
    case "Sunday":
    console.log("Prepare for the week ahead");
    break;
    default:
        console.log("day not found");
        
}