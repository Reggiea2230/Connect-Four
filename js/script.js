
/*----- constants -----*/


/*----- app's state (variables) -----*/
let player;
let winner;
let playeTwo;
let reset
let color;

let gameBoard =[
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],

]

/*----- cached element references -----*/
const board = document.querySelector('.board');
const reset = document.querySelector('#reset');
const startEl = document.querySelector('#start');



/*----- event listeners -----*/

board.addEventListener('click', function(e){
    console.log(e.target.id)
})


/*----- functions -----*/
