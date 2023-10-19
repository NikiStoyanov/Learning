function condenseArrayToNumber(input) {
    let numbers = Array.from(input);

    while (numbers.length > 1) {
        let converted = [];

        for (let i = 0; i <= numbers.length - 2; i++) {
            converted[i] = numbers[i] + numbers[i + 1];
        }
        
        numbers = converted;

    }
    console.log(numbers[0]);
}

condenseArrayToNumber([1, 2, 3, 4]);