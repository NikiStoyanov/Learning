function meetings(input) {
    let schedule = {};

    while (input.length > 0) {
        let [day, person] = input.shift(). split(' ');

        if (!schedule.hasOwnProperty(day)) {
            schedule[day] = person;

            console.log(`Scheduled for ${day}`);
        } else {
            console.log(`Conflict on ${day}!`);
        }
    }

    for (const key in schedule) {
        console.log(`${key} -> ${schedule[key]}`);
    }
}

meetings(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']
);