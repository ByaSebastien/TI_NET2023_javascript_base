let a = "A"
for (let i = 1; i <= 10; i++) {
    let line = " ".repeat(10 - i);
    line += a;
    console.log(line);
    a += "AA";
}