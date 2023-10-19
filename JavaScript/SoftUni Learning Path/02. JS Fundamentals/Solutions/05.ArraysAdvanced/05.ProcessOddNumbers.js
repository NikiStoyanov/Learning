function processOddNumbers(input) {
    let result = '';
    input
        .filter(num => input.indexOf(num) % 2 !== 0)
        .reverse()
        .forEach(num => result += num * 2 + ' ');

    console.log(result);
}

processOddNumbers([10, 15, 20, 25]);