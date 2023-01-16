let first = 5;
let second = 7;
// console.log(first, second);

//Wrong approach
// first = second;
// second = first;


//approach: 1
let temp = first;
first = second;
second = temp;

console.log(first, second);

//approch: 2
[first, second] = [second, first]
console.log(first, second);




