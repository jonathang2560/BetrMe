// Select the form elements
const goalForm = document.querySelector('#goals form');
const moodForm = document.querySelector('#mood-and-mental-health form');
const physicalForm = document.querySelector('#physical-health form');

// Handle the submission of the goal form
goalForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const goal = goalForm.elements.goal.value;
  const dueDate = goalForm.elements.dueDate.value;

  // Add the goal to the table
  const goalTable = document.querySelector('#goals table tbody');
  const goalRow = document.createElement('tr');
  goalRow.innerHTML = `
    <td>${goal}</td>
    <td>${dueDate}</td>
    <td>0%</td>
  `;
  goalTable.appendChild(goalRow);
});

// Handle the submission of the mood form
moodForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const mood = moodForm.elements.mood.value;
  const stressLevel = moodForm.elements.stressLevel.value;
  const date = new Date().toLocaleDateString();

  // Add the mood to the table
  const moodTable = document.querySelector('#mood-and-mental-health table tbody');
  const moodRow = document.createElement('tr');
  moodRow.innerHTML = `
    <td>${date}</td>
    <td>${mood}</td>
    <td>${stressLevel}</td>
  `;
  moodTable.appendChild(moodRow);
});

// Handle the submission of the physical form
physicalForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const activityLevel = physicalForm.elements.activityLevel.value;
  const sleepHours = physicalForm.elements.sleepHours.value;
  const calories = physicalForm.elements.calories.value;
  const date = new Date().toLocaleDateString();

  // Add the physical health to the table
  const physicalTable = document.querySelector('#physical-health table tbody');
  const physicalRow = document.createElement('tr');
  physicalRow.innerHTML = `
    <td>${date}</td>
    <td>${activityLevel}</td>
    <td>${sleepHours}</td>
    <td>${calories}</td>
  `;
  physicalTable.appendChild(physicalRow);
});

function saveUserInput() {
  // Get the user input
  var userInput = document.getElementById("userInput").value;

  // Check if user input is not empty
  if (userInput.trim() !== "") {
    // Save the user input in local storage
    localStorage.setItem("userInput", userInput);

    // Clear the input field
    document.getElementById("userInput").value = "";

    // Display a success message
    alert("User input saved successfully!");
  } else {
    // Display an error message if user input is empty
    alert("Please enter some text to save!");
  }
}

// Load the saved user input when the page is loaded
window.onload = function() {
  var savedUserInput = localStorage.getItem("userInput");

  if (savedUserInput !== null) {
    document.getElementById("userInput").value = savedUserInput;
  }
};
