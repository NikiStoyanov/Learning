function evenPowersOf2(input) {
    let number = Number(input.shift());

    for (let i = 2; i <= number; i += 2) {
        console.log(Math.pow(2, i));
    }
}

evenPowersOf2(["6"]);