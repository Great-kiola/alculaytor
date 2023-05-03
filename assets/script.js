let container = document.querySelector('.container');
const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

buttons.forEach((items) => {
    items.onclick = () => {
        if (items.id === 'delete'){
            display.innerText = '';
        } else if (items.id === 'AC'){
            let string = display.innerText.toString();
            display.innerText = string.substring(0, string.length - 1);
        } else if (display.innerText != '' && items.id === 'equation'){
            display.innerText = eval(display.innerText);
        } else if (display.innerText == '' && items.id === 'equation'){
            display.innerText = 'Empty!';
            setTimeout(() => (display.innerText = ''), 2000);
        } else {
            display.innerText += items.id;
        }
    }
})

// Mode buttons
let DarkMode = document.getElementById('DarkMode');
let GreenMode = document.getElementById('green');
let Normal = document.getElementById('normal');
let yellowMode = document.getElementById('yellow');
let brownMode = document.getElementById('brown');
let blueMode = document.getElementById('blue');
let purpleMode = document.getElementById('purple');



// Modes

Normal.addEventListener('click', normalMode); 
DarkMode.addEventListener('click', darkMode);
GreenMode.addEventListener('click', greenMode);
yellowMode.addEventListener('click', yellowswitch);
brownMode.addEventListener('click', brownswitch);
blueMode.addEventListener('click', blueswitch);
purpleMode.addEventListener('click', purpleswitch);


function normalMode(e){
    e.preventDefault();
    container.classList.remove('darkMode');
    container.classList.remove('green');
    container.classList.remove('yellowMode');
    container.classList.remove('brownMode');
    container.classList.remove('blueMode');
    container.classList.remove('purpleMode');
}


function darkMode(e){
    e.preventDefault();
    container.classList.add('darkMode');
    container.classList.remove('green');
    container.classList.remove('yellowMode');
    container.classList.remove('brownMode');
    container.classList.remove('blueMode');
    container.classList.remove('purpleMode');

}

function greenMode(e){
    e.preventDefault();
    container.classList.remove('darkMode');
    container.classList.add('green');
    container.classList.remove('yellowMode');
    container.classList.remove('brownMode');
    container.classList.remove('blueMode');
    container.classList.remove('purpleMode');
}

function yellowswitch(e){
    e.preventDefault();
    container.classList.remove('darkMode');
    container.classList.remove('green');
    container.classList.add('yellowMode');
    container.classList.remove('brownMode');
    container.classList.remove('blueMode');
    container.classList.remove('purpleMode');
}

function brownswitch(e){
    e.preventDefault();
    container.classList.remove('darkMode');
    container.classList.remove('green');
    container.classList.remove('yellowMode');
    container.classList.add('brownMode');
    container.classList.remove('blueMode');
    container.classList.remove('purpleMode');
}

function blueswitch(e){
    e.preventDefault();
    container.classList.remove('darkMode');
    container.classList.remove('green');
    container.classList.remove('yellowMode');
    container.classList.remove('brownMode');
    container.classList.add('blueMode');
    container.classList.remove('purpleMode');
}

function purpleswitch(e){
    e.preventDefault();
    container.classList.remove('darkMode');
    container.classList.remove('green');
    container.classList.remove('yellowMode');
    container.classList.remove('brownMode');
    container.classList.remove('blueMode');
    container.classList.add('purpleMode');
}

