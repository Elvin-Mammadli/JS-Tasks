let x = prompt("Eded daxil et");
x = Number(x);

let arr = [];

while (x > 0) {
    lastNumber = x % 10;
    arr.push(lastNumber);
    x = parseInt(x / 10);
} console.log(arr);

//version 1
// if ((arr[0] === arr[4]) && (arr[1] === arr[3])) {
//     console.log('YES')
// } else console.log('NO')

//version 2
// let a = arr.reverse();
// console.log(a);

// result = 0;
// for (i = 0; i < arr.length; i++) {
//     // result = result + a[i] * (10 ** (arr.length - (i+1)));
// } console.log(result);

//version 3
// let a = arr.reverse();
// console.log(a);

// result = 0;
// for (i = 0; i < arr.length; i++) {
//     result = result*10+arr[i];
// } console.log(result);






