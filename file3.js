//47
//hoisting

// hello(); // it will execute and it happens only in functional declaration case
// function hello(){
//     console.log("hello world");
// }
// hello();//this will not execute in functional expression and arrow function
//this will not execute in const and let ,var case 
// const hello = function(){
//     console.log("hello world");
// }
// console.log(hello);
// const hello="hello world" // in case of var it will give undefined but in case of let and const it will give reference type error
// console.log(hello);

//48
//functions inside function
// const app = ()=>{
//     const myFunc=()=>{
//         console.log("hello from my Func")
//     }
//     const addTwo=(num1,num2) =>{
//         return num1 + num2;
//     }
//     const mul = (num1 , num2)=> num1*num2;
//     console.log("inside app")
//     myFunc();
//     console.log(addTwo(2,3));
//     console.log(mul(2,3));
// }
// app();

//49
//lexical scope
// const myVar = "value1"; // it will check in global scape
// function myApp(){
//     // const myVar = "value1";
//     function myFunc(){
//         // const myVar="value59";
//         const myFunc2=()=>{
//         console.log("inside myFunc" , myVar); //if myVar is not in myFunc then javascript will check myVar in lexical environment
//         }
//         myFunc2();
//     }
//     // const myFunc2= function(){}
//     // const myFunc3=() => {}
//     console.log(myVar);
//     myFunc();
// }

// myApp();

//50
//block scope vs function scope


//let and const are block scope
//var is function scope

// {
//     let firstName = "sunny";
//     // console.log(firstName);

// }
// console.log(firstName); //it gives uncaught reference error because let and const are block scope we can not access let and const outside block


// const firstName="garima";
// console.log(firstName);

// {
//     var firstName="harshit";
// }
// console.log(firstName); //var is function scope it is accessible outside scope

// if(true){
//     var firstName="harshit"
//     console.log("hello");
// }
// console.log(firstName)


// function myApp(){
//     if(true){
//         let firstName = "harshit";// by using let we can not access outside function but by using var we can able to access it anywhere
//         console.log(firstName);
//     }
//     console.log(firstName);
// }

// myApp();

//51
//default parameters
// function addTwo(a,b){
//     if(typeof b==="undefined"){
//         b=0;
//     }
//     return a+b;
// }

//it is default parameters
// function addTwo(a,b=0){
//     return a+b;
// }
// const ans=addTwo(4,8);
// console.log(ans);

//52
//rest parameters
// function myFunc(a,b,...c){
//     console.log(`a is ${a}`);
//     console.log(`b is ${b}`);
//     console.log(`c is ${c}`);
// }
// myFunc(3,4,5,6,7,8,9);

// function addAll(...numbers){
//     let total = 0;
//     for(let number of numbers){
//         total= total + number;
//     }
//     return total;
//     // console.log(numbers); //it is array
//     // console.log(Array.isArray(numbers));
// }
// const ans=addAll(1,2,3,4,5);
// console.log(ans);


//param destructuring
//object
//react


// const person={
//     firstName:"harshit",
//     gender:"male",
// }
// function printDetails(obj){
    // console.log(obj.firstName);
    // console.log(obj.gender);
    // console.log(obj.age);
// }
//it is parameter destructuring
// function printDetails(firstName,gender){
//     console.log(firstName);
//     console.log(gender);
   
// }

// printDetails(person);


//54
//callback functions


// function myFunc2(name){
    // console.log("inside my func 2");
    // console.log(`you name is ${name}`);
// }
//calling a function by passing parameter as a function is callback function
// function myFunc(callback){
    // console.log(a);
    // a(); 
    //sql query
    // const data={}
    // console.log("hello there I am a func and I can.. ");
    // callback("harshit");
// }

// myFunc(myFunc2);

//55
//function returning function

// function myFunc(){
//     function hello(){
//         return "hello world"
//     }
//     return hello; //returning function hello
// }
// const ans= myFunc();
// console.log(ans());


//56
//important array methods

//forEach
//map(IMP)
//filter
//reduce

// const numbers = [4,2,5,8];

// function myFunc(number,index){
//     console.log(`index is ${index} number is ${number}`);
    // console.log(`${number}*2 = ${number*2}`);
// }
// multiplyBy2(numbers[0],0);
// multiplyBy2(numbers[1],1);

// for(let i=0;i<numbers.length ; i++){
//     myFunc(numbers[i] ,i);
// }
//for each will simplify above loop work as following:-
// numbers.forEach(myFunc);//for each element //for each will take function as an parameter

// numbers.forEach(function(number,index){
//     console.log(`index is ${index} number is ${number}`);
// });
//for each will pass index by default //it is applicable to array // for each understood index
// numbers.forEach(function(number){
//     console.log(number*3);
// })

// const users=[
//     {firstName:"sunny", age:23},
//     {firstName:"harshit", age:24},
//     {firstName:"mohit", age:25},
//     {firstName:"ramesh", age:26},
// ]

// users.forEach(function(user){
//     console.log(user.firstName);
// })

// users.forEach((user,index)=>{
//     console.log(user.firstName,index);
// })

// for(let user of users){
//     console.log(user.firstName);
// }

//57
//map method(IMP*********)
// const numbers=[3,4,6,1,8];

// const square= function(number){
//     // return number*number;
//     // console.log(number*number);  //if function will not returning anything then it will return undefined by default
// }

// const squareNumber=numbers.map(square); //map will take callback function as an input //map function always make new array
// const squareNumber=numbers.map((number,index)=>{
//     return `index:${index}, ${number*number}`;
// });
// console.log(squareNumber);

// const users=[
//     {firstName:"sunny", age:23},
//     {firstName:"harshit", age:24},
//     {firstName:"mohit", age:25},
//     {firstName:"ramesh", age:26},
// ]

// const userNames= users.map((user)=>{
//     return user.firstName; //bascially map function will give array of firstname
// })

// console.log(userNames);

//58
//filter method

// const numbers=[1,3,2,6,4,8];

// const isEven = function(number){
//   return number%2 ===0;    //it returns true or false
// }

// const evenNumbers = numbers.filter(isEven); //filters callback function always return you boolean value
// const evenNumbers = numbers.filter((number)=>{
//     return number % 2 ===0;
// });
// console.log(evenNumbers); 

//59
//reduce
const numbers = [1,2,3,4,5,10];

//aim: sum of all the numbers in array
//we want to understand reduce

//  const sum=numbers.reduce((accumulator,currentValue)=>{
//     return accumulator + currentValue;
// },100);
//bacically reduce will be giving value of sum of values of array - it is reducing to one value
//accumulator , currentValue ,  return 
//   1               2            3
//   3               3            6                  //this time return value be a accumulator
//   6               4            10
//   10              5            15
//   15              10           25
// console.log(sum);

// const userCart = [
//     {productId:1,productName:"mobile",price:12000},
//     {productId:2,productName:"laptop",price:22000},
//     {productId:3,productName:"tv",price:15000},
// ]

// const totalAmount=userCart.reduce((totalPrice,currentProduct)=>{
//     return  totalPrice + currentProduct.price ;
// },0);//to initialize total price we will pass 0
// console.log(totalAmount);

//total price    currentValue        return
//0              {}                    0
//12000            22000             34000
// 34000           15000             49000


















































































