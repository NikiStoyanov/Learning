function numberInRange(input) {
    let number = Number(input.shift());

    if (number <= 100 && number >= -100 && number != 0) {
        console.log("Yes");
    } else {
        console.log("No");
    }
}

numberInRange(["0"]);