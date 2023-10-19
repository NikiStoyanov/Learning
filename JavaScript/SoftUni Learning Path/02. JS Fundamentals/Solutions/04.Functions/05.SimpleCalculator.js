function simpleCalculator(firstNum, secondNum, action) {
    switch (action) {
        case "multiply":
            console.log(firstNum * secondNum);
            break;
        case "divide":
            console.log(firstNum / secondNum);
            break;
        case "add":
            console.log(firstNum + secondNum);
            break;
        case "subtract":
            console.log(firstNum - secondNum);
            break;
    }
}

simpleCalculator(2, 3, 'add')