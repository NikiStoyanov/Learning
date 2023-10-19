function rightPlace(firstString, character, secondString) {
    let word = firstString;
    for (let i = 0; i < word.length; i++) {
        if (word[i] === '_') {
            let result = word.replace(word[i], character);

            result === secondString
                ? console.log('Matched')
                : console.log('Not Matched');

            return;
        }
    } 
}

rightPlace('hel_o', 'l', 'hello');