function stringReverse(text) {
    let reversed = '';
    for (let i = text.length - 1; i >= 0; i--) {
        const element = text[i];
        reversed = reversed + element;
        console.log(element, reversed);
    }
    return reversed;
}

const myStr = 'I am a good persion';

const reversed = stringReverse(myStr);

console.log("Reversed Strin: " + reversed);