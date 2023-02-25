console.log("Welcome to Tic Tac Toe");
let music = new Audio('Win Music.mp3');
let audioTurn = new Audio('Click.mp3');
let gameover = new Audio('Game Over.mp3');

let isGameover = false;

let turn = "X";

//function for change turn
const changeTurn = ()=> {
    return turn === "X" ? "O" : "X";
}

//function for check win
const checkWin = ()=>{
    let boxText = document.getElementsByClassName('boxText');
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach(e =>{
        // e[0] means first element ie. 0 and e[1] means second element ie. 1 and so on
        if((boxText[e[0]].innerText === boxText[e[1]].innerText) && (boxText[e[1]].innerText === boxText[e[2]].innerText) && (boxText[e[0]].innerText !== ""))
        {
            document.querySelector('.info').innerText = boxText[e[0]].innerText + " Won";
            music.play();
            isGameover = true;
            document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "80px"
        }
    })
}


//Game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxText = element.querySelector(".boxText");
    element.addEventListener('click',()=>{
        if(boxText.innerText === '')
        {
            boxText.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if(!isGameover){
                document.getElementsByClassName('info')[0].innerText = "Turn for " + turn
            }
        }
    })
})

// console.log(reset);
reset.addEventListener('click',()=>{
    let boxText = document.querySelectorAll(".boxText");
    Array.from(boxText).forEach(element =>{
        element.innerText = "";
        isGameover = false;
        turn = 'X';
        document.getElementsByClassName('info')[0].innerText = "Turn for " + turn
        document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "0px"
        music.pause();
    })
})