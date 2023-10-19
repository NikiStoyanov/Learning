function orders(product, quantity) {
    switch (product) {
        case "coffee":
            console.log((quantity * 1.5).toPrecision(3));
            break;
            case "water":
            console.log((quantity * 1).toPrecision(3));
            break;
            case "coke":
            console.log((quantity * 1.4).toPrecision(3));
            break;
            case "snacks":
            console.log((quantity * 2).toPrecision(3));
            break;
    }
}

orders('coffee', 3);