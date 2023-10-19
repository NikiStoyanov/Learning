function areaOfFigures(input) {
    let figure = input.shift();
    
    switch (figure) {
        case "square": 
            let side = Number(input.shift());
            let squareArea = side * side;

            console.log((squareArea).toFixed(3));
        break;
        case "rectangle":
            let firstSide = Number(input.shift());
            let secondSide = Number(input.shift());
            let rectangleArea = firstSide * secondSide;

            console.log((rectangleArea).toFixed(3));      
        break;
        case "circle":
            let radius = Number(input.shift());
            let circleArea = Math.PI * Math.pow(radius, 2);

            console.log((circleArea).toFixed(3));
        break;
        case "triangle":
            let triangleSide = Number(input.shift());
            let high = Number(input.shift());
            let triangleArea = (triangleSide * high) / 2;

            console.log((triangleArea.toFixed(3)));
        break;
    }
}

areaOfFigures(["rectangle", "7", "2.5"]);