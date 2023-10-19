function vowelsSum(input) {
    let text = input.shift();
    let sumOfVowels = 0;

    for (let i = 0; i < text.length; i++) {
        switch (text[i]) {
            case "a":
                sumOfVowels += 1;
                break;
            case "e":
                sumOfVowels += 2;
                break;
            case "i":
                sumOfVowels += 3;
                break;
            case "o":
                sumOfVowels += 4;
                break;
            case "u":
                sumOfVowels += 5;
                break;
        }
    }
    
    console.log(sumOfVowels);
}

vowelsSum(["hello"]);