let gameBox = document.querySelectorAll(".btn");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-game");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; // means O turn, if false then X turn

// 2D ARRAY : storing winning patterna
let WiningPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
];

// using Array to get all the buttons
gameBox.forEach((button) => {
    button.addEventListener("click", () => {
        button.innerText = turnO ? "O" : "X";
        turnO = !turnO; // switch turns
        button.disabled = true;
        checkWinner();
    });
});


const checkWinner = () => {
    for (let pattern of WiningPatterns) {
        // accesing Position Value in Buttons
        let pos1Val = gameBox[pattern[0]].innerHTML;
        let pos2Val = gameBox[pattern[1]].innerHTML;
        let pos3Val = gameBox[pattern[2]].innerHTML;

        // if any  three position equal in Games box then winner fond
        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                showWinner(pos1Val);
            }
        }
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableGameBox();
}

const disableGameBox = () => {
    for (const box of gameBox) {
        box.disabled = true;  
    }
};

const resetGame = () => {
    turnO = true;
    enableGameBox();
    msgContainer.classList.add("hide");
};

const enableGameBox = () => {
    for (const box of gameBox) {
        box.disabled = false;
        box.innerText = ""; 
    }
};

resetBtn.addEventListener("click", resetGame);
newGameBtn.addEventListener("click", resetGame);
