// Get references to the HTML elements
const countElement = document.getElementById('count');
const incrementButton = document.getElementById('incrementButton');
const messageElement = document.getElementById('message');

// Initialize the count
let count = 0;

// Function to update and display the count
function updateCount() {
    count++;
    countElement.textContent = count;
    // Update the message
    messageElement.textContent = "1 stock bought";
}

// Add a click event listener to the button
incrementButton.addEventListener('click', updateCount);
