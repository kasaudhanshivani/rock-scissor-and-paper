let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const userScoreDisplay = document.getElementById("user-score");
const compScoreDisplay = document.getElementById("comp-score");
const msg = document.getElementById("msg");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const updateScoreDisplay = () => {
  userScoreDisplay.innerText = userScore;
  compScoreDisplay.innerText = compScore;
};

const drawGame = () => {
  console.log("game was a draw");
  msg.innerText = "Game draw!";
};

const showWinner = (userWin) => {
  if (userWin) {
    console.log("you win");
    msg.innerText = "You win!";
    msg.style.backgroundColor = "green";
    userScore++;
  } else {
    console.log("you lose");
    msg.innerText = "You lose!";
    msg.style.backgroundColor = "red";
    compScore++;
  }
  updateScoreDisplay();
};

const playGame = (userChoice) => {
  console.log("user choice=", userChoice);
  const compChoice = genCompChoice();
  console.log("comp choice=", compChoice);
  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const choiceId = choice.getAttribute("id");
    console.log("choice was clicked", choiceId);
    playGame(choiceId);
  });
});
