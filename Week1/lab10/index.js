const text = document.getElementById("search-input");
const itemsList = document.getElementById("items-list");

let items = ["Book", "Pen", "Pencil", "Paper", "Backpack"];

function render(filterText) {
    itemsList.innerHTML = "";

    let filteredItems = items.filter(item =>
        item.toLowerCase().includes(filterText.toLowerCase())
    );

    for (let i = 0; i < filteredItems.length; i++) {
        const li = document.createElement("li");
        li.textContent = filteredItems[i];
        itemsList.appendChild(li);
    }
}

render("");
text.addEventListener("input", () => {
    render(text.value);
});
