function sumNumbers(input) {
    let number = Number(input.shift());
    let dataSum = 0;

    let data = Number(input.shift());

    while (dataSum < number) {
        dataSum+=data;
        data = Number(input.shift());
    }

    console.log(dataSum);
}

sumNumbers(["100", "10", "20", "30", "40"]);