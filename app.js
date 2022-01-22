let max = parseInt(prompt("Please enter the maximum number. Enter 'q' to quit."));

if (!max) {
    let max = parseInt(prompt("Please enter a valid number:"));
}

let target = Math.floor(Math.random() * max) + 1;
console.log(target);

let input = parseInt(prompt("Please enter your guess:"));
let attempt = 1;

while (parseInt(input) !== target) {
    if (input === 'q') {
        break; 
    }
    attempt++;
    if (input > target) {
        input = prompt("The target is smaller than your guess. Pls enter again:");
    } else {
        input = prompt("The target is bigger than your guess. Pls enter again:");
    }
}

if (input === "q") {
    alert("You quit this game!");
} else {
    alert("Congrats! You win!");
}
