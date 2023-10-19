function deleteByEmail() {
    let customers = document.getElementsByTagName('tr')
    
    let email = document.getElementsByTagName('input')[0].value;

    for (const customer of customers) {
        let currentEmail = customer.getElementsByTagName('td')[1]?.textContent;

        if (currentEmail === email) {
            customer.remove();

            document.getElementById('result').innerHTML = 'Deleted';

            return;
        }
    }

    document.getElementById('result').innerHTML = 'Not found';

    document.getElementsByTagName('input')[0].value = '';
}