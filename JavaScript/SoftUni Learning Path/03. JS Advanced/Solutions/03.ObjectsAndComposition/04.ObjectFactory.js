function objectFactory (library, inputOrders) {
    let orders = [];

    for (const item of inputOrders) {
        let order = item.template;

        for (const part of item.parts) {
            order[part] = library[part];
        }

        orders.push(order);
    }

    return orders;
}