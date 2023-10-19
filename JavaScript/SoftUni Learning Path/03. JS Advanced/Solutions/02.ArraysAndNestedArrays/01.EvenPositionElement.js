function evenPositionElement(input) {
    let result = '';

    input
        .filter(num => input.indexOf(num) % 2 === 0)
        .forEach(num => result += num + ' ');

    console.log(result);
}

evenPositionElement(['20', '30', '40', '50', '60']);