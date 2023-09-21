

const elements = {
    aboutContent : document.querySelector('.about-content'),
    skillsContent : document.querySelector('.skills__line'),
    academicContent : document.querySelector('.academic__courses'),
    xpContent : document.querySelectorAll('.experience__box')
}

const areas = {
    "about": elements.aboutContent,
    "skills": elements.skillsContent,
    "academic": elements.academicContent,
    "projects": elements.xpContent,
}

function hideOrShowSomething(e){
    
    let pressed = e.target.id;
    let area = areas[pressed];
    
    if(area.length){
        area.forEach(el => {
            el.classList.toggle("hide")
            let trigger = e.target;
            trigger.classList.toggle("active");
        });
    } else {
        area.classList.toggle("hide");
    }
    let trigger = e.target;
    trigger.classList.toggle("active");
}

let sections = document.querySelectorAll('section');
sections.forEach(el => el.addEventListener('click', (e) => {
    hideOrShowSomething(e)
}));