let DarkModeBtn = document.getElementById('DarkMode');
let container = document.querySelector('.container');


DarkModeBtn.addEventListener('click', changeMode);

function changeMode(e){
    e.preventDefault();
    container.classList.toggle('darkMode');

}