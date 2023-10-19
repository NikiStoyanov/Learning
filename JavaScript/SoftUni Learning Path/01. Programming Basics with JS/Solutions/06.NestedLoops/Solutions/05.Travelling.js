function travelling(input) {
    let destination = input.shift();
    let totalMoney = 0;
    while (destination != "End") {
        let moneyForTrip = Number(input.shift());
        let money = Number(input.shift());
        while (totalMoney < moneyForTrip) {
            totalMoney += money;
            if (totalMoney >= moneyForTrip){
                continue;
            }
            money = Number(input.shift());
        }
        console.log(`Going to ${destination}!`);
        totalMoney -= moneyForTrip;

        destination = input.shift();
    }
}

travelling(["France", "2000", "300", "300", "200", "400", "190", "258", "360", "Portugal", "1450", "400", "400", "200", "300", "300", "Egypt", "1900", "1000", "280", "300", "500", "End"]);