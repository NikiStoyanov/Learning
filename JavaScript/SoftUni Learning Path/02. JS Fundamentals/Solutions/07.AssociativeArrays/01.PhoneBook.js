function phoneBook(input) {
    let people = {};

    while (input.length > 0) {
        let [name, phoneNumber] = input.shift().split(' ');

        people[name] = phoneNumber;
    }

    for (const key in people) {
        console.log(`${key} -> ${people[key]}`);
    }
}

phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']
);