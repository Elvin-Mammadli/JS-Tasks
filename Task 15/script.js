let x = prompt("Eded daxil et");
x = Number(x);

a = parseInt(x / 100);
b = parseInt((x % 100) / 10);
c = x % 10;

t = (a * 100) + (c * 10) + b;
console.log(t);