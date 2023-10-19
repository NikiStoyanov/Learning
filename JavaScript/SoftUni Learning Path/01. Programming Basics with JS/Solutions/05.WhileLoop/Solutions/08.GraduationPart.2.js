function graduationPart2(input) {
    let name = input.shift();
    let failedYears = 0, year = 0, gradeSum = 0;
    let grade;

    while (failedYears < 2 && year < 12) {
        grade = Number(input.shift());
        if (grade < 4.00) {
            failedYears++;

            if (failedYears === 2) {
                break;
            }
        }
        
        year++;
        gradeSum += grade;
    }

    console.log(year == 12
        ? `${name} graduated. Average grade: ${(gradeSum / year).toFixed(2)}`
        : `${name} has been excluded at ${year} grade`);
}

graduationPart2(["Gosho", "5", "5.5", "6", "5.43", "5.5", "6", "5.55", "5", "6", "6", "5.43", "5"]);