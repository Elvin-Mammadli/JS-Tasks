let x = prompt("Eded daxil et");
x = Number(x);

let b = x;
let arr = [];

while (b > 0) {
    lastNumber = b % 10;
    arr.push(lastNumber);
    b = parseInt(b / 10);
}

//version 2--------------------------------------------------
// result = 0;
// for (i = 0; i < arr.length; i++) {
//     result = result + arr[i] * (10 ** (arr.length - (i+1)));
// } console.log(result);

// if (result === x) {
//     console.log("Palindrom");
// } else console.log("Not Polindrom");


//version 3---------------------------------------------

// result = 0;
// for (i = 0; i < arr.length; i++) {
//     result = result*10+arr[i];
// }

// if (result === x) {
//     console.log("Palindrom");
// } else console.log("Not Polindrom");