const sum = function(q, n) {
    let b1 = 1;
    var result = 0;
    for (let i=0; i<n; i++)
    {
    result = result + b1;
    b1 = b1 * q;
    }
    return result;
   }
