let minNumber = 0;
let maxNumber = 5;
let maxPrize = 10;
const magicNumberOne = 1;
const magicNumberTwo = 2;
const magicNumberThree = 3;
const magicNumberFour = 4;

function getRandom(min, max) {
    const one = 1;
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + one)) + min;
}

function calcPrize(numberOfPlay, i) {
    return Math.floor(Math.pow(magicNumberThree, numberOfPlay - magicNumberOne) * maxPrize /
        Math.floor(Math.pow(magicNumberTwo, i - magicNumberOne)));
}

function startGame(numberOfPlay, money) {
    let random_number = getRandom(minNumber, maxNumber);
    let number;
    for (let i = 1; i < magicNumberFour; i++) {
        number = parseFloat(prompt(`Enter a number from ` + minNumber + ` to ` + maxNumber + `\n` + `Attempts left: `
            + i + `\n` + `Total prize: ` + money + `$` + `\n` + `Possible prize on current attempt: ` +
            Math.floor(Math.pow(magicNumberThree, numberOfPlay - magicNumberOne) * maxPrize /
                Math.floor(Math.pow(magicNumberTwo, i - magicNumberOne))) + `$`));
        if (random_number === number) {
            money += calcPrize(numberOfPlay, i);
            if (confirm(`Congratulation! Your prize is:  ` + money + `\n` + `Do you want to continue?`)) {
                maxNumber *= magicNumberTwo;
                startGame(++numberOfPlay, money);
            } else {
                break;
            }
        } else {
            alert(`Please try again`);
        }
    }

    if (confirm(`Do you want to play again?`)) {
        startGame(magicNumberOne, 0)
    } else {
        alert(`You did not become a millionaire, but can.`);
    }
}


const playGame = confirm(`Do you want to play a game?`);


if (playGame === false) {
    alert(`You did not become a millionaire, but can.`);
} else {
    startGame(magicNumberOne, 0);

}
