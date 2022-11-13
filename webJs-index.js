                                                                // web javascript excercise 

// Adding behaviour to website 

alert('message');  // metod displays an alert dialog with the optional specified content and an ok button.
                    // used when you want information to come through to the user. 
                    // alert is the function.
                    // "message" is the message or string you're displaying.
                    // ; all javascript end in semicolon so browser understands that is the end of the line.  
             
// give your variable a good meaningfull names    
// use camel casing when naming variables for better understanding, that means first letter is small letter and ever subsequent one is. 

var exampleData = "store data"; // with var statement you can declare a variable that store data 
                    // and those data can be "strings", numbers, boolean.
                    // you can also store many variables in a var by seperating them with a comma like example below.

var exampleData = "store data",
    exampleName = "henok",
    exampleAge = 23,
    exampleStatus = true;
                    // you can choose to store data in a var or let, those data can be updated or changed at any time. 
                    // but if you store data in const, it cannot be updated to changed.

var name, age, sex;  // you can also store multiple variables by seperating them in commas 
   name = "henok";
   age = 23;
   sex = "male";

const exapleData = 3.1415;   // const cannot be changed or reassigned just like the number in pi. 


typeof("message");   // typeof lets you identify the type of data that is stored in the message section. 

prompt("input question");    // prompt is similar to an alert but it allows for users to input for the question provided in the message.
                             // it can also be linked with a var, let, or const to store that information. ex var myName = prompt("what is your name);
                             // you can also reassign the value in the prompt by calling out the myName and simply chaning the value with myName = "whatever you want to change it to";

function test() {
  var a = "3";
  var b = "9";
  // swap the value of both variable withought adjusting the info stored in them 
  // answer down
  
  var c = a;   // create a new var to store one of the data in so in this case c=a which mean the value of a is stored in c and a is empty 
   a = b;   // since a is empty now, we can store the value of b in it which will leave the value of b as empty
   b = c;   // and when b is empty we can store it to the value of c which has the original value of a that is 3, in turn leaving the value of c as empty.
  
}

var counter = "strings"
    counter.length            // using the .length option, you can identify the amount of characters there are in the data stored to the variable
                              // so it would display 7
    count.slice(0,181)        // using .slice it will crop the specified length of characers stored in the variable
                              // in this case it will displace from the 0 character to the 180th. 
    count.toUpperCase()       // this will capitalize the charaters stored, or you can specify the character you want to upper case.
                              // this can be done for lower case as well 
                              
%      // this is a modulo. it gives the remainder of two numbers 
++ , --    // you can increment or decrement using the double positive or negative to change the value by 1. so ++5 will be 6

// functions();    you can use a function to creat a block of code designed to perform a patricular task

function firstFunction (parameter1, parameter2){                 // created a function named firstFunction to identify that block of code and declared two parameters
  return true;                                                   // the parameters behave as local variables and can be called upon 
}

if (firstFunction < 3){                   // using an if statement, you can specify a block of code to be executed if a specified condition(in the brackets) is true
  return false;                           // this will be what itll return if the condition above is true.
}else {                                   // using an else statement, you can specify a bloack of code to be executed, if the statement is false
  return true;                            // this is what it will return if the condition is false.
}

[]                                    // Array. arrays are identified with square brackets and can be used by storing many for variable. 
var guestList = ['bob', 'angie', 'martin']         // in this var called guestList is stored an array of information.
guestList[2];                      // you can call on the data stored in a specific position. so since counting start at 0, number 2 will output 'martin'.


Math.floor(Math.random() * 10);        // with the .floor you can turn int into numbers with out decimals. using .random you can generate random numbers
                                       // from 0.00 to 0.99999. and by multipying that by 10 you'd get numbers from 0-9. if you need numbers from 0-10
                                       // you can either add 1 at the end or add 1 to the multiplied value 
