// // players character number is different from players picked number
// //
// // function to check players input
// //

// --- GLOBAL VARIABLES ---
let playerTargets = []; // Array to hold the 5 target numbers
let currentRoundNumbers = []; // Array to hold the 5 throws

function displayMessage(messageText) {
  document.getElementById("messageBoard").textContent = messageText;
}

// --- PHASE 1: LOCK IN ALL TARGETS ---
function lockTargets() {
  // Clear out any old targets
  playerTargets = [];

  // Loop through 1 to 5 to grab the target inputs
  for (let i = 1; i <= 5; i++) {
    const inputId = "target" + i;
    const targetNum = Number(document.getElementById(inputId).value);

    // *Note: To keep this simple, I removed the validation rules for now,
    // but you can add your if/else checks back in here later!
    playerTargets.push(targetNum);
  }

  console.log("Locked Targets: ", playerTargets);
  displayMessage("Targets locked in! Sing the song... waiting for Otungbe de!");
}

// --- PHASE 2: COLLECT THE THROWS ---
function collectRandomNumbers() {
  currentRoundNumbers = [];

  for (let i = 1; i <= 5; i++) {
    const inputId = "throw" + i;
    const playerNum = Number(document.getElementById(inputId).value);
    currentRoundNumbers.push(playerNum);
  }

  console.log("Throws collected: ", currentRoundNumbers);
  sumOfPlayerPickedNumber();
}

// --- PHASE 3: CALCULATE AND FIND THE WINNER ---
function sumOfPlayerPickedNumber() {
  let totalSum = 0;

  // 1. Calculate the total sum
  for (let i = 0; i < currentRoundNumbers.length; i++) {
    totalSum += currentRoundNumbers[i];
  }

  // 2. Figure out who won!
  let winners = []; // We use an array just in case two people picked the same target!

  // Loop through the targets array to check for matches
  for (let i = 0; i < playerTargets.length; i++) {
    // If Player's target equals the total sum...
    if (playerTargets[i] === totalSum) {
      // Arrays start at 0, so playerTargets[0] is Player 1.
      // We add 1 to 'i' so it says "Player 1" instead of "Player 0"
      winners.push("Player " + (i + 1));
    }
  }

  // 3. Display the final result
  if (winners.length > 0) {
    // If the winners array has people in it, we have a match!
    displayMessage(
      "Otungbe de! The sum is " +
        totalSum +
        ". " +
        winners.join(" & ") +
        " qualifies!",
    );
  } else {
    // Nobody matched
    displayMessage("Sum was " + totalSum + ". No match! Play the round again!");
  }
}
