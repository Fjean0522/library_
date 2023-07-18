const itemInputBox = document.querySelector("#item-input");
const addItemBtn = document.querySelector(".add-item");
const listContainer = document.querySelector("#list-container");

function addItem() {
    if (itemInputBox.value === '') {
        alert('You Must Enter an Item!');
    } else {
        let li = document.createElement("li");
        li.textContent = itemInputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span")
        span.textContent = "\u00d7";
        li.appendChild(span);
    }
    itemInputBox.value = ''; //resets input box
    saveData();
}

addItemBtn.addEventListener("click", addItem)

listContainer.addEventListener("click", (e) => {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
})

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showList() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showList()