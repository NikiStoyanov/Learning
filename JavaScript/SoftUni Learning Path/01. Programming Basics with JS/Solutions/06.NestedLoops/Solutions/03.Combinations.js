function combinations(input) {
    let number = Number(input.shift());
    
    let validCombinations = 0;

    for (let i = 0; i <= number; i++) {
        for (let j = 0; j <= number; j++) {
            for (let k = 0; k <= number; k++) {
                if (i + j + k == number) {
                    validCombinations++;
                }                
            }
        }
    }

    console.log(validCombinations);
}

combinations(["25"]);