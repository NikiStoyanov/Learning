function extractText() {
    let list = document.getElementById('items');
    let listItems = list.getElementsByTagName('li');

    let textarea = document.getElementById('result');

    for (const item of listItems) {
        textarea.value += `${item.innerHTML}\n`;
    }
}