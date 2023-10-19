function foreignLanguages(countryName) {
    let country = countryName;

    switch (country) {
        case "England":
        case "USA":
            console.log("English");
            break;
        case "Spain":
        case "Argentina":
        case "Mexico":
            console.log("Spanish");
            break;
        default:
            console.log("unknown");
            break;

    }
}

foreignLanguages('England');