let x = prompt("Bir eded daxil edin");
x = Number(x);

a = parseInt(x / 100);
b = parseInt((x % 100) / 10);
c = x % 10;

console.log(a, b, c)