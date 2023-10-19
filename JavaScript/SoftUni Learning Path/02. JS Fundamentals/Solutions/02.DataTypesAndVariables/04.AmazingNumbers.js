function amazingNumbers(num) {
    let currentNum = num;
    let sum = 0;
    num = num.toString();

    for (let i = 0; i < num.length; i++) {
        sum += Number(num[i]);
    }

    sum.toString().includes('9')
        ? console.log(`${currentNum} Amazing? True`)
        : console.log(`${currentNum} Amazing? False`);
}

amazingNumbers(12345);