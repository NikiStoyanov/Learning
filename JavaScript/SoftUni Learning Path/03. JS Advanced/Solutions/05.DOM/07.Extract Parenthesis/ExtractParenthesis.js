function extract(content) {
    let text = document.getElementById(content);

    text = text.innerHTML;
    
    let words = [];

    let index = 0;

    while (index < text.length) {
        let word = '';
        let hasWordStarted = false;

        while (text[index] !== ')') {
            

            if (text[index] === '(') {
                hasWordStarted = true;
            }

            index++;

            if (text[index] === ')') {
                hasWordStarted = false;
            }
            
            if (hasWordStarted) {
                word += text[index];
            }

            if (index === text.length) {
                break;
            }
        }

        if (word !== '') {
            words.push(word);
        }

        index++;
    }

    return words.join('; ');
}