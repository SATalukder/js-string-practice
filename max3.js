function maxCompare(jim, dela, cinku) {
    if (jim > dela && jim > cinku) {
        console.log('Jim will get the Cake');
    }
    else if (dela > jim && dela > cinku) {
        console.log('Dela will get the Cake');
    }
    else {
        console.log('Cinku will get the Cake');
    }
}


const jim = 84;
const dela = 99;
const cinku = 100;
maxCompare(jim, dela, cinku);