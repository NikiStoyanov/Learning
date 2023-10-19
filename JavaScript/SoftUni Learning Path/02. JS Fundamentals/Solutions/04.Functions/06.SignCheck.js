function signCheck(firstNum, secondNum, thirdNum) {
    let isFirstNumNegative = firstNum < 0;
    let isSecondNumNegative = secondNum < 0;
    let isThirdNumNegative = thirdNum < 0;

    let total = 0;

    if (isFirstNumNegative) {
        total++;
    }

    if (isSecondNumNegative) {
        total++;
    }

    if (isThirdNumNegative) {
        total++;
    }

    total % 2 == 0 
        ? console.log("Positive")
        : console.log("Negative")
}

signCheck(2, 3, -1)