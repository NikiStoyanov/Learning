function matchFullName(input) {
    let regex = /\b[A-Z][a-z]+ [A-Z][a-z]*/g;

    console.log(input.match(regex)?.join(' '));
}

matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov")