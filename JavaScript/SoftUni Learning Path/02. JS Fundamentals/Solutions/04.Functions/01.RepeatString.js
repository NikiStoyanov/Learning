function repeatString(text, count) {
    let finalText = "";

    for (let i = 0; i < count; i++) {
        
        finalText += text;
    }

    console.log(finalText);
}

repeatString('abc', 3)