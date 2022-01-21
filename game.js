class Player {
    constructor (rock, paper, scissors) {
        this.rock = rock;
        this.paper = paper;
        this.scissors = scissors;
    }
}

class Com {
    constructor (choice) {
        this.choice = choice
    }
}

class Label {
    constructor (sign, win, lose, draw) {
        this.sign = sign;
        this.win = win;
        this.lose = lose;
        this.draw = draw;
    }
}

const playerOne = new Player (
    document.querySelector(".rock"),
    document.querySelector(".paper"),
    document.querySelector(".scissors")
)

const computer = new Com (
    document.querySelectorAll(".com-choice")
)

const label = new Label (
    document.querySelector(".game-label h1:nth-child(1)"),
    document.querySelector(".game-label h1:nth-child(2)"),
    document.querySelector(".game-label h1:nth-child(3)"),
    document.querySelector(".game-label h1:nth-child(4)")
)

const refresh = document.getElementById("refresh-icon")

function getComputerChoice () {
    const choice = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random(choice) *3);
}

if (randomChoice === 0 ) {
    choice.item(0).style.backgroundColor = "#C4C4C4";
    choice.item(0).style.backgroundColor = "#30px";
    choice.item(1).style.backgroundColor = "transparent";
    choice.item(2).style.backgroundColor = "transparent";

}
else if (randomChoice === 1 ) {
    choice.item(1).style.backgroundColor = "#C4C4C4";
    choice.item(1).style.backgroundColor = "#30px";
    choice.item(0).style.backgroundColor = "transparent";
    choice.item(2).style.backgroundColor = "transparent";
}
else {
    choice.item(2).style.backgroundColor = "#C4C4C4";
    choice.item(2).style.backgroundColor = "#30px";
    choice.item(0).style.backgroundColor = "transparent";
    choice.item(1).style.backgroundColor = "transparent";
}

return choice[randomChoice]
