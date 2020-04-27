const container = document.querySelector('#container');
// var elements = document.getElementsByClassName('box');


function generateRandomColor() {
    var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
    //random color will be freshly served
}

// create an array for the boxes so they can be called upon using 
// their individual [i] value in the following loop.
const boxArr = [];

// loop to append new boxes to container, 
function createBoxes () {
    for(let i = 0; i < 256; i++) {
        boxArr[i] = document.createElement('div');
        boxArr[i].classList.add('box');
        // boxArr[i].style.backgroundColor = generateRandomColor();
        container.appendChild(boxArr[i]);
    }

}

createBoxes();


// document.getElementsByClassName('.box').addEventListener('click', function(){
//     document.getElementsByClassName('.box').style.backgroundColor = 'black';
// });