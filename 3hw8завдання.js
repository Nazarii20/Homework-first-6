//let a = prompt('Введіть число');
//let b = prompt('Введіть степінь');
//let x = Math.pow(a,b);
//console.log(x);
let base = +prompt('Enter a number');
let power = +prompt('Enter a power');
var p = 1;
for (var i=0; i<power; i++) {
  p *= base;
}
console.log(p);