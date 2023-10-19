function lastKNumbersSequence(n, k) {
    let output = [1];

    for (let i = 1; i < n; i++) {
        let currentNum = 0;
        
        for (let j = i - k; j <= i; j++) {
            if (output[j] === undefined) {
                continue;
            }
            
            currentNum += output[j];
        }

        output.push(currentNum);
    }
    
    console.log(output.join(' '));
}

lastKNumbersSequence(8, 2);