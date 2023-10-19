function squareOfStars (length) {
    let line = [];

    for (let i = 0; i < length; i++) {
        line[i] = '*';
    }

    for (let i = 0; i < length; i++) {
        console.log(line.join(' '));
    }
}

squareOfStars (5);