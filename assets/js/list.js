const shoppingList = document.querySelector("#shoppingList");
const listItems = document.querySelector("#listItems");

shoppingList.addEventListener("submit", function (e) {
    e.preventDefault();
    const userInput = this.elements.userInput;
    newListitem(userInput.value);
    userInput.value = "";
});

const newListitem = (userInput) => {
    const newListItem = document.createElement("li");
    newListItem.append(`${userInput}`);
    console.log(newListItem);
    listItems.append(newListItem);
}