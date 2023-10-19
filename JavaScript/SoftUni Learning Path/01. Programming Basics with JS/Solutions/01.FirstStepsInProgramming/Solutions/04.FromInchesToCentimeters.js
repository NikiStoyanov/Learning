function fromInchesToCentimeters(input) {
    let inches = Number(input.shift());
    let centimeters = inches * 2.54;

    console.log(centimeters);
}

fromInchesToCentimeters(["5"])