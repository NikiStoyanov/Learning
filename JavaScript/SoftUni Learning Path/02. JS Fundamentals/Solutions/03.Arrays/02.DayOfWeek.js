function dayOfWeek(day) {
    let days = [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    1 <= day && day <= 7
     ? console.log(days[day - 1])
     : console.log('Invalid day!');
}

dayOfWeek(3);