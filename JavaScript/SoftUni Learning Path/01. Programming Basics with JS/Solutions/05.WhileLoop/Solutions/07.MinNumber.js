function minNumber(input) {
    let number = input.shift();
    let minNum = Number.MAX_VALUE;

    while (number != "Stop") {
        if (Number(number) < minNum) {
           minNum = number;
        }

        number = input.shift();
    }

    console.log(minNum);
}

minNumber(["100", "99", "80", "70", "Stop"]);