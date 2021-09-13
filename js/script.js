
/*----- constants -----*/


/*----- app's state (variables) -----*/
let player;
let winner;
let playeTwo;
let reset;
let gameBoard;
let gameTotal = 0;

function init() {
gameBoard =[
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],

]
}
/*----- cached element references -----*/
const board = document.getElementById('board');
reset = document.querySelector('#reset');
const startEl = document.querySelector('#start');
const places = document.getElementsByClassName('places');



/*----- event listeners -----*/

board.addEventListener('click', function(e){
    console.log(e.target)
    console.log(e.target.tagName)
})




/*----- functions -----*/
