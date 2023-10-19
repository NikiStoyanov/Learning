function password(input) {
    let username = input.shift();
    let password = input.shift();

    let tryForSignIn = input.shift();

    while (tryForSignIn != password) {
        tryForSignIn = input.shift();
    }

    console.log(`Welcome ${username}!`);
}

password(["Nakov", "1234", "Pass", "1324", "1234"]);