
// <!-- Used typed.js for the frontend dev, full stack dev etc. gave h3 multi-text class -->

setTimeout(() => {
    const typed = new Typed(".multi-text",{
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


// Menu btn
    
    const menu_btn = document.querySelectorAll(".menu-btn");
    const nav = document.querySelector(".navbar");
    const nav_a = document.querySelectorAll(".navbar>a");
    
    menu_btn.forEach((value) => {

        value.addEventListener('click', () => {
            nav.classList.toggle('active-nav');
            document.querySelector('.icon').classList.remove('icon')
            value.classList.add('icon');
        })
    })
    

    
    // For all the elements of a inside the navbar. When we click on any a element like home, skills, portfolio etc it will toggle the .active-nav class if it is enabled it will disable it means it will close the drop down menu after clicking on the a elements
    
    nav_a.forEach((a)=>{
        // a.classList.add('active');
        a.addEventListener('click', ()=>{
            nav.classList.toggle('active-nav');
            // Below code is for home, skills etc to look active when we click on any a element it will be highlighted and the previous element which was highlighted will not be highlighted anymore
            document.querySelector('.active').classList.remove('active')
            a.classList.add('active');

            // If we click on skill, home, portfolio etc it was not getting back the 3 lines and the X mark was staying so now when we click on skills or any other a element it changes the icon back to normal
            menu_btn.forEach((value) => {
            document.querySelector('.icon').classList.remove('icon')
            value.classList.add('icon');
        })
        })
    })