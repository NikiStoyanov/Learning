function workingHours(input) {
    let time = Number(input.shift());
    let dayOfWeek = input.shift();

    if (time >= 10 && time <= 18) {
        switch (dayOfWeek) {
            case "Monday":
            console.log("open");
            break;
        case "Tuesday":
            console.log("open");
            break;
        case "Wednesday":
            console.log("open");
            break;
        case "Thursday":
            console.log("open");
            break;
        case "Friday":
            console.log("open");
            break;
        case "Saturday":
            console.log("open");
            break;
        case "Sunday":
            console.log("closed");
            break;
        }
    } else {
        console.log("closed");
    }
}

workingHours(["11", "Monday"])