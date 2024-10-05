function startGame() {
    const mode = document.getElementById("mode").value;
    const gameArea = document.getElementById("gameArea");

    if (mode === "timed") {
        gameArea.innerHTML = "<p>You have selected Timed Mode. Good luck!</p>";
    } else {
        gameArea.innerHTML = "<p>You have selected Reverse Mode. Enjoy!</p>";
    }
}