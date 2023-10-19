function cleverLily(input) {
    let age = Number(input.shift());
    let washingMachinePrice = Number(input.shift());
    let singleToyPrice = Number(input.shift());

    let toyCount = 0;
    let moneyFromBirthdays = 0;
    let money = 0;


    for (let i = 1; i <= age; i++) {
        if (i % 2 == 0) {
            moneyFromBirthdays += 10;
            money += moneyFromBirthdays - 1;
        } else {
            toyCount++;
        }
    }

    let moneyFromToys = toyCount * singleToyPrice;

    money += moneyFromToys;

    if (money >= washingMachinePrice) {
        console.log(`Yes! ${(money - washingMachinePrice).toFixed(2)}`);
    } else {
        console.log(`No! ${(washingMachinePrice - money).toFixed(2)}`);
    }
}

cleverLily(["21", "1570.98", "3"]); 