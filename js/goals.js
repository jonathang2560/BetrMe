function addGoal() {
    var goal = document.getElementById("goal").value;
    var deadline = document.getElementById("deadline").value;
    var error = document.getElementById("error");
  
    if (goal.trim() === "" || deadline.trim() === "") {
      error.style.display = "block";
      setTimeout(function() {
        error.style.display = "none";
      }, 5000);
      return;
    }
  
    var goalList = document.getElementById("goalList");
    var li = document.createElement("li");
    li.innerHTML = goal + " - Deadline: " + deadline + " <button class='delete' onclick='deleteGoal(this)'>Delete</button>";
    goalList.appendChild(li);
  
    document.getElementById("goal").value = "";
    document.getElementById("deadline").value = "";
  }
  
  function deleteGoal(item) {
    var li = item.parentNode;
    li.parentNode.removeChild(li);
  }
  