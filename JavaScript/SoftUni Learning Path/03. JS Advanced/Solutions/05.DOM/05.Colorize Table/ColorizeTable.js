function colorize() {
    let table = document.getElementsByTagName('table')[0];
    let rows = table.getElementsByTagName('tr');

    for (let index = 1; index < rows.length; index += 2) {
        const row = rows[index];
        
        row.style.backgroundColor = 'Teal';
    }
}