
function wordReverse(text) {
    const words = text.split(' ');
    // console.log(words);
    //[ 'I', 'am', 'a', 'Good', 'Boy' ]
    // let reversed = '';
    let result = [];
    for (let i = words.length - 1; i >= 0; i--) {
        const element = words[i];
        // reversed = reversed + ' ' + element;
        // console.log(reversed);
        result.push(element);


    }
    const reversed = result.join(' ');
    return reversed;

}




const myString = "I am a Good Boy";
const stringRerverse = wordReverse(myString);
console.log("String word Reverse : ", stringRerverse);