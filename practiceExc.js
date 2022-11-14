// BMI Calculator with function 
// BMI = weight(kg)/(height*2(m))

  function bmiCalculator(weight,height){
    var bmi = weight / (height * height);

   return bmi;
    
  }
                  // --------------BREAK-------------------//

// Combining Comparators in an IF/ELSE statment for BMI Calculator 
// if bmi < 18.5 . output the bmi and state " underweight "
// if bmi >= 18.5 and <= 24.9 . output the bmi and state " normal weight "
// if bmi > 24.9 . output the bmi and state " overweight "

function bmiCalculator(weight, height) {
  var bmi = weight / (height * height);
  
  if (bmi >= 18.5 && bmi <= 24.9){
    return bmi + " normal weight ";
  }else if(bmi < 18.5){
    return bmi + " underweight ";
  }else if(bmi > 24.9){
    return bmi + " overweight ";
  }else {
    return bmi;
  }
}

                  // --------------BREAK-------------------//

// Leap Year. create a function that intake the year and output if its leap or not
// A year is a leap year if it is evenly divisible by 4. EXCEPT if that year is also evenly divisible by 100.. UNLESS that year is also evenly divisible by 400.

function leapYear(year){
  
  if (year % 4 === 0){
    if(year % 100 === 0){
      if(year % 400 === 0){
        return "leap";
      }
    }else{
      return "leap";
    }
  }else{
    return "not leap";
  }
  
}  
  
                  // --------------BREAK-------------------//

// Create a function that takes an array of names and randomly select one and output the name and text saying they pay lunch

var names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"]

function whosPaying(names) {
  var numOfPeople = names.length;
  var randomPosition = Math.floor(Math.random() * numOfPeople);
  var personSelected = name[randomPosition];
  
  return personSelected + " is paying lunch today! ";
  
}

                  // --------------BREAK-------------------//

// FIZZ BUZZ. create a code that creates a sequence of numbers starting from 1 and when number is divisible by 3 it shows "fizz" and divisible by 5 "buzz"
// AND if its divisible by both it output "fizzbuzz"

var output = [];
var count = 1;

function fizzBuzz(){
while (count <= 100) {           // using a while loop, in this case it will execute the if statments while the condition is true so this will loop around 100x 
  
   if (count % 3 === 0 && count % 5 === 0) {
       output.push ("Fizz");
   }else if (count % 3 === 0) {
       output.push ("Fizz");
   }else if (count % 5 === 0) {
       output.push ("Buzz");
   }else {
        output.push(count);
   }
    count++;
}  
  console.log(output);
  
}
  



















  

