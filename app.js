//1st
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div =  document.getElementById("r")
const paper_div =  document.getElementById("p")
const scissors_div =  document.getElementById("s");
//let winningScore_div = document.getElementById(".winningScore")
// cashing the DOM is storing info for later  to use it later so it is storing in the info in a var and using it later and not havig to docgetelebyid

var gamePlay, scores;

//3rd
function getComputerChoice () {
    const choices = ['r', 'p','s'];
    const randomNum = Math.floor(Math.random() * 3); // it wil never go over 3 so a random num between 0 and 3
    return choices[randomNum]; // returns all the possible numbers between 0 and 3 converting it into letters 
}
//6th // converts r,p,s to full form using if statement
function convertToWord (letter) {
if (letter === "r") return "Rock";
if (letter === "p") return "Paper";
 return "Scissors"; // if those 2 are not met return scissors
}
//8th 
/* get winning score
var input = document.querySelector('.winningScore').value;
var winningScore;
// if there is an input
if(input) {
    winningScore = input;
} else {
 // without input default score
 winningScore = 100;
} */
//5th
function win(userChoice, computerChoice) { // this is to increment the score board when ever we geta point
  const smallUserWord = "user".fontsize(3).sup();   // dec of font size and sup is super script 
  const smallCompWord = "comp".fontsize(3).sup();
  const userChoice_div = document.getElementById(userChoice);
  const userLabel_id = document.getElementById("user-label");
  userScore++; // this is to increment the score board when ever we geta point
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML =  computerScore;
  result_p.innerHTML =  `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord}. You win` // makes it full form like rock instead of r usin the func in line 21 // template strings used here `` removes the quotes and plus signs 
  userChoice_div.classList.add('green-glow')
  setTimeout(() => userChoice_div.classList.remove('green-glow'), 300)
  userLabel_id.classList.add('green-shadow')
  setTimeout(() => userLabel_id.classList.remove('green-shadow'), 300)
  
}

function lose(userChoice, computerChoice) {
  computerScore++; // this is to increment the score board when ever we geta point
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML =  computerScore;
  const smallUserWord = "user".fontsize(3).sup();   // dec of font size and sup is super script 
  const smallCompWord = "comp".fontsize(3).sup();
  const computerLabel_id = document.getElementById("computer-label");
  const userChoice_div = document.getElementById(userChoice);
  result_p.innerHTML =  `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallCompWord}. You lost...` // makes it full form like rock instead of r usin the func in line 21 // template strings used here `` removes the quotes and plus signs 
  userChoice_div.classList.add('red-glow')
  setTimeout(() => userChoice_div.classList.remove('red-glow'), 300)
  computerLabel_id.classList.add('green-shadow')
  setTimeout(() => computerLabel_id.classList.remove('green-shadow'), 300)
  
}
  function draw(userChoice, computerChoice) {
  // this is to increment the score board when ever we geta point
   
    const smallUserWord = "user".fontsize(3).sup();   // dec of font size and sup is super script 
    const smallCompWord = "comp".fontsize(3).sup();
    const userChoice_div = document.getElementById(userChoice);
    const computerLabel_id = document.getElementById("computer-label");
    const userLabel_id = document.getElementById("user-label");
    result_p.innerHTML =  `${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(computerChoice)}${smallCompWord}. Its a draw` // makes it full form like rock instead of r usin the func in line 21 // template strings used here `` removes the quotes and plus signs 
    userChoice_div.classList.add('gray-glow')
    setTimeout(() => userChoice_div.classList.remove('gray-glow'), 300)  
    computerLabel_id.classList.add('grey-shadow')
    setTimeout(() => computerLabel_id.classList.remove('grey-shadow'), 300)
    userLabel_id.classList.add('grey-shadow')
    setTimeout(() => userLabel_id.classList.remove('grey-shadow'), 300)

}
//9th 

//4th
function game(userChoice) { //game is going to take a userchoice of r,p,s and compare it comp choice and see who has won
const computerChoice = getComputerChoice();
switch (userChoice + computerChoice){
    case "rs":
    case "pr":
    case "sp":
    win(userChoice, computerChoice);
    break;
    case "rp":
    case "ps":
    case "sr":
     lose(userChoice, computerChoice)
    break;
    case "rr":
    case "pp":
    case "ss":
    draw(userChoice, computerChoice)
    break;
    
}


}
//2nd
function main() { 
rock_div.addEventListener('click', function(){
    game("r")
})
paper_div.addEventListener('click', function(){
    game("p")
})

scissors_div.addEventListener('click', function(){
    game("s")
})

}

main();

// 7th
document.getElementById("restartBtn").onclick=function(){
    location.reload()
} 