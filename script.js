const buttons = document.querySelectorAll('button');
const result = document.querySelector('#result');
const scores = document.querySelector('#scores');
userSelection = '';
computerSelection = '';
x = 0;
y = 0;
userScore = 0;
computerScore = 0;
function genSelection () {
    randnum = Math.floor(Math.random() * 3 + 1);
    switch (randnum) {
        case 1:
            computerSelection = 'Rock';
            break;
        case 2:
            computerSelection = 'Paper';
            break;
        case 3:
            computerSelection = 'Scissors';
            break;
    }
};
function determineWinner() {
    if (userSelection === computerSelection) {
        result.textContent = "You chose: " + userSelection + " & Computer chose: " + computerSelection + " (It's a Tie!)";
    } else if (
        (userSelection === "Rock" && computerSelection === "Scissors") ||
        (userSelection === "Scissors" && computerSelection === "Paper") ||
        (userSelection === "Paper" && computerSelection === "Rock")
    ) {
        result.textContent = "You chose: " + userSelection + " & Computer chose: " + computerSelection + " (You Won!)";
        x++;
    } else {
        result.textContent = "You chose: " + userSelection + " & Computer chose: " + computerSelection + " (You Lost!)";
        y++;
    }
}
function mainGame() {
    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            userSelection = e.target.textContent;
            genSelection();
            determineWinner();
            scores.textContent = "User: " + x + " Computer: " + y; 
        })
    });
};

mainGame();