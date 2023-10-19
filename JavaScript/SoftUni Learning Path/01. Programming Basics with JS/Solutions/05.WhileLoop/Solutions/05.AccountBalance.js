function accountBalance(input) {
    let command = input.shift();

    let totalSum = 0; 

    while (command != "NoMoreMoney") {
        if (command < 0) {
            console.log("Invalid operation!");
            console.log(`Total: ${Number(totalSum).toFixed(2)}`);
            return;
        }

        console.log(`Increase: ${Number(command).toFixed(2)}`);
        totalSum += Number(command);

        command = input.shift();
    }

    console.log(`Total: ${Number(totalSum).toFixed(2)}`);
}

accountBalance(["5.51", "69.42", "100.00", "NoMoreMoney"]);