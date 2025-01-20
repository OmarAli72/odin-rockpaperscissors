function getComputerChoice() {
    random = Math.floor(Math.random() * 3);
    switch (random + 1) {
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors";
    }
}

function getUserChoice(choice) {
    if (choice == 1) {
        return "Rock";
    } else if (choice == 2) {
        return "Paper";
    } else if (choice == 3) {
        return "Scissors";
    } else {
        return false;
    }
}

let userScore = 0;
let computerScore = 0;
gameEnd = false;
while (gameEnd == false) {
    choice = parseInt(prompt("Choose\n 1-Rock\n 2-Paper\n 3-Scissors"));
    userChosen = getUserChoice(choice);
    if (userChosen == false) {
        console.log("Please choose from 1 to 3");
    } else {
        computerChosen = getComputerChoice();
        console.log("Your Score is " + userScore + " Computer Score is " + computerScore);
        console.log("You chose (" + userChosen + ") Computer Chose (" + computerChosen + ")");
        if (userChosen == computerChosen) {
            console.log("Tie")
        } else {
            switch (userChosen) {
                case "Rock":
                    if (computerChosen == "Paper") {
                        console.log("You lost");
                        computerScore++;
                    } else {
                        console.log("You Won");
                        userScore++;
                    }
                case "Scissors":
                    if (computerChosen == "Rock") {
                        console.log("You lost");
                        computerScore++;
                    } else {
                        console.log("You Won");
                        userScore++;
                    }
                case "Paper":
                    if (computerChosen == "Scissors") {
                        console.log("You lost");
                        computerScore++;
                    } else {
                        console.log("You Won");
                        userScore++;
                    }
            }
        }
    }
    if (userScore == 3 || computerScore == 3) {
        gameEnd = true;
    } else {
        gameEnd = false;
    }
}
