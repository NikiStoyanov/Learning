function numbersFrom1ToNWithStep3(input) {
    let number = Number(input.shift());

    for (let i = 1; i <= number; i += 3) {
        console.log(i);
    }
}

numbersFrom1ToNWithStep3(["10"]);