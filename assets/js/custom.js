
const hamburger = document.querySelector(".menu-icon");
const navLinks = document.querySelector(".nav-links");
hamburger.addEventListener("click", () =>{
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});