function getMin(num1, num2, num3) {
    if (num1 < num2 && num1 < num3) {
        return num1;
    }
    else if (num2 < num1 && num2 < num3) {
        return num2;
    }
    else {
        return num3;
    }
}
function getMax(num1, num2, num3) {
    return Math.max(number1, number2, number3);


}


const number1 = 65;
const number2 = 75;
const number3 = 55;

const minNumber = getMin(number1, number2, number3);
console.log('Min Number :' + minNumber);

const maxNumber = getMax(number1, number2, number3);
console.log('Max Number : ' + maxNumber);






