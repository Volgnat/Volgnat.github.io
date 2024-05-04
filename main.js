const button = document.getElementsByClassName('button')[0];
const right_section = document.getElementById('right_section');
const left_section = document.getElementById('left_section');
function return_colors(){
    right_section.style.backgroundColor = "lightgray";
    left_section.style.backgroundColor = "#C0C0C0";
}
let event_handler = (event) => {
    if (right_section.style.backgroundColor !== '#C0C0C0' && left_section.style.backgroundColor !== 'lightgray'){
        right_section.style.backgroundColor = "#C0C0C0";
        left_section.style.backgroundColor = "lightgray";
    } else {return_colors();}
}

button.addEventListener('click', event_handler);