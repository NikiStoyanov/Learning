function cityTaxes (name, population, treasury) {
    let city = {
        name: name,
        population: population,
        treasury: treasury,
        taxRate: 10,
        collectTaxes: function() {
            return this.treasury += this.population * this.taxRate;
        },
        applyGrowth: function(percentage) {
            return this.population += this.population * percentage / 100;
        },
        applyRecession: function(percentage) {
            return this.treasury -= this.treasury * percentage / 100;
        }
    };

    return city;
}