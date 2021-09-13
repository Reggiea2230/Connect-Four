



// app State Variables ///
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

//        Cached element reference  //
const board = document.querySelector('.board');
const reset = document.querySelector('#reset');
const startEl = document.querySelector('#start');



/// Event Listner

board.addEventListener('click', function(e){
    console.log(e.target.id)
})


// Functions //