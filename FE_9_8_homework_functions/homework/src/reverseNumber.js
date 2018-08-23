function reverseNumber(n) {
    let signNegative = -1;
    let sign = 1;
    if (n < 0) {
        sign = signNegative;
    }
    n = parseFloat(n.toString().split('').reverse().join(''));
    return n * sign;
}

