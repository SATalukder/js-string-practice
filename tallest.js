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

const height = [167, 190, 120, 165, 137, 200];
const tallest = maxInArray(height);
console.log('Tallest persion is : ' + tallest + 'cm');