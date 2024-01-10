let user_score = 0;
let comp_score = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")
const id_user_score = document.querySelector("#user-score");
const id_comp_score = document.querySelector("#comp-score");


const drowGame = () => {
    msg.innerHTML = "Game wad Drow. Play again.";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin) => {
    if (userWin) {
        msg.innerText = "You win!";
        msg.style.backgroundColor = "green";
        user_score++;
        id_user_score.innerText = user_score;
    } else {
        msg.innerText = "You lose!";
        msg.style.backgroundColor = "red";
        comp_score++;
        id_comp_score.innerText = comp_score;
    }
}

const genrateComputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
};

const playGame = (userChoice) => {
    const compChoise = genrateComputerChoice();

    if (userChoice === compChoise) {
        drowGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoise === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoise === "scissors" ? false : true;
        } else {
            userWin = compChoise === "rock" ? false : true;
        }
        showWinner(userWin);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute('id');
        playGame(userChoice);
    });
});