let buttons = document.querySelectorAll('.show-button');

buttons.forEach(el => el.addEventListener('click', () => {
    hideSomething(el)
}))

function hideSomething(elem){
    elem.classList.toggle('toHideOrShow')
}
