function getClosestToZero() {
    let i;
    let min = arguments[0];
    for (i = 0; i < arguments.length; i++) {
        if (Math.abs(arguments[i]) < min) {
            min = arguments[i];
        }
    }
    return min;
}
