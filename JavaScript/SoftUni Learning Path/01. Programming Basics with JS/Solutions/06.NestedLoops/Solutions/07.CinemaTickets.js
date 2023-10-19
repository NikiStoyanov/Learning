function cinemaTickets(input) {
    let student = 0;
    let standard = 0;
    let kids = 0;
    let totalTickets = 0;

    let movieName = input.shift();

    while (movieName != "Finish") {
        let totalSeats = input.shift();
        let freeSeats = totalSeats;
        let ticketType = input.shift();

        while (ticketType != "End" && freeSeats > 0) {
            switch (ticketType) {
                case "student":
                    freeSeats--;
                    student++;
                    totalTickets++;
                    break;
                case "standard":
                    freeSeats--;
                    standard++;
                    totalTickets++;
                    break;
                case "kid":
                    freeSeats--;
                    kids++;
                    totalTickets++;
                    break;
            }

            if (freeSeats > 0) {
                ticketType = input.shift();
            }
        }
        let percentOfFull = (totalSeats - freeSeats) / totalSeats * 100;
        console.log(`${movieName} - ${percentOfFull.toFixed(2)}% full.`) 

        movieName = input.shift();
    }

    console.log(`Total tickets: ${totalTickets}`)

    let percentOfStudentTickets = (100 * student) / totalTickets;
    let percentOfStandardTickets = (100 * standard) / totalTickets;
    let percentOfKidsTickets = (100 * kids) / totalTickets;

    console.log(`${percentOfStudentTickets.toFixed(2)}% student tickets.`);
    console.log(`${percentOfStandardTickets.toFixed(2)}% standard tickets.`);
    console.log(`${percentOfKidsTickets.toFixed(2)}% kids tickets.`);
}

cinemaTickets(["Taxi", "10", "standard", "kid", "student", "student", "standard", "standard", "End", "Scary Movie", "6", "student", "student", "student", "student", "student", "student", "Finish"]);