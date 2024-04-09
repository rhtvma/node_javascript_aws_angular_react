function recursive(n) {
    if (n >= 1) {
        return n * recursive(n - 1)
    } else {
        return 1;
    }
}

console.log(recursive(0));

//output:
// 120
