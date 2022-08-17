function Thebiggest(numbers) {
    var arr = numbers.split(" ").map(Number);
    var biggest = arr[0];
    for (var i = 1; i < arr.length; i++) {
      if (arr[i] > biggest) {
        biggest = arr[i];
      }
    }
    return biggest;
  }
  
  console.log(Thebiggest(""));
