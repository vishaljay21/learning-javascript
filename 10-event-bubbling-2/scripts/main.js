const button = document.querySelector("#button");
const box = document.querySelector(".hidden");
const video = document.querySelector("#video");

button.addEventListener("click", () => box.classList.remove("hidden"));
box.addEventListener("click", () => box.classList.add("hidden"));
video.addEventListener("click", (e) => {
    e.stopPropagation();
    video.play();
});