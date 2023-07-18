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
    }
    itemInputBox.value = ''
}

addItemBtn.addEventListener("click", addItem)