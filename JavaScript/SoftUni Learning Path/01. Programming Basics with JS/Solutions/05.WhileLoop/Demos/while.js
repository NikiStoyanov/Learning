function whileLoop(input) {
    let command = input.shift();

    while (command != "End") // Iterates the loop unknown times while the command's value is End.
    {
        command = input.shift(); // Set a new value to the variable command.
    }
}

whileLoop("Hi", ", ", "Nikolay", "End");