function sumOfNumbers(n, m) {
    let sum = 0;

    for (let index = Number(n); index <= Number(m); index++) {
        const element = index;
        
        sum += element;
    }

    console.log(sum);
}

sumOfNumbers('1', '5')