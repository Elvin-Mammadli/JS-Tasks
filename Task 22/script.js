let x = prompt("Eded daxil et");
x = Number(x);

let arr = []

while (x > 0) {
    lastNumber = x % 10;
    arr.push(lastNumber);
    x = parseInt(x / 10);
} arr.reverse();

result = "Rəqəmlər artan sıra ilə düzülüb";

for (i = 0; i < arr.length; i++) {
    if (arr[i] >= arr[i+1]) {
        result = "Rəqəmlər artan sıra ilə düzülməyib"
    } 
} console.log(result);