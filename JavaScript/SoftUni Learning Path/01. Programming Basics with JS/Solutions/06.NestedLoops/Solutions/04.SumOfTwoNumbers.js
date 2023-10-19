function sumOfTwoNumbers(input) {
    let start = Number(input.shift());
    let end = Number(input.shift());
    let magicalNum = Number(input.shift());
    let validCombinationsCount = 0;

    for (let i = start; i <= end; i++) {
        for (let j = start; j <= end; j++) {
            if (i + j ==  magicalNum) {
                validCombinationsCount++;
                console.log(`Combination N:${validCombinationsCount} (${i} + ${j} = ${magicalNum})`);
                return;
            }
            else {
                validCombinationsCount++;
            }            
        }
    }

    console.log(`${validCombinationsCount} combinations - neither equals ${magicalNum}`);
}

sumOfTwoNumbers(["1", "10", "5"]);
