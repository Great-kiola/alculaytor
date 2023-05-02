let DarkMode = document.getElementById('DarkMode');
let container = document.querySelector('.container');
let GreenMode = document.getElementById('green');
let Normal = document.getElementById('normal');

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


// Modes

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

