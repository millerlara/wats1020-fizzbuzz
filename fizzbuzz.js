//fizz buzz function
function fizzBuzz() {
  //Statement 1 sets a variable before the loop starts (var i = 1).
  //Statement 2 defines the condition for the loop to run (i must be less than or equal to 20).
  //Statement 3 increases a value (i++) each time the code block in the loop has been executed.
      for (var i = 1; i <=20; i++)
      {
  //divisible by 3 and not 5
        if (i % 3 == 0 && i % 5 != 0)
        {
          print("Fizz");
          console.log("Fizz");
        }
  //divisible by 5 and not 3
        else if (i % 5 == 0 && i % 3 != 0)
        {
          print("Buzz");
          console.log("Buzz");
        }
  //divisible by 3 and 5
        else if (i % 3 == 0 && i % 5 == 0)
        {
          print("FizzBuzz");
          console.log("FizzBuzz");
        }
  //else print out just the number
        else
        {
          print(i);
          console.log(i);
        }
      }
    }

var k = document.getElementById('result');
//print function
    function print(j){
      k.innerHTML += j + '<br>';
    }

//run the fizzBuzz function
fizzBuzz();
