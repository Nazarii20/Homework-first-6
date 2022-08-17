
let a = +prompt('Enter a left border');
let b = +prompt('Enter a right border');
let c;
for(c = a; c <= b; c++){
function isPrime(c) { 
    if (a > b) {
        console.log('Right border must be > left border');
        return false;
    }
    if (c <= 1) return false; 
    if (c % 2 == 0 && c > 2) return false; 
    const s = Math.sqrt(c); 
    for(let i = 3; i <= s; i += 2) { 
        if(c % i === 0) return false; 
    }
    return true;
  }
  if (isPrime(c) == true){
    console.log(c);
  }
 
}