function yardGreening(input) {
    let price = Number(input.shift()) * 7.61;
    let discount = price * 0.18;
    let finalPiceWithDiscount = price - discount;

    console.log(`The final price is: ${finalPiceWithDiscount} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}

yardGreening(["550"]);