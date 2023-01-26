function publicBusFare(number) {


    if (number >= 50) {
        let getBus = number % 50;
        if (getBus < 11) {
            return getBus * 250;
        }
        else {
            let getMicroBus = getBus % 11;
            return getMicroBus * 250;
        }
    }
    else if (number >= 11 && number < 50) {
        getMicroBus = number % 11;
        return getMicroBus * 250;


    }
    else {

        let getPublicBus = number;
        return getPublicBus * 250;
    }

}

const people = 100;
const getPublicBusFarePrice = publicBusFare(people);
console.log(getPublicBusFarePrice);
