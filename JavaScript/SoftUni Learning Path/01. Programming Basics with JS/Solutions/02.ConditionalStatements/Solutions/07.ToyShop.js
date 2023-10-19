function toyShop(input) {
    let tripPrice = Number(input.shift());
    let puzzlesCount = Number(input.shift());
    let dollsCount = Number(input.shift());
    let teddyBearsCount = Number(input.shift());
    let minionsCount = Number(input.shift());
    let trucksCount = Number(input.shift());

    let price = puzzlesCount * 2.60 + dollsCount * 3 + teddyBearsCount * 4.10 + minionsCount * 8.20 + trucksCount * 2;
    let toysCount = puzzlesCount + dollsCount + teddyBearsCount + minionsCount + trucksCount;

    if (toysCount >= 50) {
        let discount = 0.25 * price;
        price -= discount;
    }

    let storagePrice = 0.1 * price;
    let wonMoney = price - storagePrice;

    if (wonMoney >= tripPrice) {
        console.log(`Yes! ${((wonMoney - tripPrice).toFixed(2))} lv left.`);
    } else {
        console.log(`Not enough money! ${((tripPrice - wonMoney).toFixed(2))} lv needed.`);
    }
}

toyShop(["40.8", "20", "25", "30", "50", "10"]);