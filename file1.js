// console.log("hello world")

//1

// console.log can print something on console

// console.log('hello world'); 

//2
//intro to variables
// variables can store some information
//we can use that information later
//we can change that information later

//declare a variable

// var firstName = "Sunny";

//use a variable
// console.log(firstName);

//change value

// firstName="Mohit";

// console.log(firstName);  

//3
//rules for naming variables

// you cannot start with number
//example:-
//1value (invalid)
//value1(valid)

// var 1value=10;

//you can use only(imp) underscore _ or dollar symbol
//first_name (valid)  // snake case writing
//_firstname (valid)

//first$name (valid)
//$firstname (valid)

//you cannot use spaces

//first name (invalid)

//convention
//start with small letter and use camelCase

//4
//let keyword
//declare variable with let keyword
//we can change value of let
//but we cannot decalre variable with same key name using let keyword
// let firstName = "sunny";
//  firstName="mohit";
// console.log(firstName);

//what we use? var or let ? we have to prefer let
//block scope vs function scope (covered later in this video)

//5
//declare constants
//we cannot change value of contant
// const pi = 3.14;

// console.log(pi * 2*2);

//6
//string indexing

// let firstName = "harshit";

// h  a  r  s  h  i  t
//0  1   2  3  4  5  6

// console.log(firstName[0]);
//length of string
//firstName.length

// console.log(firstName.length);
// console.log(firstName[6]);

//last Index : length - 1 

// console.log(firstName[firstName.length-2]);

//7
// trim()
//toUpperCase()
//toLowerCase()
//slice

// let firstName= "   harshit  ";
// console.log(firstName.length);
//trim() will be used for remove spaces
// let newString = firstName.trim(); //"harshit"
// console.log(newString)
// console.log(newString.length);

//toUpperCase()- it will change all the alphabets in uppercase charachters
// let firstName = "harshit";
//firstName.toUpperCase(); // it will give you a new string so we take this in new variable
// console.log(firstName.toUpperCase());

//toLowerCase() - it will change all the alpahbets into lowercase

//start index
//end index

// let newString = firstName.slice(1,5);//arsh
// console.log(newString);

//8
//typeof operator

//data types (primitive data types)
//string "harshit"
//number 2,4, 5.6
//booleans
//undefined
//null
//BigInt
//Symbol
// let age = 22;
// let firstName="sunny"

// console.log(typeof firstName);

//convert number to string.
// age = age + "";
// console.log(typeof age); 
// console.log(typeof (age + ""));

//convert string to number
// let myStr = +"34"; // you have to add + before string to do this.
// console.log(typeof myStr);

//convert number to string and vice-versa using another method.
// let age ="18";
// age=String(age);
// age=Number(age);
// console.log(typeof age);


//9
// string concatenation
// let string1= "17";
// let string2= "10";

// let newString = +string1  + +string2;
// console.log(newString);


//10
//template string
// let age = 22;
// let firstName = "harshit"

// "my name is harshit and my age is 22"

// let aboutMe = "my name is" + firstName + "and my age is " + age;
// let aboutMe=`my name is ${firstName} and my age is ${age}` // template strimng

// console.log(aboutMe);

//10
//undefined
//null

// let firstName;
// console.log(typeof firstName); // it will give undefined
// firstName="sunny";
// console.log(typeof firstName);//it will give string

//null
// let myVariable = null;
// console.log(myVariable);

// console.log(typeof null); // it will give object (IMP)
//it is bug , error

//BigInt
// let myNumber =123;
// let myNumber = BigInt(566931478956479201247895335);
// let saveMyNumber=123n;
// console.log(myNumber);
// console.log(Number.MAX_SAFE_INTEGER);// it will give you how much big number u can save safely

// console.log(myNumber + saveMyNumber);


//12
//booleans & comparison operator

//booleans
//true,false

// let num1=7;
// let num2="8";

// console.log(num1>=num2);//either it will return true or false

// ==vs ===
// (IMP)
// console.log(num1 == num2); //it will give u true because == check only values not data type // this type of behaviour is in only javascript // another PL check all the things
// console.log(num1 === num2);//it will give u false because === it checks data types and valuse also

//!= vs !== (confusing understand well)
// console.log(num1!==num2);

//13
//truthy and falsy values





//14 
//if else condition
// let age =17;
// if(age >= 18) // it will return only true and false
// {
    // console.log("User can play ddlc");
// }else{
    // console.log("User can play mario");
// }

// let num =14;
// if(num%2===0){
//     console.log("even");
// }
// else{
//     console.log("odd");
// }


//falsy values

//false
//""
//null
//undefined
//0


// when falsy values are there then else will be in running state their
// let firstName="";
// let firstName; 
// let firstName=null , 0;
// if(firstName){
//     console.log(firstName);
// }else{
//     console.log("firstNameis kinda empty");
// }
//truthy values - other than falsy values all are truthy values

//15
// ternary operator

// let age = 15;
// let drink ;
// if(age>=5){
//     drink="coffee";
// }else{
//     drink="milk";
// }
// console.log(drink);
//in above code  you have to write lot of things so we can use lower code

// ternary operator / conditional operator

// let age =8;
// let drink = age>=5 ? "coffee":"milk"; // first condition will be check after that it gives true or false. if there is true then it will store values after ? and if it gives false then it will store values after : in drink .
// console.log(drink);

//16
//and or operator

// let firstName = "Harshit";
// let age = 16;

// if(firstName[0] ==="H"){
//     console.log("your name starts with H")
// }
// if(age > 18){
//     console.log("you are above 18")
// }
//but i need to check  above both condition together so I have to use and operator

// if(firstName[0]==="H" && age >18){
//     console.log("Name starts with H and above 18");
// }else{
//     console.log("inside else");
// }

// if(firstName[0]==="H" || age >18){
//     console.log("inside if");
// }else{
//     console.log("inside else");
// }

//17
//nested if else
// winning number 19

// 19 your guess is right
// 17 too low
// 20 too high

// let winningNumber=19;
// let userGuess = +prompt("Guess a number"); //prompt function will take a input from browser 
//prompt will take a input in string not in number
// console.log(typeof userGuess,userGuess);
// if(userGuess === winningNumber){
//     console.log("Your guess is right!!!");
// }else{
//     if(userGuess < winningNumber){
//     console.log("too low!!!");
//     }else{
//         console.log("too high!!!");
//     }
// }




