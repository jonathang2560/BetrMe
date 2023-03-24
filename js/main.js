// Get the form and table elements
const form = document.querySelector('form');
const table = document.querySelector('table tbody');

// Add event listener to form submission
form.addEventListener('submit', (event) => {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the input values
  const goal = document.querySelector('#goal').value;
  const dueDate = document.querySelector('#due-date').value;

  // Create a new row with the input values
  const newRow = document.createElement('tr');
  newRow.innerHTML = `
    <td>${goal}</td>
    <td>${dueDate}</td>
    <td>0%</td>
  `;

  // Append the new row to the table
  table.appendChild(newRow);

  // Reset the form
  form.reset();
});





//Goals

// Add event listeners to each table row
let rows = document.querySelectorAll("table tbody tr");
rows.forEach((row) => {
  // Show X icon on hover
  row.addEventListener("mouseover", () => {
    row.querySelector(".delete-row").style.display = "inline";
  });
  // Hide X icon on mouseout
  row.addEventListener("mouseout", () => {
    row.querySelector(".delete-row").style.display = "none";
  });
});


// Select the table body
const tbody = document.querySelector('tbody');

// Create a function to delete a row
function deleteRow(event) {
  // Get the clicked row
  const row = event.target.closest('tr');
  // Remove the row from the table
  row.remove();
}

// Add a listener for the hover event on the table body
tbody.addEventListener('mouseover', function(event) {
  // Get the hovered row
  const row = event.target.closest('tr');
  // Check if a row is being hovered
  if (row) {
    // Create a delete button
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    // Add a listener for the click event on the delete button
    deleteButton.addEventListener('click', deleteRow);
    // Append the delete button to the row
    row.lastElementChild.appendChild(deleteButton);
  }
});

// Add a listener for the mouseout event on the table body
tbody.addEventListener('mouseout', function(event) {
  // Get the hovered row
  const row = event.target.closest('tr');
  // Check if a row is being hovered
  if (row) {
    // Remove the delete button from the row
    row.lastElementChild.removeChild(row.lastElementChild.lastElementChild);
  }
});



// Select the table body and delete modal elements
const tableBody = document.getElementById('goal-table-body');
const deleteModal = document.getElementById('delete-modal');
const deleteConfirmButton = document.getElementById('delete-confirm-button');
const deleteCancelButton = document.getElementById('delete-cancel-button');

// Add event listener to the delete button for each row
tableBody.addEventListener('
