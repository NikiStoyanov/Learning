function stringLength (firstWord, secondWord, thirdWord) {
    let total = firstWord.length + secondWord.length + thirdWord.length;

    let average = Math.floor(total / 3);

    console.log(total);
    console.log(average);
}

stringLength('chocolate', 'ice cream', 'cake');