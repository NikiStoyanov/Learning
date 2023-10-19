function townPopulation (input) {
    let towns = [];

    for (const record of input) {
        let townName = record.split(' <-> ')[0];
        let townPopulation = record.split(' <-> ')[1];

        let town = {
            name: townName,
            population: Number(townPopulation)
        };

        if (towns.filter(t => t.name === town.name).length !== 0) {
            let current = towns.filter(t => t.name === town.name)[0];

            current.population += town.population;
        } else {
            towns.push(town);
        }
    }

    for (const town of towns) {
        console.log(`${town.name} : ${town.population}`);
    }
}

townPopulation (['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']

);