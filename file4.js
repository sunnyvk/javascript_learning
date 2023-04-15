//60
//sort method
//ASCII method
//char : ascii value

// '0' : 48
// '1' : 49
//.....
// '9' : 57

// ':' : 58
// ';' : 59
// '<' : 60
//  '=' : 61
//  '>' : 62
//  '?' : 63
//  '@' : 64

// 'A' : 65
// 'B' : 66
// .
// .
// .
// .
// .
// 'Z' : 90

// '[' : 91
// '\' : 92
// ']' : 93
// '^' : 94
// '-' : 95
// '.' : 96


//'a' : 97
// 'b' : 98
// .
// .
// .
// .
// .
// 'y': 121
// 'z': 122
// '{': 123
//  '/': 124
//  '}':125

//sort

//5,9,1200,400,3000
//5,9,400,1200,3000 (expected)


// const numbers = [5,9,1200,400,3000]; //javascript will not sort it as number it will sort it change into string
//["5","9","1200","400","3000"]
//[53,57,49,52,51](ascii values)
// cons- it will not sort numbers //pros-
// numbers.sort();  //sort method will change original array //it will not give u different array
// console.log(numbers); 

// const userNames=['harshit','abcd','ABC','Harshit','mohit','nitish']
// userNames.sort();
// console.log(userNames);

// const numbers = [5,9,1200,410,3000];
// numbers.sort((a,b)=>{
//     return a-b ;
// });
// numbers.sort((a,b)=> a-b); for ascending order
// numbers.sort((a,b)=> b-a); //for descending order
// console.log(numbers);

//1200,410
// a-b ---> 790
// a-b ---> positive (greater than 0) ---> b , a
//410 ,1200

//a-b ---> negative ---->a,b
//5, 9---> -4
//price lowToHigh  HighToLow

// const products=[
//     {productId:1 , productName:"p1" , price:300},
//     {productId:2 , productName:"p2" , price:3000},
//     {productId:3 , productName:"p3" , price:200},
//     {productId:4 , productName:"p4" , price:8000},
//     {productId:5 , productName:"p5" , price:500},
// ]

//lowToHigh

// const lowToHigh=products.slice(0).sort((a,b)=>{
//     return a.price-b.price
// });
// products.sort((a,b)=>{
//     return a.price-b.price
// });
// console.log(products);
// console.log(lowToHigh);
// const HighToLow=products.slice(0).sort((a,b)=>{
//     return b.price-a.price
// });
// console.log(HighToLow);

//61
//find method
// const myArray=["Hello","cat","dog","lion"];

// function isLength3(string){
//     return string.length === 3;
// }
// const ans = isLength3("doggy");
// console.log(ans);

// const ans=myArray.find(isLength3); //it will only give first occurrence
// const ans = myArray.find((string)=>string.length === 3);
// console.log(ans);

// const users = [
//     {userId:1 , userName:"harshit"},
//     {userId:2 , userName:"sunny"},
//     {userId:3 , userName:"nitish"},
//     {userId:4 , userName:"suresh"},
//     {userId:5 , userName:"surya"},
// ]
//you have to find user by usinf user is so we use find method
// const myUser=users.find((user)=>user.userId===3);
// console.log(myUser);

//62
//every method
// const numbers =[2,4,6,8,10]
//we have to check is in above array every element is even or not

// const ans=numbers.every((number)=>number%2===0)

// function isEven(number){
//     return number % 2 === 0;
// }
// const ans = numbers.every(isEven);

//callback function ----> return true / false (boolean)

//every method ----> true / false (boolean)
// console.log(ans);

// const userCart = [
//     {productId:1,productName:"mobile",price:12000},
//     {productId:2,productName:"laptop",price:22000},
//     {productId:3,productName:"tv",price:15000},
// ]

// check every product price < 30000

// const ans=userCart.every((cartItem)=>cartItem.price < 30000);
// console.log(ans);

//63
//some method

// const numbers = [3,5,8,9];

// kya ek bhi number esa hai jo even hai
//true


// const ans=numbers.some((number)=> number%2 === 0);
// console.log(ans);

// const userCart = [
//     {productId:1,productName:"mobile",price:12000},
//     {productId:2,productName:"laptop",price:22000},
//     {productId:3,productName:"tv",price:35000},
//     {productId:4,productName:"macbook",price:25000},
// ]

// const ans=userCart.some((cartItem)=>cartItem.price > 100000);
// console.log(ans);


//64
//fill method
// value , start , end
// [-1,-1,-1]

// const myArray = new Array(10).fill(-1);
// console.log(myArray);

// const myArray = [1,2,3,4,5,6,7,8];
// myArray.fill(0,2,4);
// console.log(myArray);
//value,  starting Index, ending index

//65
//splice method
//start(index), delete(no.), insert

// const myArray=['item1','item2','item3'];

//delete
// const deletedItem=myArray.splice(1,2);
// console.log("deleted item",deletedItem);

// myArray.splice(1,1);
// console.log(myArray);

//insert
// myArray.splice(1,0,'inserted item');

//insert and delete together 
// const deletedItem=myArray.splice(1, 2, "inserted item1" , "inserted item2")
// console.log("deleted item",deletedItem);

// console.log(myArray);

//66
//iterables
//jispe hum for of loop laga sakein
//string , array are iterable

// const firstName="Harshit";
// for(let char of firstName){
//     console.log(char);
// }

// const items= ['item1','item2','item3'];
// for(let item of items){
//     console.log(item);
// }

// const users={'key1':'value1','key2':'value2'}
// for(let item of users){
//     console.log(item);
// }//it gives error //object is not iterable

//array like object
//jinke pas length property hoti hai
//aur jisko hum index se access kar sakte hai
//example :- string

// const firstName="harshit";
// console.log(firstName.length);
// console.log(firstName[2]);

//67
//Sets (it is iterable)
//store data
//sets also have its own methods
//No index-based access
//Order is not guaranteed
//unique items only (no duplicates allowed)

// const numbers= new Set([1,2,3]); //it will ignore duplicate
// const items= ['item1','item2','item3']; 
// const numbers = new Set();
// numbers.add(1);
// numbers.add(2);
// numbers.add(3);
// numbers.add(4);
// numbers.add(5);
// numbers.add(6);
// numbers.add(['item1','item2']);
// numbers.add(['item1','item2']);
// numbers.add(items);
//if we have to check there is any number available in set or not we follow following method
// if(numbers.has(1)){
//     console.log("1 is present");
// }else{
//     console.log("1 is not present");
// }
// for(let number of numbers){
//     console.log(number);
// }
// console.log(numbers);

//when to use sets? ids
// const myArray=[1,2,4,4,5,6,5,6];
// const uniqueElements= new Set(myArray);
// let length = 0;
// for(let element of uniqueElements){
//     length++;
// }
// console.log(length);
// console.log(uniqueElements);
// console.log(myArray);

//68
// Maps(object) //it is different than previous
//map is iterable

//store data in ordered fashion

//store key value pair (like object)
//duplicate keys are not allowed like objects

//different between maps and objects

//objects can only have string or symbol
//as key

//in maps you can use anything as key
//like array , number , string

// object literal
// key->string //keys always been in string
// key->symbol


// const person={
//     firstName:"harshit",
//     age:7,
//     1:"one"
// }
// console.log(person.firstName);
// console.log(person["firstName"]);
// for(let key in person){
//     console.log(typeof key)
// }

//map store key vlaue pair 
// const person= new Map();
// person.set('firstName','Harshit');
// person.set('age' , 7);
// person.set(1 , 'one');
// person.set([1,2,3] , 'one');
// console.log(person);
//differnce bet object and map is-
//in map key can be any type but in object key is in string and symbol only
// console.log(person.firstName);//we cannot do that in map
// console.log(person.get('firstName'));//we can access fitsname by using get
// console.log(person.keys());
// for(let key of person.keys()){
//     console.log(key , typeof key);
// }

// for(let [key,value] of person){
//     // console.log(Array.isArray(key));
//     console.log(key,value)
// }

// const person1={
//     id:1,
//     firstName:"harshit"
// }

// const person2={
//     id:2,
//     firstName:"sunny"
// }
// const extraInfo=new Map();
// extraInfo.set(person1,{age:8 , gender:"male"});
// extraInfo.set(person2,{age:9 , gender:"male"});
// console.log(userInfo);
// console.log(person1.id)
// console.log(extraInfo.get(person1).gender);
// console.log(extraInfo.get(person2).gender);


// const person= new Map([['firstName','harshit'],['age',7]])
// console.log(person);











































































































































