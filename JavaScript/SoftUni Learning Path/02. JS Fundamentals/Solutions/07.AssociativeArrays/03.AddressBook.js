function addressBook (input) {
    let adresses = {};

    while (input.length > 0) {
        let [name, adress] = input.shift(). split(':');

        adresses[name] = adress;
    }

    let keys = Object.keys(adresses);

    keys.sort();
    
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        
        console.log(`${key} -> ${adresses[key]}`);
    }
}

addressBook(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']
)