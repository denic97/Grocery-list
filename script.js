const groceries = document.querySelector('.groceries');
const eraser = document.querySelector('#eraser');
const allItems = document.querySelector('.allItems');
const userInput = document.querySelector('#userInput');

eraser.addEventListener('click', () => {
    allItems.innerHTML = "";
});

userInput.addEventListener('keydown', (event) => {
    if (event.key == 'Enter')
        addItem();
});

// Add items to div
function addItem() {
    var h2 = document.createElement('h2');
    h2.innerHTML = "- " + userInput.value;

    h2.addEventListener('click', () => {
        h2.style.textDecoration = "line-through";
    });

    allItems.insertAdjacentElement("beforeend", h2);

    userInput.value = '';
}