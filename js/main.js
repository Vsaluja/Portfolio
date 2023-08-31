
// <!-- Used typed.js for the frontend dev, full stack dev etc. gave h3 multi-text class -->

const typed = new Typed(".multi-text",{
    strings: ["Full Stack Developer", "Frontend Developer", "Gamer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true

})

    // Typed is an object below is the other way of doing it
    // const typed = new Typed(".multi-text");

    // typed.strings = ["Full Stack Developer", "Gamer"];
    // typed.typeSpeed = 100;
    // typed.backSpeed = 100;
    // typed.backDelay = 1000;
    // typed.loop = true;


// Menu btn
    
    const menu_btn = document.querySelector(".menu-btn");
    const nav = document.querySelector(".navbar");
    const nav_a = document.querySelectorAll(".navbar>a");
    

    menu_btn.addEventListener('click', ()=>{
        
        nav.classList.toggle('active-nav');
        
    })
    
    // For all the elements of a inside the navbar. When we click on any a element like home, skills, portfolio etc it will toggle the .active-nav class if it is enabled it will disable it means it will close the drop down menu after clicking on the a elements
    
    nav_a.forEach((a)=>{
        // a.classList.add('active');
        a.addEventListener('click', ()=>{
            nav.classList.toggle('active-nav');
            // Below code is for home, skills etc to look active when we click on any a element it will be highlighted and the previous element which was highlighted will not be highlighted anymore
            document.querySelector('.active').classList.remove('active')
            a.classList.add('active');
        })
    })