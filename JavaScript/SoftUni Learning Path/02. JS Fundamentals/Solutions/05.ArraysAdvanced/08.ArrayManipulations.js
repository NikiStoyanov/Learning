function arrayManipulations(input) {
    let arr = input
        .shift()
        .split(' ')
        .map(Number);
    
    while (input.length > 0) {
        let [command, element, position] = input
            .shift()
            .split(' ');
    
        switch(command) {
            case 'Add':
                arr.push(Number(element));
                break;
            case 'Remove':
                arr = arr.filter(num => num !== Number(element));
                break;
            case 'RemoveAt':
                arr.splice(Number(element), 1);
                break;
            case 'Insert':
                arr.splice(Number(position), 0, Number(element));
                break;
        }
    }

    console.log(arr.join(' '));
}

arrayManipulations(['4 19 2 53 6 43',
'Add 3',
'Remove 2',
'RemoveAt 1',
'Insert 8 3']
);