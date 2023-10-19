function fuelMoney(dist, pass, pricePerL) {
    let distance = Number(dist);
    let passengers = Number(pass);
    let pricePerLiter = Number(pricePerL);

    let emptyBusFuelNeeded = distance /100 * 7;
    let passengersFuelIncrease = passengers * 0.1;

    let totalFuelNeeded = emptyBusFuelNeeded + passengersFuelIncrease;

    let price = totalFuelNeeded * pricePerLiter;

    console.log(`Needed money for that trip is ${price.toFixed(2)}lv.`);
}
fuelMoney(1343, 42, 12);