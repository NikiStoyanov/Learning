function firstAndLastKNumbers(input) {
    let number = input.shift();

    let result = '';

    for (let i = 0; i < number; i++) {
        result += input[i] + ' ';
    }

    console.log(result);
    result = '';

    for (let i = input.length - number; i < input.length; i++) {
        result += input[i] + ' ';
    }
    console.log(result);
}

firstAndLastKNumbers([2, 7, 8, 9]);