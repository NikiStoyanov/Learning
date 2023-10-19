function listOfProducts(input) {
    input
        .sort()
        .forEach(product => console.log(`${input.indexOf(product) + 1}.${product}`))
}

listOfProducts(["Potatoes", "Tomatoes", "Onions", "Apples"]);