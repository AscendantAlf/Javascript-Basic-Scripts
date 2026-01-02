let userValue = prompt("Enter a number between 1 and 100");
userValue = Number(userValue);

let computerValue = Math.floor(Math.random() * 100);
computerValue = Number(computerValue);

let result;

if (userValue > computerValue) {
    result = "Your value was higher than the computer's value"
}
else if (userValue === computerValue) {
    result = "You and the computer chose the same value"
}
else {
    result = "The computer chose a higher value than you"}

console.log(`The computer's number was ${computerValue}`);    
console.log(`Your number was ${userValue}`);
console.log(result);

/* really simple. the project was to make a
"number checker" game where the user picks a
number and the computer picks a number and the
game will alert who had the higher number */