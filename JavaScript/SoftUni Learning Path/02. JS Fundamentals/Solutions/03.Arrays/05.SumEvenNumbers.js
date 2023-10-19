function sumEvenNums(input) {
    let sum = 0;

    for (let number of input) {
        let num = Number(number)
        if(num % 2 == 0) {
            sum += num;
        }
    }

    console.log(sum);
}

sumEvenNums(['1', '2', '3', '4']);