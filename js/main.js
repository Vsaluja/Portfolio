
// <!-- Used typed.js for the frontend dev, full stack dev etc. gave h3 multi-text class -->

// ----------------------------------------------- Typed.JS (All Devices) -------------------------------------------------------

setTimeout(() => {
    const typed = new Typed(".multi-text", {
        strings: ["Full Stack Developer", "Frontend Developer", "Web Developer"],
        typeSpeed: 50,
        backSpeed: 20,
        backDelay: 3000,
        loop: true

    })
}, 1500);


// Typed is an object below is the other way of doing it
// const typed = new Typed(".multi-text");

// typed.strings = ["Full Stack Developer", "Gamer"];
// typed.typeSpeed = 100;
// typed.backSpeed = 100;
// typed.backDelay = 1000;
// typed.loop = true;


// --------------------------------------------Menu btn (Mobile devices)------------------------------------------------------------

// Below code will toggle the active-nav class when we click on menu button the drop down menu will show for mobile devices also it will replace the 3line menu icon with X mark.

const menu_btn = document.querySelectorAll(".menu-btn");
const navbar = document.querySelector(".navbar");

menu_btn.forEach((value) => {

    value.addEventListener('click', () => {
        navbar.classList.toggle('active-nav');
        // icon replacement code, whichever i element has .icon class will display none and the other will display block
        document.querySelector('.icon').classList.remove('icon')
        value.classList.add('icon');
    })
})


// --------------------------------------------- Menu Bar related (Mobile devices)-------------------------------------------

const nav_a = document.querySelectorAll(".navbar>a");

// For all the elements of a inside the navbar. When we click on any a element like home, skills, portfolio etc it will toggle the .active-nav class if it is enabled it will disable it means it will close the drop down menu after clicking on the a elements


nav_a.forEach((a) => {
    a.addEventListener('click', () => {
        navbar.classList.toggle('active-nav');
        // Below code is for home, skills etc to look active when we click on any a element it will be highlighted and the previous element which was highlighted will not be highlighted anymore. Replaced this with on scroll highlight below.
        // document.querySelector('.active').classList.remove('active')
        // a.classList.add('active');

        // If we click on skill, home, portfolio etc it was not getting back the 3 lines and the X mark was staying so now when we click on skills or any other a element it changes the icon back to normal
        menu_btn.forEach((value) => {
            document.querySelector('.icon').classList.remove('icon')
            value.classList.add('icon');
        })
    })
})


// --------------------------------------- Highlight menubar a elements on scroll (All Devices) ------------------------------------

const home = document.getElementById('home');
const skills = document.getElementById('skills');

const aHome = document.querySelector('.a-home');
const aSkills = document.querySelector('.a-skills');
const aAbout = document.querySelector('.a-about');
const aPortfolio = document.querySelector('.a-portfolio');
const aContact = document.querySelector('.a-contact')

window.addEventListener('scroll', () => {

    const screenPos = window.innerHeight;

    const homePos = home.getBoundingClientRect().top;
    const skillsPos = skills.getBoundingClientRect().top;


    if (screenPos > homePos) {
        document.querySelector('.active').classList.remove('active')
        aHome.classList.add('active');
    }
    if (screenPos > skillsPos) {
        document.querySelector('.active').classList.remove('active')
        aSkills.classList.add('active');
    }


})


// ----------------------------------------------- Animate On Scroll (All Devices) ----------------------------------------------
// Data-aos zooms in the entire element box when scrolling down data-aos is added in id=skills section
AOS.init();




// ---------------------------------------- Skill bar loading on Scroll (All Devices) ---------------------------------------------

const skillsElement = document.getElementById('skills');
const skillPer = document.querySelectorAll('.skill-per');

window.addEventListener('scroll', () => {

    const screenPos = window.innerHeight;
    const skillElementPos = skillsElement.getBoundingClientRect().top;

    skillPer.forEach((value) => {

        if (screenPos > skillElementPos) {
            value.style.animation = "toRight 3s ease-in-out forwards";
        }
        else {
            value.style.animation = "none";
        }

    })

})





