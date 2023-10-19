function graterNumber(input) {
    let firstNum = Number(input.shift());
    let secondtNum = Number(input.shift());

    if (firstNum >= secondtNum) {
        console.log(firstNum);
    } else {
        console.log(secondtNum);
    }
}

graterNumber(["10", "10"]);