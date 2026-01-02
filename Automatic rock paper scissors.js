array = ["Rock", "Paper", "Scissors"];

userChoice = Math.floor(Math.random() * 3);
computerChoice = Math.floor(Math.random() * 3);

let response;

userResponse = array[userChoice];
computerResponse = array[computerChoice];

if (userResponse === computerResponse){
        response = `Tie. The computer chose ${computerResponse} and you chose ${userResponse}`;
}
else if ((userResponse === "Rock" && computerResponse === "Scissors")
    || (userResponse === "Paper" && computerResponse === "Rock")
    || (userResponse === "Scissors" && computerResponse === "Paper")) 
    {
        response = `You won the round. You picked ${userResponse} and the computer picked ${computerResponse}`;
    }
else if ((computerResponse === "Rock" && userResponse === "Scissors")
    ||  (computerResponse === "Paper" && userResponse === "Rock")
    ||  (computerResponse === "Scissors" && userResponse === "Paper"))
    {
        response = `The computer won the round. The computer picked ${computerResponse} and you picked ${userResponse}`;
}

console.log(response);

/* this was a much more tame exercise including
rock paper scissors. This exercise didn't require
a match logic (play to 5, increment the scores to 5 with a loop
based on round winner) */

/* in the future, if needed, I could implement
the game logic and have a prompt from the user
equate (if) to the same choice in the array */