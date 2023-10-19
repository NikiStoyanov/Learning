function diagonalSums (matrix) {
    let rows = matrix.length;

    let mainDiagonalSum = 0;
    let secondaryDiagonalSum = 0;

    for (let index = 0; index < rows; index++) {
        mainDiagonalSum += matrix[index][index];

        secondaryDiagonalSum += matrix[index][matrix.length - 1 - index];
    }

    let result = [];
    result.push(mainDiagonalSum);
    result.push(secondaryDiagonalSum);

    console.log(result.join(' '));
}

diagonalSums([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]);