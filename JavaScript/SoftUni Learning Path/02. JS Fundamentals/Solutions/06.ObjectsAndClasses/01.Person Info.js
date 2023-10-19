function createPerson(firstName, lastName, age) {
    let person = {
        firstName: firstName,
        lastName: lastName,
        age: Number(age),
    }

    return person;
}

createPerson('Peter', 'Pan', '20');