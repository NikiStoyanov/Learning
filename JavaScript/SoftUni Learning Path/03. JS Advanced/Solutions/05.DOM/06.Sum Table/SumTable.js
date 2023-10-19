function sumTable() {
    let table = document.getElementsByTagName('table')[0];
    let rows = table.getElementsByTagName('tr');

    let total = 0;

    for (let index = 1; index < rows.length - 1; index++) {
        const row = rows[index];
        
        let price = row.getElementsByTagName('td')[1];

        total += Number(price.innerHTML);
    }

    let sum = document.getElementById('sum');
    sum.innerHTML = total;
}