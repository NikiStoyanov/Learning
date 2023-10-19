function negativeOrPositiveNumbers(input) {
    let output = [];

    for (const num of input) {
        num >= 0
            ? output.push(num)
            : output.unshift(num);
    }

    for (const num of output) {
        console.log(num);
    }
}

negativeOrPositiveNumbers([7, -2, 8, 9]);