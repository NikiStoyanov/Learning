function convertToObject(input) {
    let object = JSON.parse(input);

    for (const [key, value] of Object.entries(object)) {
        console.log(`${key}: ${value}`);
    }
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');