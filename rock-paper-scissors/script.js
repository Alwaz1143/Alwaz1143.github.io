let userScore = 0;
let compScore = 0;
let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");

let resetBtn = document.querySelector("#reset");

function genCompChoice(){
    const options = ['rock', 'paper', 'scissor'];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}
function showWinner(userWin, userChoice, compChoice){
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "Green";

    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "Red";
    }
}

function playGame(userChoice){
    const compChoice = genCompChoice();

    if(userChoice === compChoice){
        msg.innerText = "Game draw!";
        msg.style.backgroundColor = '#081b31';
    }
    else{
        let userWin = true;
        if (userChoice === 'rock'){
            userWin = compChoice === 'paper' ? false : true;
        }
        else if (userChoice === 'paper'){
            userWin = compChoice === 'scissor' ? false : true;
        }
        else if (userChoice === 'scissor'){
            userWin = compChoice === 'rock' ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}



choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});

resetBtn.addEventListener("click", ()=>{
    userScore = 0;
    compScore = 0;
    userScorePara.innerText = "0";
    compScorePara.innerText = "0";
})