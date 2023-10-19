function centuriesToMinutes(cent) {
    let centuries = cent;
    let years = centuries * 100;
    let days = parseInt(years * 365.2422);
    let hours = days * 24;
    let minutes = hours * 60;

    console.log(`${centuries} centuries = ${years} years = ${days.toFixed(0)} days = ${hours.toFixed(0)} hours = ${minutes.toFixed(0)} minutes`);
}

centuriesToMinutes(3);