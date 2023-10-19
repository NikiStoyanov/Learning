function grades(input) {
    let grade = input.toFixed(2);

    if (grade > 2 && grade < 3) {
        console.log(`Fail (2)`);
    } else if (grade >= 3 && grade < 3.50) {
        console.log(`Poor (${grade})`);
    } else if (grade < 4.50) {
        console.log(`Good (${grade})`);
    } else if (grade < 5.50) {
        console.log(`Very good (${grade})`);  
    } else if (grade <= 6) {
        console.log(`Excellent (${grade})`);
    }
}

grades(5.5);