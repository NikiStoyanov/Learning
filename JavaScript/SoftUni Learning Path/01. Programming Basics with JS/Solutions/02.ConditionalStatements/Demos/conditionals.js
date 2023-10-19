function ifElse(grade) {
    if (grade <= 6.00 && grade >= 5.50) { // If something...
        console.log("Excellent");
    } else if (grade >= 4.50) { // In other case if... 
        console.log("Very good");
    } else if (grade >= 3.50) {
        console.log("Good");
    } else if (grade >= 3) {
        console.log("Poor");
    } else if (grade >= 2) {
        console.log("Fail");
    } else { // In all other cases...
        console.log("Invalid grade");
    }
}

ifElse("5");