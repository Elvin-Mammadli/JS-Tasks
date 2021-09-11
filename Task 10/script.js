let x = prompt("Eded daxil et");
x = Number(x);

a = x % 10;
b = parseInt((x % 100) /10)
c = parseInt(x / 100);
console.log(a,b,c);

d = a + b + c;
e = a * b * c;

console.log(d, e);