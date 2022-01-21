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
    (document.querySelectorAll(".com-choice"))
)
    