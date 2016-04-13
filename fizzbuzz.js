
var fizzBuzz = function (i) {
    if ( i % 15 === 0 ) {
        return "fizzbuzz";
    } else if ( i % 3 === 0 ) {
        return "fizz";
    } else if ( i % 5 === 0 ) {
        return "buzz";
    } else {
        return i;
    }
};


for (var i = 1; i <= 100; i++) {
  console.log(fizzBuzz(i));
}
