function equalArrays (matrix) {
    let count = 0;

    for (let i = 1; i < matrix.length; i += 2) {
        for (let j = 0; j < matrix[i].length; j++) {
            const element = matrix[i][j];
            const upperElement = matrix[i - 1][j];
            const lowerElement = matrix[i + 1]?.[j];
            const nextElement = matrix[i]?.[j + 1];

            if (element === upperElement || element === lowerElement || element === nextElement) {
                count++;
            }
        }
    }

    return count;
}

equalArrays ([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']]
);