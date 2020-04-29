const container = document.querySelector('#container');
// var elements = document.getElementsByClassName('box');


function generateRandomColor() {
    var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
    //random color will be freshly served
}

// creates css grid with # of columns and rows equal to input value
function createGrid(num) {
    container.style["grid-template-columns"] = `repeat(${num}, 1fr)`;
    container.style["grid-template-rows"] = `repeat(${num}, 1fr)`;
}

// clears contents of container
function clearBox() {
    container.innerHTML = "";
}

// create an array for the boxes so they can be called upon using 
// their individual [i] value in the following loop.
const boxArr = [];

// loop to create initial 256 boxes to fit in 16x16 grid. appends each
// new div to the end of the parent container
function createBoxes () {
    for(let i = 0; i < 256; i++) {
        boxArr[i] = document.createElement('div');
        boxArr[i].classList.add('box');
        // boxArr[i].style.backgroundColor = generateRandomColor();
        container.appendChild(boxArr[i]);
    }
}

function createNewBoxes (sideLength) {
    for(let i = 0; i < sideLength; i++) {
        boxArr[i] = document.createElement('div');
        boxArr[i].classList.add('box');
        // boxArr[i].style.backgroundColor = generateRandomColor();
        container.appendChild(boxArr[i]);
    }
}

createBoxes();



function resize ()  {
    clearBox();
    let num = prompt('Please enter new side length:', '');
    createGrid(num);

    createNewBoxes(Math.pow(num, 2));
}



