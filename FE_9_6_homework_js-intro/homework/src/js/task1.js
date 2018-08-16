// Your code goes here

const amount_of_money = parseFloat(prompt(`Please enter amount of money`));
const discount = parseFloat(prompt(`Please enter the discount`));

const saved = amount_of_money * discount/100;
const price_with_discount = amount_of_money - saved;

if (amount_of_money > 0 && discount > 0 && discount < 100) {
    console.log(`Price without discount: ` + parseFloat(amount_of_money.toFixed(2)) + '\n' + `Discount: `
        + parseFloat(discount.toFixed(2)) + `%` + '\n' + `Price with discount: ` +
        parseFloat(price_with_discount.toFixed(2)) + '\n' + `Saved: ` + parseFloat(saved.toFixed(2)))
} else {
    console.log(`Invalid data`)
}