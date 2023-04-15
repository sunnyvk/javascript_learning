//compilation 
//code execution

//why compilation

//How javascript code executes

//what is global execution context?
//what is local execution context?
//closures
// console.log(this);
// console.log(window);
// console.log(firstName);
// var firstName = "Harshit";
// console.log(firstName); 


//what happens to function declaration?
// console.log(this);
// console.log(window);
// console.log(myFunction);
// console.log(fullName);

// function myFunction(){
//     console.log("this is my Function");
// }
// var firstName="Harshit";
// var lastName="Sharma";
// var fullName=firstName+" "+lastName;
// console.log(fullName);


//what is hoisting?
// console.log(this);
// console.log(window);
// console.log(myFunction);
// console.log(fullName);

// function myFunction(){
//     console.log("this is my Function");
// }
// var firstName="Harshit";
// var lastName="Sharma";
// var fullName=firstName+" "+lastName;
// console.log(fullName);

//what happens to function expression


//function expression
// console.log(myFunction);
// var myFunction = function(){
//     console.log("this is my Function");
// }

//  console.log(myFunction);



//are let and const are hoisted?
// console.log(firstName);
// let firstName="Harshit";
// console.log(firstName);

//function execution context
// let foo = "foo";
// console.log(foo);
// function getFullName(firstName, lastName){
//     console.log(arguments);
//     let myVar = "var inside func";
//     console.log(myVar);
//     const fullName=firstName + " " +lastName;
//     return fullName;
// } 


// const personName= getFullName("harshit" , "sharma");
// console.log(personName);


//lexical environment ,scope chain 
// const lastName="Vashistha";
// const printName=function(){
//     const firstName="harshit";
//     function myFunction(){
//     console.log(firstName);
//     console.log(lastName);
//     }
// }
// printName(); 


//IMP**********
//closures
//closure:30-40%
//analyse:70-80%
//real example:100%

//function can return functions

//  function outerFunction(){
//     function innerFunction(){
//         console.log("hello world")
//     }
//     return innerFunction;
//  }

// const ans=outerFunction();
// console.log(ans);  //it will print whole innerfunction

// ans();




function printFullName(firstName,lastName){
    function printName(){
        console.log(firstName , lastName)
    }
    return printName;
 }

const ans=printFullName("sunny" ,"khambyat");
// console.log(ans);
ans();













