//a number that is divisible only by itself and 1 (e.g. 2, 3, 5, 7, 11).

function prime(num) {
    var i, flag = 0, number;
    number = num;
    for (i = 2; i <= number / 2; i++) {
        if (number % i == 0) {
            flag = 1;
            break;
        }
    }
    if (flag == 0) {
        console.log(number + "-The inputed number is Prime");
    } else {
        console.log(number + "-The inputted number is not Prime");
    }
}


prime(12);
