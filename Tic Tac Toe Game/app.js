const boxes = document.querySelectorAll(".box");
const resetBtn = document.querySelector(".reset-btn");
const newGameBtn = document.querySelector(".new-game");
const reset = document.querySelector(".reset");
const msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");

let turnO = true;
let clickCount = 0;

const winPattern = [[0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7], [2, 5, 8], [2, 4, 6], [3, 4, 7], [6, 7, 8]];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        clickCount++;
        checkWin();
    });
});

const enableBox = () => {
    for (const box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const disabledBox = () => {
    for (const box of boxes) {
        box.disabled = true;
    }
};

const showWinner = (win) => {
    msg.innerText = `Congratulations, Winner is ${win}`;
    msgContainer.classList.remove("hide");
    disabledBox();
};

const showDraw = () => {
    msg.innerText = "    Draw!";
    msgContainer.classList.remove("hide");
    disabledBox();
};

const checkWin = () => {
    for (const key of winPattern) {
        const position1 = boxes[key[0]].innerText;
        const position2 = boxes[key[1]].innerText;
        const position3 = boxes[key[2]].innerText;

        if (position1 !== "" && position2 !== "" && position3 !== "") {
            if (position1 === position2 && position2 === position3) {
                showWinner(position1);
                return;
            }
        }
    }

    if (clickCount === 9) {
        showDraw();
    }
};

const resetGame = () => {
    turnO = true;
    clickCount = 0;
    enableBox();
    msgContainer.classList.add("hide");
};

newGameBtn.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);