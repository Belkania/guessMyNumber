let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessige = function (messige) {
  document.querySelector(".messige").textContent = messige;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = document.querySelector(".putNumber").value;
  // When there is no number
  if (!guess) {
    // document.querySelector(".messige").textContent = "No Number!";
    displayMessige("No Number!");

    //When Number is Correct
  } else if (guess == secretNumber) {
    // document.querySelector(".messige").textContent = "Correct Number !";
    displayMessige("Correct Number !");
    document.querySelector(".game").style.backgroundColor = "green";
    document.querySelector(".square").style.width = "200px";
    document.querySelector(".square").textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highScore").textContent = highScore;
    }

    //Whene Number is too High
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector(".messige").textContent =
      //   guess > secretNumber ? "Too High !" : "Too Low !";
      displayMessige(guess > secretNumber ? "Too High !" : "Too Low !");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".messige").textContent = "You Lost the Game !";
      document.querySelector(".score").textContent = 0;
    }
  }
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".messige").textContent = "Too High !";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".messige").textContent = "You Lost the Game !";
  //     document.querySelector(".score").textContent = 0;
  //   }

  //   // When Number is too Low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".messige").textContent = "Too Low !";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".messige").textContent = "You Lost the Game !";
  //     document.querySelector(".score").textContent = 0;
  //   }
  // }
});
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.floor(Math.random() * 21);
  console.log(secretNumber);
  // document.querySelector(".messige").textContent = "Start Guessing...";
  displayMessige("Start Guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".square").textContent = "?";
  document.querySelector(".putNumber").value = "";
  document.querySelector(".game").style.backgroundColor = "black";
  document.querySelector(".square").style.width = "120px";
});
