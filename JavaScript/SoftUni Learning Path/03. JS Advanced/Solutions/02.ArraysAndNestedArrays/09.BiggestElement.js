function biggestElement(matrix) {
    let maxNum = Number.MIN_VALUE;

    for (const line of matrix) {
        for (const element of line) {
            if (element >= maxNum) {
                maxNum = element;
            }
        }
    }

    return maxNum;
}

biggestElement([[3, 5, 7, 12],
[-1, 4, 33, 2],
[8, 3, 0, 4]]
);