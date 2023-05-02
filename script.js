let DarkMode = document.getElementById('DarkMode');
let container = document.querySelector('.container');

let GreenMode = document.getElementById('green');


DarkMode.addEventListener('click', darkMode);
GreenMode.addEventListener('click', greenMode); 


function darkMode(e){
    e.preventDefault();
    container.classList.toggle('darkMode');

}

function greenMode(e){
    e.preventDefault();
    container.classList.toggle('green');
}