let n = 4;
for (let i = 0; i < n; i++) {
    let spaces = " ".repeat(i); 
    let stars = "*".repeat(2 * (n - i) - 1);
    console.log(spaces + stars+spaces);
}
