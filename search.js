const lyrics = 'Tumi bondhu kala pakhi ami jeno ki. bosonto kale tomai bolte pari ni. kala kala sada sada';

const lyricslowercase = lyrics.toLowerCase();
// const doesExist = lyrics.includes('pakhi');
// const doesExist = lyrics.includes('pakhi');
const searchString = 'Pakhi';
const doesExist = lyricslowercase.includes(searchString.toLowerCase());
// console.log(doesExist);

//--------------------------------

//indexOf

console.log(lyrics.indexOf('kala'));

//startsWith

console.log(lyrics.startsWith('Tumi'));

//endWith

const fileName = 'myBioData.pdf'
const otherFile = 'myPic.png'

fileName.endsWith('.pdf');