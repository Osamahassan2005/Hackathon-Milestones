var toogleButton = document.getElementById('toogle-skills');
var skillSButton = document.getElementById('skills');
toogleButton.addEventListener('click', function () {
    if (skillSButton.style.display === 'none') {
        skillSButton.style.display = 'block';
    }
    else {
        skillSButton.style.display = 'none';
    }
});
