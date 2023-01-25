function oilPrice(digel, pattul, okten) {
    const perDigelPrice = 114;
    const perPettulPrice = 130;
    const perOktenPrice = 135;

    const totalDigelPrice = digel * perDigelPrice;
    const totalPettulPrice = pattul * perPettulPrice;
    const totalOktenPrice = okten * perOktenPrice;
    const totalOilPrice = totalDigelPrice + totalOktenPrice + totalPettulPrice;
    return totalOilPrice;
}

const amountOfDigel = 30;
const amountOfPattul = 20;
const amountOfOkten = 10;

const getOilPrice = oilPrice(amountOfDigel, amountOfPattul, amountOfOkten);
console.log(getOilPrice);
