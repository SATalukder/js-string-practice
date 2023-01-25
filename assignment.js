function isJavaScriptFile(string) {
    return string.endsWith(".js");
}


const fileName = "app.js"
const otherFile = "images.jpg.js"

const result1 = isJavaScriptFile(fileName);
const result2 = isJavaScriptFile(otherFile);
console.log(result2);