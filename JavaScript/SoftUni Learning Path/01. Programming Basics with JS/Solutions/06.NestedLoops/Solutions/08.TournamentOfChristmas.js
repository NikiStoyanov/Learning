function tournamentOfChristmas(input) {
    let days = Number(input.shift());
    
    let wonDays = 0;
    let loseDays = 0;
    let totalMoney = 0;

    for (let i = 1; i <= days; i++) {
        let money = 0;
        let winGames = 0;
        let looseGames = 0;
        let nameOfGame = input.shift();
        
        while (nameOfGame != "Finish") {
            let result = input.shift();
            switch (result) {
                case "win":
                    money += 20;
                    winGames++;
                    break;
                case "lose":
                    money += 0;
                    looseGames++;
                    break;
            }

            nameOfGame = input.shift();
        }

        if (winGames > looseGames) {
            money = money * 110 / 100;
            wonDays++
        }
        else {
            loseDays++;
        }

        totalMoney += money;

    }

    if (wonDays > loseDays) {
        totalMoney = totalMoney * 120 / 100;
        console.log(`You won the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
    }
    else {
        console.log(`You lost the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
    }
}

tournamentOfChristmas(["2", "volleyball", "win", "football", "lose", "basketball", "win", "Finish", "golf", "win", "tennis", "win", "badminton", "win", "Finish"]);