let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let count = 0;

let turnO = true;
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const showWinner = (winner) => {
    msg.innerText = `The winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
}
const showDraw = () => {
    msg.innerText = `The game is draw`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
}


const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        if (pos1val != "" && pos2val != "" && pos3val != ""){
            if (pos1val === pos2val && pos2val === pos3val){
                showWinner(pos1val);
            }
        }
    }
} 

function gameRun(){
    if (turnO){
        this.innerText = "O";
        turnO = false;
    }
    else{
        this.innerText = "X";
        turnO = true;
    }
    this.disabled = true;
    count = count + 1;

    if (count >= 9){
        showDraw();
    }
    checkWinner();
}

boxes.forEach(box => {
    box.addEventListener("click", gameRun);
});


const disabledBoxes = () => {
    for (const box of boxes) {
        box.disabled = true;
    }
}
const enableBoxes = () => {
    for (const box of boxes) {
        box.disabled = false;
    }
}




function reset(){
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
    count = 0

    for (let box of boxes) {
        box.innerText = "";
    }
}
resetBtn.addEventListener("click", reset);
newGameBtn.addEventListener("click", reset);
