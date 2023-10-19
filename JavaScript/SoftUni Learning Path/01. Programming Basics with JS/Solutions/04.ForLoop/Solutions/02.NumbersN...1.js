function numbersFromNTo1(input) {
    let number = Number(input.shift());

    for (let i = number; i >= 1; i--) {
        console.log(i);
    }
}

numbersFromNTo1(["2"]);