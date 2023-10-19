function building(input) {
    let floorsCount = Number(input.shift());
    let roomsCount = Number(input.shift());

    let floor = "";
    for (let j = 0; j < roomsCount; j++) {
        floor += `L${floorsCount}${j} `;
    }
    console.log(floor);
    floor = "";
    

    for (let i = floorsCount - 1; i > 0; i--) {
        for (let j = 0; j < roomsCount; j++) {
                if (i % 2 != 0) {
                    floor += `A${i}${j} `;
                }
                else {
                    floor += `O${i}${j} `;
                }
        }
        
        console.log(floor);
        floor = "";  
    }
}

building(["6", "4"]);