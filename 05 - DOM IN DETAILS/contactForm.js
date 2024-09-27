const form = document.getElementById("myForm");
const name = document.getElementById("name");
const email = document.getElementById("email");
const list = document.getElementById("myList")

form.addEventListener("submit", function(e) {
    e.preventDefault()

    // const name = document.getElementById("name").value;
    // const email = document.getElementById("email").value;

    // console.log(New User login: ${name}, (${email}));


    // OR
    console.log(`New User login: ${name.value}, (${email.value})`);
})

list.addEventListener('click', function(event) {
    const go = event.target;

    if (go.tagName === "LI") {
        console.log("Chapo you are welcome", go.texContent);
    }
})

// const paragraph = document.querySelector('p')
// paragraph.textContent = ("New Cows")

const paragraph = document.querySelectorAll('.element')

paragraph.forEach(paragraph => {
    paragraph.textContent = ("New Entry")
    paragraph.style.backgroundColor = "red"
})

const newEntry = document.getElementsByClassName("element")
