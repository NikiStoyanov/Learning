function skiTrip(input) {
    let days = Number(input.shift());
    let typpeOfRoom = input.shift();
    let grade = input.shift();
    let nights = days - 1;
    let price = 0;

    if (days < 10) {
        switch (typpeOfRoom) {
            case "room for one person":
                price = nights * 18.00;
                break;
            case "apartment":
                price = nights * 25.00;
                price -= (price * 0.30);
                break;
            case "president apartment":
                price = nights * 35.00;
                price -= (price * 0.10);
                break;
        }
    } else if (days <= 15) {
        switch (typpeOfRoom) {
            case "room for one person":
                price = nights * 18.00;
                break;
            case "apartment":
                price = nights * 25.00;
                price -= (price * 0.35);
                break;
            case "president apartment":
                price = nights * 35.00;
                price -= (price * 0.15);
                break;
        }
    } else {
        switch (typpeOfRoom) {
            case "room for one person":
                price = nights * 18.00;
                break;
            case "apartment":
                price = nights * 25.00;
                price -= (price * 0.50);
                break;
            case "president apartment":
                price = nights * 35.00;
                price -= (price * 0.20);
                break;
        }
    }

    switch (grade) {
        case "positive":
            price += (price * 0.25);
            break;
        case "negative":
            price -= (price * 0.10);
            break;
    }

    console.log((price).toFixed(2));
}

skiTrip(["14", "apartment", "positive"]);