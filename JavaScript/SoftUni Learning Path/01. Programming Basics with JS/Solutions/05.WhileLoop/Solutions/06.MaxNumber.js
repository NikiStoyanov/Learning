function maxNumber(input) {
    let number = input.shift();
    let maxNum = Number.MIN_VALUE;

    while (number != "Stop") {
        if (Number(number) > maxNum) {
           maxNum = number;
        }
        
        number = input.shift();
    }

    console.log(maxNum);
}

maxNumber(["100", "99", "80", "70", "Stop"]);