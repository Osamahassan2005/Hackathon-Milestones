var toogleButton = document.getElementById('toogle-skills') as HTMLButtonElement
var skillSButton = document.getElementById('skills') as HTMLElement

toogleButton.addEventListener('click', ()=>{
    if (skillSButton.style.display === 'none') {
        skillSButton.style.display = 'block'
    }
    else {
        skillSButton.style.display = 'none'
    }
});