function substring(text, startIndex, count) {
    text = text.substr(Number(startIndex), Number(count));

    console.log(text);
}

substring('example', 3, 2);