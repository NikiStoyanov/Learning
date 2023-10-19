function circleArea (radius) {
    console.log(typeof radius === 'number'
        ? 2 * Math.PI * radius
        : `We can not calculate the circle area, because we receive a ${typeof radius}.`);
}

circleArea ('name');