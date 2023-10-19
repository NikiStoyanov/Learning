function addItem() {
    let items = document.getElementById('items');

    let newItem = document.getElementById('newItemText');

    let newLi = document.createElement('li');

    newLi.innerHTML = newItem.value;

    items.appendChild(newLi);
}