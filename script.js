let DarkMode = document.getElementById('DarkMode');
let container = document.querySelector('.container');

let GreenMode = document.getElementById('green');

let Normal = document.getElementById('normal');


DarkMode.addEventListener('click', darkMode);
GreenMode.addEventListener('click', greenMode);
Normal.addEventListener('click', normalMode); 

function normalMode(e){
    e.preventDefault();
    container.classList.remove('darkMode');
    container.classList.remove('green');
}


function darkMode(e){
    e.preventDefault();
    container.classList.remove('green');
    container.classList.add('darkMode');

}

function greenMode(e){
    e.preventDefault();
    container.classList.add('green');
}

