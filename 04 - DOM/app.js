// With the HTML DOM, JavaScript can access and change all the elements of an HTML document.
const paragraph = document.getElementById('demo')
// .getElementById --> this is a method
// .innerHTML --> this is a 
paragraph.innerHTML = "Hello Guys"

// Selectors
document.getElementById
document.getElementsByClassName
document.getElementsByName
document.getElementsByTagName

document.querySelector
document.querySelectorAll

document.getElementById("demo").innerHTML = "Milla"

const bush = document.getElementsByClassName("mean")

console.log(bush);

const arrayExtract = Array.from(bush)

console.log(arrayExtract);

arrayExtract.forEach((element) => {
    element.innerHTML = "Bush" 
});

// TEST 


