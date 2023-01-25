function radianToDegree(radian) {
    let pi = Math.PI;
    // let result = radian * 57.2958;
    let result = radian * (180 / pi);
    return parseFloat(result).toFixed(2);
}

const value = 10;
const getDegree = radianToDegree(value);
console.log(getDegree);