"use client";

const x = document.getElementById("main");
const y = document.getElementById("Demo")

x.style.background = "red";
x.textContent = "Become a tech guru";
y.innerHTML = "OG is leading";

const btn = document.getElementById("myButton");

btn.addEventListener("click", function() {
    console.log("Button is active");
})