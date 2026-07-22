let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice){

    const choices = ["Rock","Paper","Scissors"];

    const computerChoice =
        choices[Math.floor(Math.random()*3)];

    document.getElementById("playerChoice").innerHTML =
        "You: " + playerChoice;

    document.getElementById("computerChoice").innerHTML =
        "Computer: " + computerChoice;

    let result = "";

    if(playerChoice === computerChoice){
        result = "Draw!";
    }
    else if(
        (playerChoice==="Rock" && computerChoice==="Scissors") ||
        (playerChoice==="Paper" && computerChoice==="Rock") ||
        (playerChoice==="Scissors" && computerChoice==="Paper")
    ){
        result = "You Win!";
        playerScore++;
    }
    else{
        result = "Computer Wins!";
        computerScore++;
    }

    document.getElementById("winner").innerHTML = result;

    document.getElementById("playerScore").innerHTML = playerScore;

    document.getElementById("computerScore").innerHTML = computerScore;
}

function resetGame(){

    playerScore = 0;
    computerScore = 0;

    document.getElementById("playerScore").innerHTML = 0;
    document.getElementById("computerScore").innerHTML = 0;

    document.getElementById("playerChoice").innerHTML = "";
    document.getElementById("computerChoice").innerHTML = "";
    document.getElementById("winner").innerHTML = "";
}