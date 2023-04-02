function startBreathing() {
    document.getElementById("startButton").style.display = "none";
    document.getElementById("message").innerHTML = "Breathe In";
    document.getElementById("circle").style.animationName = "expand";
    document.getElementById("circle").style.animationDuration = "4s";
    document.getElementById("background").style.animationName = "bgExpand";
    document.getElementById("background").style.animationDuration = "4s";
    setTimeout(() => {
        document.getElementById("message").innerHTML = "Hold Your Breath";
        document.getElementById("circle").style.animationName = "hold";
        document.getElementById("circle").style.animationDuration = "3s";
        document.getElementById("background").style.animationName = "bgHold";
        document.getElementById("background").style.animationDuration = "3s";
    }, 4000);
    setTimeout(() => {
        document.getElementById("message").innerHTML = "Breathe Out";
        document.getElementById("circle").style.animationName = "shrink";
        document.getElementById("circle").style.animationDuration = "8s";
        document.getElementById("background").style.animationName = "bgShrink";
        document.getElementById("background").style.animationDuration = "8s";
    }, 7000);
    setTimeout(() => {
        document.getElementById("message").innerHTML = "";
        document.getElementById("startButton").style.display = "block";
        document.getElementById("circle").style.animationName = "";
        document.getElementById("circle").style.animationDuration = "";
        document.getElementById("background").style.animationName = "";
        document.getElementById("background").style.animationDuration = "";
    }, 15000);
}
