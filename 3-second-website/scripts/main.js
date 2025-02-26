const button1 = document.querySelector("button");

button1.addEventListener("click", function () {
  button1.textContent = `Player 1: ${prompt("Enter name: ")}`;
})
