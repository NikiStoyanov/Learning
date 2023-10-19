function personalTitles(input) {
    let age = Number(input.shift());
    let sex = input.shift();

    if (age >= 16) {
        switch (sex) {
            case "m":
                console.log("Mr.");
                break;
            case "f":
                console.log("Ms.");
                break;
        }
    } else {
        switch (sex) {
            case "m":
                console.log("Master");
                break;
            case "f":
                console.log("Miss");
                break;
        }
    }
}

personalTitles(["12", "f"]);