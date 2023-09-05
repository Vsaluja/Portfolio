
// <!-- Used typed.js for the frontend dev, full stack dev etc. gave h3 multi-text class -->


// ----------------------------------------------- Typed.JS (All Devices) -------------------------------------------------------

// if(window.screen.width < 600){
//     document.write('<script src="js/phone.js"></script>');
// }    

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

// Added open and closing brackets after every feature to avoid confusion to avoid recreating const and let variables.
{
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
}


// --------------------------------------------- Menu Bar related (Mobile devices)-------------------------------------------
{

    const nav_a = document.querySelectorAll(".navbar>a");
    const navbar = document.querySelector(".navbar");
    const menu_btn = document.querySelectorAll(".menu-btn");

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
}

// --------------------------------------- Highlight menubar anchor elements on scroll (All Devices) -------------------------
{
    // Section IDs
    const home = document.getElementById('home');
    const skills = document.getElementById('skills');
    const projects = document.getElementById('projects');
    const contact = document.getElementById('contact');

    // Navbar anchor tag elements
    const aHome = document.querySelector('.a-home');
    const aSkills = document.querySelector('.a-skills');
    const aProjects = document.querySelector('.a-projects');
    // const aContact = document.querySelector('.a-contact')

    window.addEventListener('scroll', () => {

        // We can try both window.innerheigh pageYoffset but window.innerHeight-100 or innerHeigh/2 works better
        if (window.screen.width < 600) {
            console.log('hello');
        }
        // const screenPos = (window.innerHeight)-350;

        // Height + 80 so that it changes its color when we click on a element to scroll down because the a element only scrolls down just above the top of skillPos and other elementPos
        const header = document.querySelector('.header');
        let height = header.getBoundingClientRect().height+80;

        // const screenPos = pageYOffset;


        // position of different sections
        const homePos = home.getBoundingClientRect().top;
        const skillsPos = skills.getBoundingClientRect().top;
        const projectsPos = projects.getBoundingClientRect().top;
        // const contactPos = contact.getBoundingClientRect().top;


        // When all the conditions are wrapped in if it checks all the 3 condition and since screenPos always stays > skillsPos when going down it will put active class on skillsPos and then remove it instantly when it will check the 3rd condition screenPos > projectsPos and it will make that active instead if screenpos is not greater than projectPos then it will use the 2nd if condition.

        // While screenpos is smaller than home element's position make home
        if (height > homePos) {
            document.querySelector('.active').classList.remove('active')
            aHome.classList.add('active');
        }
        if (height > skillsPos) {
            document.querySelector('.active').classList.remove('active')
            aSkills.classList.add('active');
        }
        if (height > projectsPos) {
            document.querySelector('.active').classList.remove('active')
            aProjects.classList.add('active');
        }

        // if(screenPos > contactPos){
        //     document.querySelector('.active').classList.remove('active')
        //     aContact.classList.add('active');

        // }




    })



}
// ----------------------------------------------- Animate On Scroll (All Devices) ----------------------------------------------
// Data-aos zooms in the entire element box when scrolling down data-aos is added in id=skills section
AOS.init();




// ---------------------------------------- Skill bar loading on Scroll (All Devices) ---------------------------------------------
{
    const skills_El = document.getElementById('skills');
    const skillPer = document.querySelectorAll('.skill-per');

    window.addEventListener('scroll', () => {

        // const screenPos = window.innerHeight;

        const screenPos = pageYOffset;

        const skillElementPos = skills_El.getBoundingClientRect().top;

        skillPer.forEach((value) => {

            if (screenPos > skillElementPos) {
                value.style.animation = "toRight 3s ease-in-out forwards";
            }
            else {
                value.style.animation = "none";
            }

        })

    })

}

// --------------------------------------------- Scroll to Element (All Devices) --------------------------------------------------

// Added empty brackets to not reuse already declared const and  let variables

{
    const header = document.querySelector('.header');

    // Height - 10 so that the a element also highlights when it scrolls down
    
    let height = header.getBoundingClientRect().height + 100;

    // If we want more accurate scroll make sure there is not much padding from top for the element

    {
        // Skills Element
        const skill_El = document.getElementById('skills');
        const aSkills = document.querySelector('.a-skills');

        console.log(header.getBoundingClientRect());


        let y = skill_El.getBoundingClientRect().y;
        // console.log(skill_El.getBoundingClientRect());

        aSkills.addEventListener('click', () => {

            window.scrollTo(0, y - height);
        
        })

    
    }

    {
        // Projects Element

        const projects_El = document.getElementById('projects');
        const aProjects = document.querySelector('.a-projects');

        let y = projects_El.getBoundingClientRect().y;



        aProjects.addEventListener('click', () => {

            // if(window.screen.width < 600){
            //     window.scrollTo(0,y);

            // }

            window.scrollTo(0, y - height);


        })

    }

}

/*
function setUpTopNavBarEventListeners(){
    setUpSkillsClickEventListeners();
}

function setupEventListeners(){
    setUpTopNavBarEventListeners();
}

function init(){}
    setupEventListeners();
    initializeAnalyticsLibrary();
}

*/