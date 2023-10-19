function solve(input) {
    let evenSum = 0;
    let oddSum = 0;

    for (let number of input) {
        let num = Number(number)
        if(num % 2 == 0) {
            evenSum += num;
        } else {
            oddSum += num;
        }
    }

    let diff = evenSum - oddSum;

    console.log(diff);
}

solve(['1', '2', '3', '4']);