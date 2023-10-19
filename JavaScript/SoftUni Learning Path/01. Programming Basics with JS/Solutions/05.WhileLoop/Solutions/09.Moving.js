function moving(input) {
    let width = Number(input.shift());
    let length = Number(input.shift());
    let height = Number(input.shift());

    let freeSpace = 0;
    freeSpace = width * length * height;

    let totalBoxesCount = 0;
    let boxes = input.shift();

    while (boxes != "Done") {
        totalBoxesCount += Number(boxes);

        if (totalBoxesCount  > freeSpace) {
            console.log(`No more free space! You need ${totalBoxesCount - freeSpace} Cubic meters more.`);
            return;
        }
        
        boxes = input.shift();
    }

    console.log(`${freeSpace - totalBoxesCount} Cubic meters left.`);
}

moving(["10", "10", "2", "20", "20", "20", "20", "122"]);