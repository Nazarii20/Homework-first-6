let inputNumber = prompt('Введіть число');
let total = 1;

for (i = 1; i <= inputNumber; i++){
total = total * i;
}

console.log(inputNumber + '! = ' + total);