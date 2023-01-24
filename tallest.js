function maxInArray(height) {
    console.log(height);
    let max = 0;
    for (let i = 0; i < height.length; i++) {
        if (max < height[i]) {
            max = height[i];
        }
    }
    return max;
}

function getMinInArray(numbers) {
    let min = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        if (min > numbers[i]) {
            min = numbers[i];
        }

    }
    return min;

}

const height = [167, 190, 120, 165, 137, 300, 65, 200];
const tallest = maxInArray(height);
const smollest = getMinInArray(height);

console.log('Tallest persion is : ' + tallest + 'cm');
console.log('Smallest persion is : ' + smollest + 'cm');