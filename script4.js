document.getElementById('rateButton').addEventListener('click', function () {
    const rating = prompt('How would you rate my portfolio on a scale of 1 to 5?');
    if (rating >= 1 && rating <= 5) {
        alert(`Thank you for rating my portfolio ${rating}/5!`);
    } else {
        alert('Please enter a valid rating between 1 and 5.');
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const hiddenButtons = document.getElementById("hidden-buttons");

    // Ensure the buttons are hidden on page load
    hiddenButtons.style.display = "none";

    menuToggle.addEventListener("click", function () {
        // Toggle visibility of the hidden buttons
        if (hiddenButtons.style.display === "none") {
            hiddenButtons.style.display = "block"; // Show buttons
        } else {
            hiddenButtons.style.display = "none"; // Hide buttons
        }
    });
});
