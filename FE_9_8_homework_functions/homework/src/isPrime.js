function isPrime(n) {

    if (n <= 1) {
        return false;
    } else {
        for (let x = 2; x < n; x++) {
            if (n % x === 0) {
                return false;
            }
        }
        return true;
    }
}
