
/*----- constants -----*/


/*----- app's state (variables) -----*/
let player;
let winner;
let playeTwo;
let reset;
let gameTotal = 0;
let winningWay = [

    [5, 10, 15, 20], [5, 11, 17, 23], [5, 4, 3, 2], [4, 3, 2, 1], [4, 9, 14, 19], [4, 10, 16, 22], [3, 2, 1, 0], [3, 8, 13, 18], [3, 9, 15, 21],
    [11, 10, 9, 8], [11, 16, 21, 26], [11, 17, 23, 29], [10, 9, 8, 7], [9, 14, 19, 24], [9, 8, 7, 6], [9, 15, 21, 27], [2, 8, 14, 20], 
    [1, 7, 13, 19], [0, 6, 12, 18], [8, 14, 20, 26], [7, 13, 19, 25], [6, 12, 18, 24], [17, 22, 27, 32], [17, 23, 29, 35], 
    [17, 16, 15, 14], [16, 21, 26, 31], [16, 15, 14, 13], [16, 22, 28, 34], [ 15, 14, 13, 12], [15, 21, 27, 33], [15, 20, 25, 30],
    [14, 20, 26, 32], [13, 19, 25, 31], [12, 18, 24, 30], [23, 16, 9, 2], [23, 22, 21, 20], [23, 17, 11, 5], [23, 29, 35, 41], 
    [23, 28, 33, 38], [22, 16, 10, 4], [22, 15, 8, 1], [ 22, 21, 20, 19], [22, 27, 32, 37], [22, 28, 34, 40], [21, 20, 19, 18], [21, 15, 9, 3],
    [21, 14, 7, 0], [21, 26, 31, 36], [21, 27, 33, 39], [20, 14, 8, 2], [20, 26, 32, 38], [20, 15, 10, 5], [20, 27, 34, 41], 
    [20, 26, 32, 38], [19, 13, 7, 1], [19, 25, 31, 37], [19, 14, 9, 4], [19, 26, 33, 40], [18, 12, 6, 0], [18, 24, 30, 36], 
    [18, 13, 8, 3], [18, 25, 32, 39], [29, 23, 17, 11], [29, 22, 15, 8], [29, 28, 27, 26], [28, 22, 16, 10], [28, 21, 14, 7], [28, 27, 26, 25], [27, 21, 15, 9], 
    [27, 20, 13, 6], [27, 26, 25, 24], [26, 20, 14, 8], [26, 21, 16, 11], [25, 19, 13, 7], [25, 20, 15, 10], [24, 18, 12, 6], 
    [24, 19, 14, 9], [35, 29, 23, 17], [35, 28, 21, 14], [35, 34, 33, 32], [34, 28, 22, 16], [34, 33, 32, 31], [34, 27, 20, 13], 
    [33, 27, 21, 15], [33, 26, 19, 12], [ 33, 32, 31, 30], [32, 26, 20, 14], [32, 27, 22, 17], [31, 25, 19, 13], [31, 26, 21, 16], [30, 24, 18, 12], 
    [30, 25, 20, 15], [41, 35, 29, 23], [41, 34, 27, 20], [41, 40, 39, 38], [40, 34, 28, 22], [40, 33, 26, 19], [40, 39, 38, 37], 
    [39, 33, 27, 21], [39, 32, 25, 18], [39, 38, 37, 36], [38, 32, 26, 20], [38, 33, 28, 23], [37, 31, 25, 19], [37, 32, 27, 22], [36, 30, 24, 18], [36, 31, 26, 21]

]
// when clicking add move to an array 
// inside your check win function you will be comparing players array with the win array 
// use .include
// if statement for players who won and lose


let gameBoard =[
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],

]



/*----- cached element references -----*/
const board = document.getElementById('board');
reset = document.querySelector('#reset');
const startEl = document.querySelector('#start');
const places = document.getElementsByClassName('places');

board.addEventListener('click', function(e){
   if (e.target.className == 'tile'){
       movesLike(e)
   }
    
});

/*----- event listeners -----*/




function movesLike(e){
    
    let idx = e.target.id
    let y = Math.floor(idx / 6)
    let x = idx % 6

        if (e.target.tagName === 'DIV' && player){
            e.target.style.backgroundColor ='red';
            gameBoard[x][y] = 'red'
            gameTotal++
        }else if (e.target.tagName === 'DIV' && !player){
            e.target.style.backgroundColor ='blue';
            gameBoard[x][y] = 'blue'
            gameTotal++
        }
        winnerWinner()
        checkPlayer()
        render()
}




/*----- functions -----*/

function initGame(){
    render()
}
function render(){
    console.log(gameBoard)
}
function checkPlayer(){
    return player = gameTotal % 2
  }
  function winnerWinner(){
    for (let i = 0; i < winningWay.length; i++){
        for (let j = 0; j < 1; j++){
            if (document.getElementById(`${winningWay[i][j]}`).style.backgroundColor != ''){
                let a = document.getElementById(`${winningWay[i][j]}`).style.backgroundColor
                let b = document.getElementById(`${winningWay[i][j + 1]}`).style.backgroundColor
                let c = document.getElementById(`${winningWay[i][j + 2]}`).style.backgroundColor
                let d = document.getElementById(`${winningWay[i][j + 3]}`).style.backgroundColor

                if (a == b && b == c && c == d){
                    results.innerHTML = 'Player wins'
                }
            }
        }
    }
}