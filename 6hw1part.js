
const fib = number => {
let i = number - 2;
let n1 = 0, n2 = 1, nextTerm;
console.log('Fibonacci Series:');
if (number == 1){
console.log(n1);
} else if (number == 2){
    console.log(n1, n2);
}else{
    console.log(n1); 
    console.log(n2); 
    nextTerm = n1 + n2;
    while (i != 0) {

        
        console.log(nextTerm);
        n1 = n2;
        n2 = nextTerm;
        nextTerm = n1 + n2;
        i--;
    }
}

}
