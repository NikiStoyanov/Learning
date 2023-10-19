function solve (data, criteria) {
    data = JSON.parse(data);

    let [key, value] = criteria.split('-');

    let result = [];

    for (const person of data) {
        if (person[key] === value || key === 'all') {
            result.push(person);
        }
    }

    for (let index = 0; index < result.length; index++) {
        const element = result[index];
        console.log(`${index}. ${element.first_name} ${element.last_name} - ${element.email}`);
    }
}

solve(`[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }, {
    "id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"
  }]`,
 'last_name-Johnson'
)