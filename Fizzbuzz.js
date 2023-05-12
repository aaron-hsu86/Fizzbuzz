function fizzBuzz(start, end){
    var result = null;
    for (var i = start; i <= end; i++){
        if (i%3 === 0){
            result += "Fizz";
        }

        if (i%5 === 0){
            result += "Buzz";
        }

        if (result == null){
            console.log(i);
        }else {
            console.log(result);
        }
        result = null;
    }
}

fizzBuzz(1, 100);