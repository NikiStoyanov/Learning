function solve(num, input) {
    let reversedPartOfArray = [];

    for (let i = 0; i < num; i++) {
        reversedPartOfArray[num - 1 - i] = input[i];
        
    }

    console.log(reversedPartOfArray.join(' '));
}

solve(3, [1, 2, 3, 4]);