console.log("hola")

// let buttons = document.querySelectorAll('.show-button');
// buttons.forEach(el => el.addEventListener('click'))

const elements = {
    aboutContent : document.querySelector('.about-content'),
    skillsContent : document.querySelector('.skills__line'),
    academicContent : document.querySelector('.academic__courses'),
    xpContent : document.querySelector('.experience__box')
}
const areas = {
    "about": elements.aboutContent,
    "skills": elements.skillsContent,
    "academic": elements.academicContent,
    "projects": elements.xpContent
}



function hideOrShowSomething(e){
    let pressed = e.target.id;
    let area = areas[pressed];
    area.classList.toggle("hide")
    let trigger = e.target;
    trigger.classList.toggle("active");
}

function modifyButtonText(e){
    let button = e.target;
    // if(button.classList.includes("active")){
    //     button.innerHTML = "x";
    // } else {
    //     button.innerHTML = "+";
    // }
}

let sections = document.querySelectorAll('section');
sections.forEach(el => el.addEventListener('click', (e) => {
    
    // console.log(e.target.id);
    // modifyButtonText(e)
    hideOrShowSomething(e)

}));
