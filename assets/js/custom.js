// sticky navbar
$(window).scroll(function(){
    if($(this).scrollTop() > 100){
        $('nav').addClass('sticky')
        $('.menu-icon').addClass('sticky')
    } else{
        $('nav').removeClass('sticky')
        $('.menu-icon').removeClass('sticky')
    }
});
// code for responsive menu
const hamburger = document.querySelector(".menu-icon");
const navLinks = document.querySelector(".nav-links");
hamburger.addEventListener("click", () =>{
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});