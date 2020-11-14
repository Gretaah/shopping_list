const shoppingList = document.querySelector("#shoppingList");
const listItems = document.querySelector("#listItems");

// User input for new list item

shoppingList.addEventListener("submit", function (e) {
    e.preventDefault();
    const userInput = this.elements.userInput;
    newListitem(userInput.value);
    userInput.value = "";
});

// Create new list item 

const newListitem = (userInput) => {
    const newListItem = document.createElement("li");
    const delBtn = document.createElement("BUTTON");
    delBtn.innerHTML = "Delete";
    delBtn.className = "delBtn";
    newListItem.append(delBtn);
    newListItem.append(`${userInput}`);
    listItems.append(newListItem);
}

// Remove item from list

$(document).on("click", ".delBtn", function () {
    $(this).parent().remove();
});