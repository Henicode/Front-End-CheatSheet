                                                                // web javascript excercise 

// Adding behaviour to website 

alert('message');  // method displays an alert dialog with the optional specified content and an ok button.
                    // used when you want information to come through to the user. 
                    // alert is the function.
                    // "message" is the message or string you're displaying.
                    // ; all javascript end in semicolon so browser understands that is the end of the line.  
             
// ** give your variable a good meaningfull names    
// ** use camel casing when naming variables for better understanding, that means first letter is small letter and ever subsequent one is. 

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
}else if (firstFunction >=8){             // using else if statement, you can add more conditions to the function so when the first if statement is not true, you can try this
                                          // the else if statement is only executed only when the if statement is false
  return "rumble";                        // and if this else if statement is true then it will execute the command which in this case is the word rumble
}else if (firstFunction >= 8 && firstFunction < 3){     // by using the && method, you can combine comparisons for the function 
  return "jump";                                        // so if both the conditions are true, this line will be executed which will return the string "jump".
}else {                                   // using an else statement, you can specify a block of code to be executed, if both statements above it is false
  return true;                            // this is what it will return if the condition is false.
}

[]                                    // Array. arrays are identified with square brackets and can be used by storing many for variable. 
var guestList = ['bob', 'angie', 'martin']         // in this var called guestList is stored an array of information.
guestList[2];                      // you can call on the data stored in a specific position. so since counting start at 0, number 2 will output 'martin'.


Math.floor(Math.random() * 10);        // with the .floor you can turn int into numbers with out decimals. using .random you can generate random numbers
                                       // from 0.00 to 0.99999. and by multipying that by 10 you'd get numbers from 0-9. if you need numbers from 0-10
                                       // you can either add 1 at the end or add 1 to the multiplied value 

=== OR ==                             // the difference between two and three equal signs. three equals checks that if its equal in value and data types 
  
var names = ["john", "bob","kenny"]   //  Array. using an array which is the square brackets. you can store many data items/values for the variable. 
                                     //   you can store numbers, strings, boolean values (true and false), characters, objects in an array.
name.includes("kenny");              // by using .inlcudes and specifying what you are looking for. you can find out if what is specified is inside the array.
name.push("");                      // using the .push function. you can add item to the last element of the array.
name.pop;                           // can use .pop to remove the last item of the array. 

/// WHILE LOOOOOOOP                // while loop loops through a block of code as long as a specified condition is true.

var i = 1;                        // we will use this variable i to store a number to use for a while loop
while(i < 10) {                  // with the while loop, it basically says while the statement in the parentheses is true which in this case is while i is less than 10 
  console.log(i);                // while the statement above is true, you can execute this line of code in the curly bracket.
  i++;                           // then we increment the value of i until the while statement is false so this creates a loop until 9
}

// FOR LOOOOOOOP                 // for loop is basically a reshuffled version of while loop. more simplified 

for(i=1; i<10 ; i++){            // in the parentheses the first statement is the start of the consition, second is the end and third is the change being implimented 
  console.log(i);                // now while the first two statements in the paratheses is true, this line will be executed
}                                // so for this loop. first stat sets the value of i to 1, second stat lets know the conition so WHILE i is less than 10,
                                 // third will be executed once the loop for the two statement is true. so it goes i=1 => i<10 then it executes the console.log. 
                                 // And then the third command is implimented after the condition which is the console.log. 

                   /// The Document Object Model. DOM
                   // Adding JavaScript to HTML 

<body onload='alert'("Hello Wrold")>       // Option one adding javascript is by adding the code in the body tag using the onload command. NOT RECOMMEND
 
<script type = "text/javascrip">          // this is internal script which allows you to write javascript code inside the html file whithin the scrip tag
  JavaScript code
 </script> 
 
<script src="index.js"> </script>       /// this is external file. just like how you link the css file to html. you can also use the script src option to link 
                                        // your javascript codes. placement of this script tag in html is important. make sure to PLACE IT BEFORE THE CLOSING BODY TAG.


                                                           // The HTML DOM Tree of Objects //


//                   HTML                  // This is the .firstElementChild. can be accessed using document.firstElementChild; 
//                    | 
//                     -- HEAD
//                    |     |
//                    |     |--META
//                    |     |--TITLE
//                    |     |--LINK
//                    |
//                    |------BODY       
//                            |
//                            |--H1
//                            |--INPUT
//                            |--BUTTON
//                            |--UL
//                            |  |-----LI
//                            |  |      |--A
//                            |  |--LI
//                            |  |--LI
//                            |
//                            |---------SCRIPT 

 // Methods are actions you can perform (on HTML Elements). A method is an action you can do (like add or deleting an HTML element).
// properties are values (of HTML Elements) that you can set or change.A property is a value that you can get or set (like changing the content of an HTML element).

// Using the dot notation. you can call the properties or methods. 
                         __                                                                                 __
          .click()         |                                                                   .innerHTML     |  
          .appendChild()   |---  //  these are METHODS that can be called for action           .style         |--- // these are PROPERTIES that are values of the HTML  
          .setAttribute()  |    // they are a function that the object can do                  .firstChild    |    //
                         __|                                                                                __|

document        // you can access the entire HTML file with this command 
document.firstElementChild   // you can access a specific property by using the dot notation. this can be expanded like( document.firstElementChild.lastElementChild ).
                             // using properties, you can access specific parts, and using method you can manipulate it. 
var heading = document.firstElementChild.firstElementChild;         // you can assign a variable a property of the document. which in this case is the head 

heading.innerHTML = "Hello World";        // since the header property is stored in a variable. we can call that variable and assign it a method to make it do thing

// DOM Manipulating 

const title = document.getElementByID('The-id-name');       // using the get element by id property. you can select using the id name and store it for manipulation.
const list = document.getElementsByClassName('class-name-here');   // this will get property by class name. also can be stored in a variable for manipulation
const item = document.getElementsByTagName('tag-name');        // also can get property using the tag name and store in var for manipulation
// const itemExample = document.getElementsByTagName('head ul');   // using the sapce. you can do a hierarchical method and add a rout to getting an element inside an element                        
const select = document.querySelector('div');            // query selector method returns the first element that matches a CSS selector.in this case, it will return the first div element.
const selectAll = document.quweySelectoreAll('div'); // query slector all return all matches with the CSS selector specified not just the first. this will return all the divs in the html file. 

const selectEverting = document.querySelectror("#id a");   // using a hierarchical structure. you can specify you selection by calling for an anchor tag that is inside an id. 
// ** REMINDER ** To select Id, need to specify by using (#). To select class, need to specify by using by sing (.)

// Methods 

.innerHTML = "Text";          // this is one of many style method that you can apply to manipulate the document. ( https://www.w3schools.com/jsref/dom_obj_style.asp )
.textContent = "other Text";    // using .textContent, you'll be able to get the actual text stored, unlike .innerHTML which gives the elements around it ex(<strong>Text</stront>) calling innerHTML will out put everyting in the brackets.
querySelector("h1").classList.add("text");       // you can also add a class list to an element by calling .classList method and saying .add to add the name of the class.
                   .classList.remove("text");     // can also remove it by calling the remove function. so this case, we are calling for the h1 and adding a class named "text" and removing it 

.addEventListener;         // eventlistner is a method you can call up a procedure in JavaScript that waits for an event to occur. example of an event is a user clicking the mouse or pressing a key on the keyboard.
                           // (https://developer.mozilla.org/en-US/docs/Web/Events) for more list of event listners 
                           // (https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/play) more add event listner features that can be executed.

.addEventListener(input1, input2);        // Using add event listener. you can have an input that stores an event were detecting like "click". input2 will be the response we have when that input1 occurs
.addEventListener("click", function(){    // so here you can have first event as the click, and second will be an empty function that has an audio play
  var audio = new Audio(/sounds/song.mp3);    // For more resources ====== (https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement)
  audio.play();                               // For more resources ====== (https://www.w3schools.com/jsref/dom_obj_audio.asp)
}

// Creating a constuctor function 

function BellBoy (name, age, workPermit, language) {         // create a function that has a name where firstletter is captitalized to establish it as a constuctor function and set the parameters as the input of imformation
  this.name = name;                                          // .this keyword refers to an object
  this.age = age:                                            // .this in methods refers to the object but in function and alone refers to global object
  this.workPermit = workPermit;
  this.language = language;
 
 var bellBoy1 = new BellBoy("henok", 23, true, ["Engligh", "Amharic"]);         // creat a variable that stores the information of the function BellBoy using initialise object. name sure to say new
}

// higher order function & curring  

// it defining characteristics are that it takes other functions as arguments and/or it may return another function.

const add = (num1, num2) => {
  return num1 + num2
}

const subtract = (num1, num2) => {
  return num1 - num2
}

const compute = (operation, num1, num2) => {
  return operation(num1, num2)
}

compute(add, 5, 2) //=> returns 7

// call method , constructive functions        ????

function HouseKeepers(name, age, work, language) {
    this.name = name;
    this.age = age;
    this.work = work;
    this.language = language;
    this.clean = function() {                         // with call method you can call a function that stores a function of things to do. so here using the .this statement, you can create an object that sores a function
        alert("Cleaning in Progress......");         // and that function will execute something to. in this case it would be to alert that cleaning is in progress  
    }     
 
// switch statement . Object, their methods and dot notation 

