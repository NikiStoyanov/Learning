function passwordGuess(input) {
    let inputPassword = input.shift();

    if (inputPassword == "s3cr3t!P@ssw0rd") {
        console.log("Welcome");
    } else {
        console.log("Wrong password!");
    }
}

passwordGuess(["s3cr3t!P@ssw0rd"]);