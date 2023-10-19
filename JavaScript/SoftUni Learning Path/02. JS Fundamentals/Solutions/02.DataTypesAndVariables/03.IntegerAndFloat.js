function integerAndFloat(firstNum, secondNum, thirdNum) {
    let sum = firstNum + secondNum + thirdNum;

    sum === Math.trunc(sum) 
        ? console.log(`${sum} - Integer`)
        : console.log(`${sum} - Float`);
}

integerAndFloat(5, 6.23, 3);