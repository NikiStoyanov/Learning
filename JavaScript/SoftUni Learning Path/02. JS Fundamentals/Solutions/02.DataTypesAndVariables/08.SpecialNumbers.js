function specialNumbers(n) {
    let num = n;
    for (let i = 1; i <= num; i++) {
        let lastDigit = i % 10;
        let firstDigit = parseInt(i / 10);
        let sum = firstDigit + lastDigit;

        let isSpecial = sum == 5 || sum == 7 || sum == 11;
        if (isSpecial) {
            console.log(`${i} -> True`);
            continue;
        }

        console.log(`${i} -> False`);
    }
}

specialNumbers(123);