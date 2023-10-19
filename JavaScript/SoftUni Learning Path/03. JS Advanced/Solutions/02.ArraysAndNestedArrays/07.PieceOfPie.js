function pieceOfPie (input, firstElement, secondElement) {
    let firstElementIndex = input.indexOf(firstElement);
    let secondElementIndex = input.indexOf(secondElement);

    let result = input.slice(firstElementIndex, secondElementIndex + 1);

    return result;
}

pieceOfPie(['Pumpkin Pie',
 'Key Lime Pie',
 'Cherry Pie',
 'Lemon Meringue Pie',
 'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie');
