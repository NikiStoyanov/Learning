function fruitShop(input) {
    let fruit = input.shift();
    let dayOfWeek = input.shift();
    let count = Number(input.shift());

    switch (dayOfWeek) {
        case "Monday":
            switch (fruit) {
                case "banana":
                    console.log((count * 2.50).toFixed(2));
                    break;
                case "apple":
                    console.log((count * 1.20).toFixed(2));
                    break;
                case "orange":
                    console.log((count * 0.85).toFixed(2));
                    break;
                case "grapefruit":
                    console.log((count * 1.45).toFixed(2));
                    break;
                case "kiwi":
                    console.log((count * 2.70).toFixed(2));
                    break;
                case "pineapple":
                    console.log((count * 5.50).toFixed(2));
                    break;
                case "grapes":
                    console.log((count * 3.85).toFixed(2));
                    break;
                default:
                console.log("error");
                break;
        }
        break;
    case "Tuesday":
        switch (fruit) {
            case "banana":
                console.log((count * 2.50).toFixed(2));
                break;
            case "apple":
                console.log((count * 1.20).toFixed(2));
                break;
            case "orange":
                console.log((count * 0.85).toFixed(2));
                break;
            case "grapefruit":
                console.log((count * 1.45).toFixed(2));
                break;
            case "kiwi":
                console.log((count * 2.70).toFixed(2));
                break;
            case "pineapple":
                console.log((count * 5.50).toFixed(2));
                break;
            case "grapes":
                console.log((count * 3.85).toFixed(2));
                break;
            default:
                console.log("error");
                break;
        }
        break;
    case "Wednesday":
        switch (fruit) {
            case "banana":
                console.log((count * 2.50).toFixed(2));
                break;
            case "apple":
                console.log((count * 1.20).toFixed(2));
                break;
            case "orange":
                console.log((count * 0.85).toFixed(2));
                break;
            case "grapefruit":
                console.log((count * 1.45).toFixed(2));
                break;
            case "kiwi":
                console.log((count * 2.70).toFixed(2));
                break;
            case "pineapple":
                console.log((count * 5.50).toFixed(2));
                break;
            case "grapes":
                console.log((count * 3.85).toFixed(2));
                break;
            default:
                console.log("error");
                break;
        }
        break;
    case "Thursday":
        switch (fruit) {
            case "banana":
                console.log((count * 2.50).toFixed(2));
                break;
            case "apple":
                console.log((count * 1.20).toFixed(2));
                break;
            case "orange":
                console.log((count * 0.85).toFixed(2));
                break;
            case "grapefruit":
                console.log((count * 1.45).toFixed(2));
                break;
            case "kiwi":
                console.log((count * 2.70).toFixed(2));
                break;
            case "pineapple":
                console.log((count * 5.50).toFixed(2));
                break;
            case "grapes":
                console.log((count * 3.85).toFixed(2));
                break;
            default:
                console.log("error");
                break;
        }
        break;
    case "Friday":
        switch (fruit) {
            case "banana":
                console.log((count * 2.50).toFixed(2));
                break;
            case "apple":
                console.log((count * 1.20).toFixed(2));
                break;
            case "orange":
                console.log((count * 0.85).toFixed(2));
                break;
            case "grapefruit":
                console.log((count * 1.45).toFixed(2));
                break;
            case "kiwi":
                console.log((count * 2.70).toFixed(2));
                break;
            case "pineapple":
                console.log((count * 5.50).toFixed(2));
                break;
            case "grapes":
                console.log((count * 3.85).toFixed(2));
                break;
            default:
                console.log("error");
                break;
        }
        break;
    case "Saturday":
        switch (fruit) {
            case "banana":
                console.log((count * 2.70).toFixed(2));
                break;
            case "apple":
                console.log((count * 1.25).toFixed(2));
                break;
            case "orange":
                console.log((count * 0.90).toFixed(2));
                break;
            case "grapefruit":
                console.log((count * 1.60).toFixed(2));
                break;
            case "kiwi":
                console.log((count * 3.00).toFixed(2));
                break;
            case "pineapple":
                console.log((count * 5.60).toFixed(2));
                break;
            case "grapes":
                console.log((count * 4.20).toFixed(2));
                break;
            default:
                console.log("error");
                break;
        }
        break;
    case "Sunday":
        switch (fruit) {
            case "banana":
                console.log((count * 2.70).toFixed(2));
                break;
            case "apple":
                console.log((count * 1.25).toFixed(2));
                break;
            case "orange":
                console.log((count * 0.90).toFixed(2));
                break;
            case "grapefruit":
                console.log((count * 1.60).toFixed(2));
                break;
            case "kiwi":
                console.log((count * 3.00).toFixed(2));
                break;
            case "pineapple":
                console.log((count * 5.60).toFixed(2));
                break;
            case "grapes":
                console.log((count * 4.20).toFixed(2));
                break;
            default:
                console.log("error");
                break;
        }
        break;
        default:
            console.log("error");
            break;
    }
}

fruitShop(["orange", "Sunday", "3"]);