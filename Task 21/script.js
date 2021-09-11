let x = prompt("Eded daxil et");
x = Number(x);

let arr = []

while (x > 0) {
    lastNumber = x % 10;
    arr.push(lastNumber);
    x = parseInt(x / 10);
}

result = 0;

for (i = 0; i < arr.length; i++) {
    result = result + arr[i] ** 2;
} console.log(result);