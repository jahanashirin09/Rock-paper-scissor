let choices=["rock","paper","scissor"];
let limit=5;
let playerScore=0;
let computerScore=0;
let endwinner=document.getElementById("endwinner");

function getComputerChoice(){
    let index=Math.floor(Math.random()*3)
    let compuerchoose=choices[index];
    return compuerchoose;
}

function getHumanChoice(values){
    let computerChoice=getComputerChoice();
    const humanChoice=values;
    playRound(computerChoice,humanChoice)
    
}
function playRound(computerChoice,humanChoice){
    let result=""
    
    if (computerChoice===humanChoice){
        result="IT'S A TIE!"


    }
    else {
        switch(humanChoice){
            case "rock":
                result=(computerChoice==="scissor")? "YOU WIN!":"YOU LOSE";
                
                break;
            case "paper":
                result=(computerChoice==="rock")? "YOU WIN!":"YOU LOSE";
                
                break;
            case "scissor":
                result=(computerChoice=="paper")?"YOU WIN!":"YOU LOSE";
                
                break;
        }

    }
    
    playerDisplay.textContent = `You: ${humanChoice}`;
    computerDisplay.textContent = `Opposite player: ${computerChoice}`;
    resultDisplay.textContent = result;
    resultDisplay.classList.remove("greenText", "redText");
    endwinner.classList.remove("greenText", "redText");
    
        
    switch(result){
        case "YOU WIN!":
            resultDisplay.classList.add("greenText");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "YOU LOSE":
            resultDisplay.classList.add("redText");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
    }
    if (playerScore=== limit) {
        playerScore = 0;
        computerScore = 0;
        playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
    playerDisplay.textContent = 'Your choice: ';
    computerDisplay.textContent = 'Opposite player choice: ';
    resultDisplay.textContent = '';
    resultDisplay.classList.remove("greenText", "redText");
        endwinner.textContent="YOU WIN THE GAME!!"
        endwinner.classList.add("greenText");
        
       
        
        
      }
      else if(computerScore === limit) {
        playerScore = 0;
        computerScore = 0;
        playerScoreDisplay.textContent = playerScore;
        computerScoreDisplay.textContent = computerScore;
        playerDisplay.textContent = 'Your choice: ';
        computerDisplay.textContent = 'Opposite player choice: ';
        resultDisplay.textContent = '';
        resultDisplay.classList.remove("greenText", "redText");

            endwinner.classList.add("redText");
        endwinner.textContent="YOU LOSE THE GAME!!"
        
       
      }else{
        endwinner.textContent='';
      }
        
    }

document.getElementById('resetButton').addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
    playerDisplay.textContent = 'Your choice: ';
    computerDisplay.textContent = 'Opposite player choice ';
    resultDisplay.textContent = '';
    resultDisplay.classList.remove("greenText", "redText");
     endwinner.textContent=''
        

        

});


