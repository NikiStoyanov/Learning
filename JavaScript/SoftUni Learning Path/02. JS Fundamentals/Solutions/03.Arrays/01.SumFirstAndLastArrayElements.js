function sum(input) {
    let firstNum = Number(input[0]);
    let lastNum = Number(input[input.length - 1]);

    let result = firstNum + lastNum;

    console.log(result);
}

sum(['1', '2']);