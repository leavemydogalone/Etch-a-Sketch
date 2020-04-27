const container = document.querySelector('#container');
// const box = document.createElement('box');

// box.setAttribute('style', 'border: 0px; margin: 0px');

function generateRandomColor() {
    var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
    //random color will be freshly served
}

// create an array for the boxes so they can be called upon using 
// their individual [i] value in the following loop.
const boxes = [];

// loop to append new boxes to container, 
function createBoxes () {
    for(let i = 0; i < 256; i++) {
        boxes[i] = document.createElement('div');
        boxes[i].classList.add('box');
        boxes[i].style.backgroundColor = generateRandomColor();
        container.appendChild(boxes[i]);
    }
}

createBoxes();