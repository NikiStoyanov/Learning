function storage (input) {
    let storage = new Map();

    while (input.length > 0) {
        var [product, quantity] = input.shift().split(' ');

        !storage.has(product)
            ? storage.set(product, Number(quantity))
            : storage.set(product, storage.get(product) + Number(quantity));
    }

    for (const product of storage) {
        console.log(`${product[0]} -> ${product[1]}`);
    }
}

storage(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']
);