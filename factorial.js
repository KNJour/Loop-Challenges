var n = 1;
for (var i = 1; i <= 1000000000; i++) {
    n = n * i;
    console.log(i);
    if (n > 1000000000) {
        break;
    }
}
