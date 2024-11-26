
// Set start date (February 14, 2024)
const startDate = new Date('2024-02-14T00:00:00');

// Function to update the elapsed time
function updateTimeElapsed() {
    const now = new Date();
    const timeDifference = now - startDate;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Display result on the page
    document.getElementById('timer').innerHTML = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
}

// Update the timer every second
setInterval(updateTimeElapsed, 1000);
