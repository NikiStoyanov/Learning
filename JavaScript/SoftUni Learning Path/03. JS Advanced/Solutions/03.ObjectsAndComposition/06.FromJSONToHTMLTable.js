function fromJSONToHTMLTable (people) {
    people = JSON.parse(people);

    let columns = Object.keys(people[0]);

    let table = '<table>\n';

    let header = `   <tr>`;

    for (const column of columns) {
        header += `<th>${escapeHtml(column)}</th>`;
    }

    header += `</tr>\n`;

    table += header;

    for (const person of people) {
        let info = Object.values(person);

        let row = `   <tr>`;
        for (const data of info) {
            row += `<td>${escapeHtml(data.toString())}</td>`;
        }

        row += `</tr>\n`;
        
        table += row;
    }

    table += '</table>\n';

    function escapeHtml(unsafe) {
        return unsafe
             .replace(/&/g, "&amp;")
             .replace(/</g, "&lt;")
             .replace(/>/g, "&gt;")
             .replace(/"/g, "&quot;")
             .replace(/'/g, "&#39;");
     }
     
     return table;
}

fromJSONToHTMLTable('[{"Name":"Stamat", "Score":5.5}, {"Name":"Rumen", "Score":6}]');