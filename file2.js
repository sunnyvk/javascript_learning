//18
//if
//else if
//else if
//else if
//else

//here if one condition is satisfied then we will not execute another condition
// let tempInDegree=15;

// if(tempInDegree < 0) {
//     console.log("extremely cold outside");
// }else if(tempInDegree < 16){
//     console.log("It is cold outside");
// }else if(tempInDegree < 25){
//     console.log("wheather is okay");
// }else if(tempInDegree < 35){
//     console.log("lets go for swim");
// }else if(tempInDegree < 45){
//     console.log("turn on AC");
// }else{
//     console.log("too hot!!");
// }


// let tempInDegree=17;
// if(tempInDegree > 40){
//     console.log("too hot");
// }else if(tempInDegree > 30){
//     console.log("lets go for swim");
// }else if(tempInDegree > 20){
//     console.log("weather is cool");
// }else if(tempInDegree > 10){
//     console.log("it is very cold outside");
// }else{
//     console.log("extremely cold");
// }

// console.log("hello")


//19
//switch statement

// let day = 0;

// if(day === 0){
//     console.log("Sunday");
// }else if(day===1){
//     console.log("Monday");
// }else if(day===2){
//     console.log("tuesday");
// }else if(day===3){
//     console.log("Wednesday")
// }else if(day===4){
//     console.log("Thursday");
// }else if(day===5){
//     console.log("Friday");
// }else if(day===6){
//     console.log("Saturday"); 
// }else{
//     console.log("Invalid Day");
// }

//how do you do above work by using switch statement


// let day=2;

// switch(day){
//     case 0:
//         console.log("Sunday");
//         break;
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//      default:
//         console.log("Invalid Day");
// }

//20
//while loop
// 0 se 9
//dry don't repeat yourself
// let i=0;
// console.log(i);
// i++;
// console.log(i);
// i++;
// console.log(i);
// i++;
// console.log(i);
// i++;
// console.log(i);
// i++;
// console.log(i);
// i++;
// console.log(i);
// i++;
// console.log(i);
// i++;
// console.log(i);
// i++;
// console.log(i);

//how we do above code by using while loop
// while(i<=3){
//     console.log(i);
//     i++;
// }
// console.log(`current value of i is ${i}`);

//21
//while loop example
//example of first 10 n natural number sum
// let num=10;
// let total=0;//1+2+3+4....
// let i=0;
// while(i<=10){
//      total=total+i;
//     i++;
// }
// console.log(total);

// let total=(num*(num+1))/2;
// console.log(total);
//it is fast than above code

//22
//intro to for loop
//print 0 to 9

// for (let i=0; i<=9;i++){
//     console.log(i);
// }
//  console.log(i);//i cannot exist outside of for loop in let but it can exist in var.(IMP)

//23
//first 10 natural number sum

// let total=0;
// let num=10;
// for(let i=1;i<=num;i++){
// total=total+i;
// }
// console.log(total);

//24

//break keyword
//continue keyword

// for(let i=1;i<=10;i++){
//     if(i===4){
//         break;      // it will stop execution of for loop in this
//     }
//     console.log(i);
// }

// for(let i=1;i<=10;i++){
//     if(i===4){
//         continue;      // it will didn't stop execution of for loop in this condition or didn"t execute niche wali line
//     }
//     console.log(i);
// }
// console.log("hello there");

//25
//do while loop
// let i=10;
// while(i<=9){
//     console.log(i);
//     i++;
// }

// do{
//     console.log(i);
//     i++;
// }while(i<=9)
// in this first execute do wala code after that they will chech condition

//26
//intro to arrays
//it is reference type
//it is collection of elements
//how to create arrays

//ordered collection of items
//u can store any data type in array

// let fruits=["apple","mango","grapes"];
// let numbers=[1,2,3,4];
// let mixed=[1.2,3,4,"string",null ,undefined];
// console.log(mixed);
// console.log(numbers);
// console.log(fruits[0]);

// jitne reference type hote hai unko hum object bolte hai so u can array is object in javascript

// let fruits=["apple","mango","grapes"];
// let obj={}; // object literal
// console.log(fruits);
// fruits[1]="banana";
// console.log(fruits);
// console.log(typeof fruits);
// console.log(typeof obj);
// console.log(Array.isArray(fruits));//kya fruits is array to check this
//array indexing

//27
//array push pop
//array shift unshift
// let fruits=["apple","mango", "grapes"];
// console.log(fruits);

//push
// fruits.push("banana"); // array is mutable means it can change original array this will not happen in primitive case means string
// console.log(fruits);
//pop
// let poppedFruit = fruits.pop();// it will remove from last and it will return also removed element
// console.log(fruits);
// console.log("popped fruits is", poppedFruit)

//unshift-it will add element in starting
// fruits.unshift("banana");
// fruits.unshift("myfruit");
// console.log(fruits);

// push and pop is fast as compare to shift and unshift reason-push and pop remove element from last so it will take small time
//shift- it will  remove element from starting
// let removedFruit=fruits.shift();
// console.log(fruits);
// console.log("removed fruts is",removedFruit);

//28
//primitive vs reference data types
// (IMP)********
// let num1=6; //primitive type
// let num2=num1;
// console.log("value of num1 is" , num1);
// console.log("value of num2 is" , num2);
// num1++;
// console.log("after incrementing num1")
// console.log("value of num1 is" , num1);
// console.log("value of num2 is" , num2);

//reference type
//array
// let array1=["item1","item2"];
// let array2=array1;
// console.log("array1",array1);
// console.log("array2",array2);
// array1.push("item3");
// console.log("after pushing element to array 1");
// console.log("array1",array1);
// console.log("array2",array2);  //output=array1=array2 // reson behind this is they don't have a different array , they have a different pointer, but they have a same address so they giving same array.

//why this is happening lets understand
//see notes
//we mostly store primitive types in stacks because it dosn't take more space

//29
//how to clone array
//hoe to concatenate two arrays

// let array1=["item1","item2"];
// let array2=["item1","item2"];
//methids used to clone array following:
// let array2=array1.slice(0) //(most fast)  //if there is n number of items then we can use this method to clone.
// let array2=array1.slice(0).concat(["item3","item4"]) 
// let array2=[].concat(array1);
// let array2=[].concat(array1,["item3","item4"]);
//new way
//spread operator

// let array2=[...array1];(mostly used) //it spread a element of array1 in new array
// let array2=[...array1 ,"item3","item4"];
// let oneMoreArray = ["item3","item4"]
// let array2 = [...array1,...oneMoreArray];
// array1.push("item3");

// console.log(array1===array2); //output: false(IMP*****)
// console.log(array1);
// console.log(array2);

//30
//for loop in array
// let fruits=["apple","mango","grapes","banana"];

// for(let i=0;i<=9;i++){
//     console.log(i);
// }

// console.log(fruits.length); //it will give u a length of array
// console.log(fruits[fruits.length-1]);
// let fruits2=[];
// for(let i=0;i<=fruits.length-1;i++){
    // fruits2.push(fruits[i].toUpperCase())
    // console.log(fruits[i].toUpperCase());
// }
// console.log(fruits2);

//31
//use const for creating array

// heap memory ["apple","mango"] 0x11

// const fruits=["apple","mango"]; //0 x 11
// fruits=["grapes","pineapple"]//it will give error
// fruits.push("banana");//it will execute because we didn't change anything
// console.log(fruits);

//32
//while loop in array
// const fruits=["apple","mango","grapes"];
// const fruits2=[];
// let i=0;
// while(i<fruits.length){
//     fruits2.push(fruits[i].toUpperCase());
//     i++;
// }
// console.log(fruits2);

//33
//for of loop in array (mostly used this or traditional loop)
// const  fruits=["apple","mango","grapes" , "fruit4","fruit5"];
// const fruits2=[];
// for(let fruit of fruits){
//     fruits2.push(fruit.toUpperCase());
    // console.log(fruit);
// }
// console.log(fruits2);

//34
//for in loop in array
// const  fruits=["apple","mango","grapes" , "fruit4","fruit5"];
//  const fruits2=[];
//  for(let index in fruits){
    //  fruits2.push(fruits[index].toUpperCase());
    //  console.log(fruits[index]);
//  }
// console.log(fruits2);

//35
//array destructuring
// const myArray=["value1","value2","value3","value4"];
// let myvar1=myArray[0];
// let myvar2=myArray[1];
// console.log("value of myvar1",myvar1);
// console.log("value of myvar2",myvar2);
//above work can be done by using shortcut like array destructuring
// let[myvar1, ,myvar2]=myArray;
// let[myvar1,myvar2,...myNewArray]=myArray; //it is array destructuring
// let myNewArray = myArray.slice(2)
// myvar1="value changed";
// console.log("value of myvar1",myvar1);
// console.log("value of myvar2",myvar2);
// console.log(myNewArray)
// console.log("value of myvar3",myvar3);

//36
//objects-reference type
//arrays are good but not sufficient for real world data
//objects store key value pairs
//objects don't have index

//how  to create objects

// const person={
//     name:"Harshit",
//     age:"22",
//     hobbies:["guitar","cricket","listening music"]
// };
// console.log(person);

//how to access data from objects
// console.log(person["name"]); //we have to access it in string because by default it in string in object
// console.log(person["age"]);//bracket notation
// console.log(person.name);
// console.log(person.age);//dot notation
// console.log(person.hobbies);

//how to add key value pair to objects

// person.gender = "male";
// console.log(person);
// person["gender"]="male";
// console.log(person);

//37
//difference between dot and bracket notation
// const key="email";
// const person={
//     name:"harshit",
//     age:"22",
//     "person hobbies":["guitar","cricket","listening music"]
// }
// console.log(person["person hobbies"]);//we need to use bracket notation to access this type of key

// (IMP)
// person[key]="sunny@123gmail.com";
// console.log(person);


//38
//how to iterate object
// const person={
//     name:"harshit",
//     age:"22",
//     "person hobbies":["guitar","cricket","listening music"]
// }

//for in loop
//Object.keys

// for(let key in person){
    // console.log(`${key} : ${person[key]}`);
    // console.log(key , ":",person[key]);
    // console.log(person[key]); //by using dot it gives 3 times undefined so we use bracket it will compute our variable value
// }

// console.log( typeof (Object.keys(person))); // Object.keys will give u a array
// const val= Array.isArray((Object.keys(person)));
// console.log(val);

// for(let key of Object.keys(person)){
//     console.log(person[key]);
// }

//39
//computed properties

// const key1="objkey1";
// const key2="objkey2";

// const value1="myvalue1"
// const value2="myvalue2"

// const obj={
//     objkey1:"myvalue1",
//     objkey2:"myvalue2",    
// }
//  const obj={
//     [key1]:value1,   // computed properties
//     [key2]:value2,
//  }

//  const obj={};
//  obj[key1]=value1;
//  obj[key2]=value2;
//  console.log(obj);

//40
//string , array is iterable. number us not iterable.
//spread operator
//  const array1=[1,2,3];
//  const array2=[5,6,7];

// const newArray = [...array1,...array2 , 89,69];
// const newArray=[..."abc"];
// console.log(newArray);

//spread operator in objects
// const obj1={
//     key1:"value1",
//     key2:"value2"
// }
// const obj2={
//     key1:"valueUnique",
//     key3:"value3",
//     key4:"value4"
// }
// const newObject={...obj2,...obj1,key69:"value69"};
// const newObject={..."abc"};
// console.log(newObject);

//41
//object destructuring
// const band={
//     bandName:"led zepplin",
//     famousSong:"stairway to heaven",
//     year:1968,
//     anotherFamousSong:"kashmir"
// };
// const bandName= band.bandName;
// const famousSong= band.famousSong;
// console.log(bandName,famousSong);
//shortcut for above solution
// const {bandName,famousSong,...restProps}=band;

// console.log(bandName);
// console.log(restProps);

//42
//objects inside array
//very useful in real world applications

// const users=[
//     {userId:1,firstName:'harshit',gender:'male'},
//     {userId:2,firstName:'sunny',gender:'male'},
//     {userId:3,firstName:'nitish',gender:'male'},   
// ]
// for(let user of users){
// console.log(user.firstName);
// }

//43
//nested destructuring

// const users=[
//     {userId:1,firstName:'harshit',gender:'male'},
//     {userId:2,firstName:'sunny',gender:'male'},
//     {userId:3,firstName:'nitish',gender:'male'},   
// ]

// const [{firstName:user1firstName,userId}, ,{gender:user3gender}] =users;
// console.log(user1firstName);
// console.log(userId);
// console.log(user3gender);

//44
//function declaration
// function singHappyBirthday(){
//     console.log("happy birthday to you.....");
// }
// reusable function
// function sumTwoNumbers(number1,number2){
//     return number1 + number2 ;
// }

// const returnedValue = sumTwoNumbers();
// console.log(returnedValue);

// console.log(undefined + undefined); //output:-  NaN

//odd or even
//input: 1 number
// output : true , false

// function isEven(number){
//     if(number % 2 ===0){
//         return true;
//     }else{
//         return false;
//     }
// }

// function isEven(number){
//     return number % 2 === 0;   //either it will give true or false
// }
// console.log(isEven(5));

//function
//input: string
//output:firstCharacter

// function firstChar(anyString){
//     return anyString[0];
// }

// console.log(firstChar("abc"));   //output-a

//function
//input : array , target (number)
// output: index of target if target present in Array

// [1,5,9,27,6] ,9

// function findTarget(array,target){
//     for(let i=0;i<array.length; i++){
//         if(array[i]===target){
//             return i;
//         }
//     }
//     return -1;
// }
// const myArray=[1,3,8,90]
// const ans=findTarget(myArray,8);
// console.log(ans);


//45
//function expression
// function singHappyBirthday(){
//     console.log("happy birthday to you .....");
// }
//convert above function declaration to function expression as follows
//  const singHappyBirthday = function(){
//     console.log("happy birthday to you .....");
// }
// singHappyBirthday();


// const isEven = function(number){
//     return number % 2 === 0;
// }
// console.log(isEven(2));

// const findTarget= function(array,target){
//     for(let i=0;i<array.length; i++){
//         if(array[i]===target){
//             return i;
//         }
//     }
//     return -1;
// }
// const myArray=[1,3,8,90]
// const ans=findTarget(myArray,8);
// console.log(ans);

//46
//arrow functions (IMP*****)
// const singHappyBirthday = function(){
//     console.log("happy birthday to you .....");
// }


// const singHappyBirthday = () =>{
//     console.log("happy birthday to you .....");
// }
// singHappyBirthday();

//in arrow function we just need to remove function after parameters we need to insert arrow
//we can remove paranthesis when we have a one parameter but we cann't do this when we have more than 1 input
// const isEven = (number) => {
//     return number % 2 === 0;
// }

// const isEven = number => {
//     return number % 2 === 0;
// }
// const isEven = number => number % 2 === 0;//we can write down in one line

// console.log(isEven(2));

// const findTarget= (array,target)  =>{
//     for(let i=0;i<array.length; i++){
//         if(array[i]===target){
//             return i;
//         }
//     }
//     return -1;
// }
// const myArray=[1,3,8,90]
// const ans=findTarget(myArray,8);
// console.log(ans);























