function sumOfNumbers(input) {
    let number = input.shift();
    let sum = 0;

    for (let i = 0; i < number.length; i++) {
        sum += Number(number[i]);
    }
    
    console.log(sum);
}

sumOfNumbers(["564891"]);