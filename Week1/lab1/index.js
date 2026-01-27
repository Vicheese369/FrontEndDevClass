const title = document.getElementById("main-title")
const button = document.getElementById('change-btn')
button.addEventListener("click", () => {
    title.textContent = "Javascript is fun ";
});