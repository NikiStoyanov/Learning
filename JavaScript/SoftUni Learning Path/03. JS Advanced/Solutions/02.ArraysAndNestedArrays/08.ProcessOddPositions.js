function processOddNumbers (input) {
    let result = [];

    for (let i = 1; i < input.length; i += 2) {
        const element = input[i] * 2;
        
        result.unshift(element);
    }

    console.log(result.join(' '));
}

processOddNumbers([3, 0, 10, 4, 7, 3]);