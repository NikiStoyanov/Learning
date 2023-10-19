function largestNumber (firstNum, secondNum, thirdNum) {
    let number = thirdNum;
    
    if (firstNum > secondNum && firstNum > thirdNum) {
        number = firstNum;
    } else if (secondNum > firstNum && secondNum > thirdNum) {
        number = secondNum;
    }

    console.log(`The largest number is ${number}.`);
}

largestNumber(-3, -5, -22.5);