function addItem() {
    let items = document.getElementById('items');

    let newItem = document.getElementById('newItemText');

    let newLi = document.createElement('li');

    newLi.innerHTML = `${newItem.value} <a href="#">[Delete]</a>`;

    items.appendChild(newLi);

    items.addEventListener('click', deleteItem);

    newItem.value = '';

    function deleteItem(e) {
        let element = e.target.parentNode;
        element.remove();
    }
}