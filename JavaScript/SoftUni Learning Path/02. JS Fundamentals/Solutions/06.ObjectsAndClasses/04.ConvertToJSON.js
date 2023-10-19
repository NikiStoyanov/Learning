function convertToObject(name,lastName, hairColor) {
    let object = {
        name: name,
        lastName: lastName,
        hairColor: hairColor,
    }

    let json = JSON.stringify(object);

    console.log(json);
}

convertToObject('George',
'Jones',
'Brown'
);