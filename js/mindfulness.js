function startBreathing() {
    document.getElementById("startButton").style.display = "none";
    document.getElementById("message").innerHTML = "Breathe In";
    document.getElementById("circle").style.animationName = "expand";
    document.getElementById("circle").style.animationDuration = "4s";
    setTimeout(() => {
        document.getElementById("message").innerHTML = "Hold";
        document.getElementById("circle").style.animationName = "hold";
        document.getElementById("circle").style.animationDuration = "3s";
        document.getElementById("circle").style.backgroundColor = "red"; // Add this line
    }, 4000);
    setTimeout(() => {
        document.getElementById("message").innerHTML = "Breathe Out";
        document.getElementById("circle").style.animationName = "shrink";
        document.getElementById("circle").style.animationDuration = "8s";
        document.getElementById("circle").style.backgroundColor = "blue"; // Add this line to change it back to blue when exhale
    }, 7000);
    setTimeout(() => {
        document.getElementById("message").innerHTML = "";
        document.getElementById("startButton").style.display = "block";
        document.getElementById("circle").style.animationName = "";
        document.getElementById("circle").style.animationDuration = "";
    }, 15000);
}
