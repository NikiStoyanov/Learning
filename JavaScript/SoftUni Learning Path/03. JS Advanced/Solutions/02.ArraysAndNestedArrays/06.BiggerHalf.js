function biggerHalf (input) {
    return input
    .sort((a, b) => a - b)
    .splice(input.length / 2);
}

biggerHalf ([3, 19, 14, 7, 2, 19, 6]);