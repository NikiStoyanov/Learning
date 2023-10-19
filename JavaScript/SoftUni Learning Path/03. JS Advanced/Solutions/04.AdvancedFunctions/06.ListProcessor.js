function solution (input) {
    let result = [];
    
    for (const line of input) {
        let [command, value] = line.split(' ');

        switch (command) {
            case 'add':
                result.push(value);
                break;
            case 'remove':
                result.splice(result.indexOf(value), 1);
                break;
            case 'print':
                console.log(result.join(','));
        }
    }
};

solution(['add pesho', 'add george', 'add peter', 'remove peter','print']);