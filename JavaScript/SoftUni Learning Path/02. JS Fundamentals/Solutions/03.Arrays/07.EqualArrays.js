function equalArrays(firstArr, secondArr) {
    for (let i = 0; i < firstArr.length; i++) {
        firstArr[i] = Number(firstArr[i]);
        
    }

    for (let i = 0; i < secondArr.length; i++) {
        secondArr[i] = Number(secondArr[i]);
        
    }
    
    let isTrue = true;

    for (let i = 0; i < firstArr.length; i++) {
        if(firstArr[i] != secondArr[i]) {
            isTrue = false;

            console.log(`Arrays are not identical. Found difference at ${i} index`);
            
            return;
        }
        
    }

    let sum = 0;
    for (let num of firstArr) {
        sum += num;
    }

    console.log(`Arrays are identical. Sum: ${sum}`);
}

equalArrays(['1', '2', '3'], ['1', '2', '3']);