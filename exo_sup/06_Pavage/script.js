function fibonacci(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fibonacci(n - 2) + fibonacci(n - 1);
}
function pavageFibo(n) {
    return Math.pow(2, n) * fibonacci(n + 1);
}
function pavage(n) {
    if (n === 1) return 2;
    if (n === 2) return 8;
    return 4 * pavage(n - 2) + 2 * pavage(n - 1);
}

let n = Number(prompt("Nombre de mètre(s) : "));
alert(pavageFibo(n));
alert(pavage(n));
