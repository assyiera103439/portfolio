// Dark Mode

const darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", () => {
document.body.classList.toggle("dark-mode");
});


// Contact Form Validation

document.getElementById("contactForm")
.addEventListener("submit", function(e){

e.preventDefault();

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;

if(name === "" || email === ""){
document.getElementById("result").innerText =
"Please fill in all fields.";
}
else{
document.getElementById("result").innerText =
"Message submitted successfully!";
}
});


// Back To Top Button

const topBtn = document.getElementById("topBtn");

window.onscroll = function(){

if(document.documentElement.scrollTop > 100){
topBtn.style.display = "block";
}else{
topBtn.style.display = "none";
}
};

topBtn.addEventListener("click", () =>{
window.scrollTo({
top:0,
behavior:"smooth"
});
});


// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener("click", function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href"))
.scrollIntoView({
behavior:"smooth"
});
});
});


// Mobile Menu

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () =>{
navLinks.classList.toggle("show");
});