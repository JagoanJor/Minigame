const game = () => {
    let pScore = 0;
    let cScore = 0;
  
    const start = () => {
      const playBtn = document.querySelector(".intro button");
      const introScreen = document.querySelector(".intro");
      const match = document.querySelector(".match");
  
      playBtn.addEventListener("click", () => {
        introScreen.classList.add("fadeOut");
        match.classList.add("fadeIn");
      });
    };
    
    const play = () => {
      const options = document.querySelectorAll(".choose button");
      const playerHand = document.querySelector(".player-hand");
      const computerHand = document.querySelector(".computer-hand");
      const hands = document.querySelectorAll(".hands img");
  
      hands.forEach(hand => {
        hand.addEventListener("animationend", function() {
          this.style.animation = "";
        });
      });
      
      const computerOptions = ["ROCK", "PAPER", "SCISSORS"];
  
      options.forEach(option => {
        option.addEventListener("click", function() {
          
          const computerNumber = Math.floor(Math.random() * 3);
          const computerChoice = computerOptions[computerNumber];
  
          setTimeout(() => {
            compare(this.textContent, computerChoice);
            playerHand.src = `./img/${this.textContent}.png`;
            computerHand.src = `./img/${computerChoice}.png`;
          }, 2000);
          
          playerHand.style.animation = "shakePlayer 2s ease";
          computerHand.style.animation = "shakeComputer 2s ease";
        });
      });
    };
  
    const updateScore = () => {
      const playerScore = document.querySelector(".pscore p");
      const computerScore = document.querySelector(".cscore p");
      playerScore.textContent = pScore;
      computerScore.textContent = cScore;
    };
  
    const compare = (playerChoice, computerChoice) => {
        const winner = document.querySelector(".winner");
        if (playerChoice === computerChoice) {
            winner.textContent = "IT'S A TIE";
            return;
        }
      
        else if (playerChoice === "ROCK") {
            if (computerChoice === "SCISSORS") {
            winner.textContent = "PLAYER WINS";
            pScore++;
            updateScore();
            return;
            } else {
                winner.textContent = "COMPUTER WINS";
                cScore++;
                updateScore();
                return;
            }
        }

        else if (playerChoice === "PAPER") {
            if (computerChoice === "SCISSORS") {
                winner.textContent = "COMPUTER WINS";
                cScore++;
                updateScore();
                return;
            } else {
                winner.textContent = "PLAYER WINS";
                pScore++;
                updateScore();
                return;
            }
        }
     
        else if (playerChoice === "SCISSORS") {
            if (computerChoice === "ROCK") {
                winner.textContent = "COMPUTER WINS";
                cScore++;
                updateScore();
                return;
            } else {
                winner.textContent = "PLAYER WINS";
                pScore++;
                updateScore();
                return;
            }
        }
    };
  
    //Is call all the inner function
    start();
    play();
  };
  
  //start the game function
  game();