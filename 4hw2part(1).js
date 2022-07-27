var fact = 1;
var i = 1;
let inputNumber = prompt('Enter a number')
while(i <= inputNumber) {
	fact = fact * i;
	i++;
}
console.log(inputNumber + '! = ' + fact);