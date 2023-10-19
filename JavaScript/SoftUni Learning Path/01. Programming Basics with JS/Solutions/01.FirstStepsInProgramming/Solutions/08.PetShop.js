function petShop(input) {
    
    let dogs = Number(input.shift());
    let otherAimals = Number(input.shift());
    
    let dogFoodPrice = dogs * 2.50;
    let otherFoodPrice = otherAimals * 4;
    let totalPrice = dogFoodPrice + otherFoodPrice;

    console.log(`${totalPrice} lv.`);
}

petShop(["5", "4"])