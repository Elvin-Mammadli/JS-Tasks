let x = prompt("Eded daxil et");
x = Number(x);

let arr = [];

while (x > 0) {
    lastNumber = x % 10;
    x = parseInt(x / 10);
    arr.push(lastNumber);
} arr.reverse();

a = arr[0] + arr[1];
b = arr[arr.length-1] - arr[arr.length-2];

console.log(a, b);
