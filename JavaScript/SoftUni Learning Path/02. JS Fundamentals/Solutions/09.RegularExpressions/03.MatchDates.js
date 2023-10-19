function matchDates (input) {
    let regex = /\b([0-9]{2})([-.\/])([A-Z][a-z]{2})\2([0-9]{4})\b/g;

    let matches = input.match(regex);

    for (const match of matches) {
        let [day, month, year] = match.split(/[-.\/]/g);

        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
    }
}

matchDates("13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016");