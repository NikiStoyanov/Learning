function aggregateElements (input) {
    console.log(input.reduce((a, b) => a + b));
    

    let sum = 0;
    input.forEach( num => sum += 1 / num);
    console.log(sum.toFixed(4));

    console.log(input.map(String).join(''));
}

aggregateElements([1, 2, 3]);