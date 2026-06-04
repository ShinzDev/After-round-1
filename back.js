

// // players character number is different from players picked number 
// //
// // function to check players input
// // 



// Global variable, waiting for a valid number
let savedInput = 0; 

function checkInput() {  
    // 1. Grab the raw text from the input
    const rawValue = document.getElementById('userInput').value;
    
    // 2. Convert it to a temporary number just for testing
    const testNumber = Number(rawValue);

    // 3. Run the tests...
    if (rawValue === '') {
        alert('You left it blank! Please enter a number.');
    } 
    else if (isNaN(testNumber)) {
        alert('That is text, not a number!');
    } 
    else if (!Number.isInteger(testNumber)) {
        alert('Please enter a whole number, no decimals!');
    } 
    else if (testNumber < 1 || testNumber > 20) {
        alert('Pick a number from 1 to 20!');
    } 
    else {
        // 4. SUCCESS! It passed all tests. 
        // NOW we permanently save it and log it.
        savedInput = testNumber;
        console.log('Valid number accepted: ' + savedInput);
        alert('Correct!');
    }
}

function sumOfPlayerPickedNumber() {
    // This will only log 0 (the default) or a truly valid number
    console.log(savedInput * 2); 
}