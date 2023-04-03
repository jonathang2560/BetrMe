function addGoal() {
    var goal = document.getElementById("goal").value;
    var deadline = document.getElementById("deadline").value;
    var goalList = document.getElementById("goalList");
    var li = document.createElement("li");
    li.innerHTML = goal + " - Deadline: " + deadline + " <button onclick='deleteGoal(this)'>Delete</button>";
    goalList.appendChild(li);
}

function deleteGoal(item) {
    var li = item.parentNode;
    li.parentNode.removeChild(li);
}

