
let rock = document.querySelector('.rock');
let paper = document.querySelector('.paper');
let scissors = document.querySelector('.scissors');
let playAgain = document.querySelector('.playAgain');
let winner=document.querySelector('.winner');
let score= document.querySelector('.score');
let computerSelection='';
let scorePlayer=0;
let scoreComputer=0;
let gameWinner = document.querySelector('.gameWinner');




const computerPlay = () => {
   let number = Math.random()*(3); 
    let result;
    if(number<1){
        result='Rock';
    }else if(number>=1 && number<2){
        result='Paper';
        
    }else{
        result='Scissors';

    }
    return result;
}

// computerPlay();

const playRound=(playerSelection,computerSelection)=>{
    computerSelection = computerPlay();

    let result;

    if(playerSelection.toLowerCase()===computerSelection.toLowerCase()){
        winner.textContent = "Tie game!";
        score.textContent=`Player: ${scorePlayer} | Computer: ${scoreComputer}`;
    }else{

   
    
    if(playerSelection.toLowerCase()=='rock'){
        
        if(computerSelection.toLowerCase()=='paper'){
            winner.textContent=`You LOse! ${computerSelection} beats ${playerSelection}`;
            scoreComputer++;
            score.textContent=`Player: ${scorePlayer} | Computer: ${scoreComputer}`;
            
        }
        if(computerSelection.toLowerCase()=='scissors'){
            winner.textContent=`You Win! ${playerSelection} beats ${computerSelection}`;
            scorePlayer++;
            score.textContent=`Player: ${scorePlayer} | Computer: ${scoreComputer}`;
        }
    }
    if(playerSelection.toLowerCase()=='scissors'){
        
        if(computerSelection.toLowerCase()=='paper'){
            winner.textContent=`You Win! ${playerSelection} beats ${computerSelection}`;
            scorePlayer++;
            score.textContent=`Player: ${scorePlayer} | Computer: ${scoreComputer}`;
        }
        if(computerSelection.toLowerCase()=='rock'){
            winner.textContent=`You LOse! ${computerSelection} beats ${playerSelection}`;
            scoreComputer++;
            score.textContent=`Player: ${scorePlayer} | Computer: ${scoreComputer}`;
        }
    }
    if(playerSelection.toLowerCase()=='paper'){
        
        if(computerSelection.toLowerCase()=='rock'){
            winner.textContent=`You Win! ${playerSelection} beats ${computerSelection}`;
            scorePlayer++;
            score.textContent=`Player: ${scorePlayer} | Computer: ${scoreComputer}`;
        }
        if(computerSelection.toLowerCase()=='scissors'){
            winner.textContent=`You LOse! ${computerSelection} beats ${playerSelection}`;
            scoreComputer++;
            score.textContent=`Player: ${scorePlayer} | Computer: ${scoreComputer}`;
        }
    }
}
    checkWinner();
}
// let playerSelection = prompt('Which one are you.Rock,paper or scissors?');

// console.log(playRound(playerSelection, computerSelection));



const checkWinner= () => {
    if (scorePlayer===5){
    gameWinner.textContent=`Humanity won`;
    playAgain.style.display='inline-block';
    rock.style.display='none';
    paper.style.display='none';
    scissors.style.display='none';
    winner.textContent='';
    }else if (scoreComputer === 5) {
        gameWinner.textContent = "Skynet destroyed the planet";
        playAgain.style.display = "inline-block";
        rock.style.display = "none";
        paper.style.display = "none";
        scissors.style.display = "none";
        winner.textContent = "";
      }
}

const resetGame = () =>{
    gameWinner.textContent='';
    scorePlayer=0;
    scoreComputer=0;
    score.textContent=`Player: ${scorePlayer} | Computer: ${scoreComputer}`;
}

rock.addEventListener('click',()=>{
    playerSelection='rock';rock
    playRound(playerSelection,computerSelection);
});
paper.addEventListener('click',()=>{
    playerSelection='paper';
    playRound(playerSelection,computerSelection);
});
scissors.addEventListener('click',()=>{
    playerSelection='scissors';
    playRound(playerSelection,computerSelection);
});

playAgain.addEventListener('click',()=>{
    resetGame();
    playAgain.style.display='none';
    winner.textContent='';
    rock.style.display = "inline-block";
    paper.style.display = "inline-block";
    scissors.style.display = "inline-block";
})

