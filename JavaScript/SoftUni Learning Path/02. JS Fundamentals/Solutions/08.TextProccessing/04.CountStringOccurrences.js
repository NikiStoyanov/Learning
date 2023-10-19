function countStringOccurrences(text, givenWord) {
    let count = 0;
    
    let words = text.split(' ');

    for (const word of words) {
        if (word === givenWord) {
            count++;
        }
    }

    console.log(count);
}

countStringOccurrences("This is a word and it also is a sentence", "is");