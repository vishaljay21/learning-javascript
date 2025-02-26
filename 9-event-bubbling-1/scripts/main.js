const container = document.querySelector("#div");
const output = document.querySelector("#output");
const button = document.querySelector("#button");

function eventHandler(e) {
    output.textContent += `You clicked the ${e.currentTarget.tagName} element \n`;
}

document.body.addEventListener("click", eventHandler);
container.addEventListener("click", eventHandler);
button.addEventListener("click", eventHandler);
