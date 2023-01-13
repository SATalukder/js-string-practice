const lyrics = 'Tumi bondhu kala pakhi ami jeno ki. bosonto kale tomai bolte pari ni. kala kala sada sada';

const parts = lyrics.split(' ');
const sentences = lyrics.split('.');
const chars = lyrics.split("");

// console.log(lyrics);
// console.log(parts);
// console.log(sentences);
// console.log(chars);

const partial = lyrics.slice(5, 8);
console.log(partial);
console.log(lyrics.substring(5, 8));

const str1 = 'Hello';
const str2 = 'World';

console.log(str1.concat(' ', str2));
// Expected output: "Hello World"

console.log(str2.concat(', ', str1));
// Expected output: "World, Hello"

