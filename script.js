const humberger = document.querySelector(".humberger")
const navmenu = document.querySelector(".nav-menu")
const navbar = document.querySelector(".navbar")
humberger.addEventListener('click' , ()=>{
    document.body.classList.toggle("active");
    humberger.classList.toggle("active");
    navmenu.classList.toggle("active");
    navbar.classList.toggle("active");
})