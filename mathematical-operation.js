var onionPrice = 43;
var eggPrice = 10;
var eggQuantity = 7;
var totalPrice = onionPrice + eggPrice;
var priceDrifference = onionPrice - eggPrice;
var eggPriceMultiplication = eggPrice * eggQuantity;

console.log(onionPrice);
console.log(eggPrice);
console.log(onionPrice + eggPrice);
console.log(totalPrice);
console.log(priceDrifference);
console.log(eggPriceMultiplication);

var moneyAvailable = 100;
var orangePrice = 5;
var orangeQuantity = moneyAvailable / orangePrice;
console.log(orangeQuantity);

// special edition 
var fistNumber = 0.1;
var secondNumber = 0.2;
var total = fistNumber + secondNumber;
total = total.toFixed(1);
// console.log(parseFloat(total.toFixed(1)));
console.log(parseFloat(total));

// modulus 
var mangoes = 57;
var hungryPerson = 12;
var dividing = mangoes / hungryPerson;
console.log(dividing);
var remaining = mangoes % hungryPerson;
console.log(remaining);
