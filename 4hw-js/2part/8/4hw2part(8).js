var base = +prompt('Enter a number');
 var power = +prompt('Enter a power');
 var p = 1;
 var i=0;
do{
    i++;
    p *= base;
}while(i < power);
console.log(p);
