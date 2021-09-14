
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
render()
}
/*----- cached element references -----*/
const board = document.getElementById('board');
reset = document.querySelector('#reset');
const startEl = document.querySelector('#start');
const places = document.getElementsByClassName('places');



/*----- event listeners -----*/

board.addEventListener('click', function(e){
    /*console.log(e.target.tagName)*/


if (e.target.tagName === 'DIV' && player){
    e.target.style.backgroundColor ='red';
}else if (e.target.tagName === 'DIV' && !player){
    e.target.style.backgroundColor ='blue';
}
gameTotal++ 
checkGameTurn()
console.log(gameTotal, player)
});



document.querySelector('button')
	.addEventListener('click', reset);

/*----- functions -----*/

function checkGameTurn(){
        return player = gameTotal % 2
}
// when increment our  
function playerColor(){
    if (player === true){

    }
}
startEl 
// counter % 2 returns true or false
// 1 plaer 1 turn true if false player 2 turn
// define function that checks if its player 1 or not then figure out where to call 