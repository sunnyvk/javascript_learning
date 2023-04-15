//69
// clone using Object.assign
//memory

// const obj={
//     key1:"value1",
//     key2:"value2",
// }
// const obj2 ={...obj};
// const obj2=Object.assign({}, obj); //it is old cloning operator
// obj.key3="value3";
// console.log(obj);
// console.log(obj2);

//70
//optional chaining
// const user={
    // firstName:"harshit",
    // address:{houseNumber:'1234'}
// }

// console.log(user?.firstName);
// console.log(user?.address?.houseNumber);//it gives error without using question mark
//it is optional chaining



//71
//methods
//function inside object

// function personInfo(){
//     console.log(`person name is ${this.firstName} and age is ${this.age} `)
// }

// const person={
//     firstName:"harshit",
//     age:8,
//     about:personInfo
    // about:function(){
        // console.log(`person name is ${this.firstName} and age is ${this.age}`)
        // console.log(`this.firstName ,this.age`);
        // console.log("person name is harshit and person")
    // }
// }

// const person2={
//     firstName:"mohit",
//     age:18,
//     about:personInfo
// }

// const person3={
//     firstName:"nitish",
//     age:17,
//     about:personInfo
// }


// personInfo();
//this ki value hame tab nahi pata lagti jab hum this ki value likhate hai
//this ki value hume tab pata lagti jab humara code run horaha hota hai
//this means pura object
// person.about();
// person2.about();
// person3.about();


//72
// console.log(this); //it will print window object(global obj)
// "use strict"
// function myFunc(){
    // "use strict"
    // console.log(this); //it will give undefined
    // console.log("hello world");
// }
// window.myFunc();
// myFunc();


//73
//call , apply or bind
// function hello(){
//     console.log("hello world");
// }
// hello.call();


// function about(hobby, favMusician){
//     console.log(this.firstName, this.age , hobby , favMusician)
// }
// const user1={
    // firstName:"harshit",
    // age:8,
    // about:function(hobby, favMusician){
    //     console.log(this.firstName, this.age , hobby , favMusician)
    // }
// }
// const user2={
//     firstName:"mohit",
//     age:9,

// }
// about.call(user1 , "guitar" , "moazrt");
// user1.about.call(user2 , "guitar" , "moazrt"); //you have to pass value of this means object if you didn't pass any value it will give undefined undefined


//apply
// about.apply(user1,["guitar" , "bach"]); //difference between call and apply is we pass estra arguments in list in apply

//bind-it will return function
// const func = about.bind(user1,"guitar","bach");
// func();

//74
// const user1={
//     firstName:"harshit",
//     age:8,
//     about:function(){
//         // console.log(this);
//         console.log(this.firstName, this.age );
//     }
// }

//don't do this mistake

//user1.about();
// const myFunc = user1.about.bind(user1);
// myFunc();


//75
//arrow functions
// const user1={
//     firstName:"harshit",
//     age:8,
//     about:() => {
//         // console.log(this);
//         console.log(this.firstName, this.age ); //it will give undefined undefined because arrow function will take this(object) from surrounding //arrow function this will be not user1
//     }
// }

// user1.about.call();

//76
//short syntax
// const user1={
//     firstName:"harshit",
//     age:8,
//     about:() => {
        
//         console.log(this.firstName, this.age);
//     }
// }

// const user1={
//     firstName:"harshit",
//     age:8,
//     about() {
//                 console.log(this.firstName, this.age);
//     }
// }
// user1.about();

//77
//proto , prototype , class (IMP*****)
// const user1 = {
//     firstName:"sunny",
//     lastName:"khambayat",
//     email:"sunnykhambayat@gmail.com",
//     age:2,
//     address:"House Number , Colony , pincode , state",
//     about:function(){
//         return `${this.firstName} is ${this.age} years old.`;
//     },
//     is18:function(){
//         return this.age >= 18;
//     }
// }
// const aboutUser=user1.about();
// console.log(aboutUser)
//for millions of user we can not create object so we will make function
//function 1.(that function create object)
// 2. add key value pair
//3. object ko return karega
// function createUser(firstName,lastName,email,age,address){
//     const user={};
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//     user.about = function(){
//         return `${this.firstName} is ${this.age} years old.`;
//     };
//     user.is18 =function(){
//         return this.age >= 18;
//     };
//     return user;

// }

// const user1 = createUser('sunny','khambayat','sunnykhambayat@gmail.com', 3, "my address" );
// console.log(user1);
// const is18=user1.is18();
// console.log(is18);
// const about = user1.about();
// console.log(about); 

//78
//problem in above example will be solved in this example
// const userMethods={
//     about: function(){
//         return `${this.firstName} is ${this.age} years old.`;
//     },
//     is18:function(){
//         return this.age >= 18;
//     },
// }
// function createUser(firstName,lastName,email,age,address){
//     const user={};
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//     user.about=userMethods.about; //it will store reference means address
//     user.is18=userMethods.is18;
//     return user;

// }

// const user1 = createUser('sunny','khambayat','sunnykhambayat@gmail.com', 3, "my address" );
// const user2 = createUser('harshit','vashsith','harshit@gmail.com', 10, "my address" );
// const user3 = createUser('mohit','vashsitha','mohit@gmail.com', 5, "my address" );
// console.log(user1.about());
// console.log(user3.about());

//79(IMP****)
//problem in above example will be solved in this example
// const userMethods={
//     about: function(){
//         return `${this.firstName} is ${this.age} years old.`;
//     },
//     is18:function(){
//         return this.age >= 18;
//     },
//     sing:function(){
//         return 'toon na na na la la';
//     }
// }
// function createUser(firstName,lastName,email,age,address){
//     const user=Object.create(userMethods);//{} it will give proto
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//     user.about=userMethods.about; //it will store reference means address
//     user.is18=userMethods.is18;
//     user.sing = userMethods.sing;
//     return user;

// }

// const user1 = createUser('sunny','khambayat','sunnykhambayat@gmail.com', 3, "my address" );
// const user2 = createUser('harshit','vashsith','harshit@gmail.com', 10, "my address" );
// const user3 = createUser('mohit','vashsitha','mohit@gmail.com', 5, "my address" );
// console.log(user1);
// console.log(user1.about());
// console.log(user1.sing());
// console.log(user3.about());


//80
// const obj1 ={
//     key1:"value1",
//     key2:"value2",
// }

//__proto__

//official ecmascript documentation

// [{prototype}]

// __proto__ , [{prototype}] (both are same)


//prototype(it is different)

// const obj2 ={}
//there is one more way to create empty object
// const obj2 = Object.create(obj1); // it will return empty object {}
// obj2.key3 = "value3";
// // obj2.key2 = "unique";
// console.log(obj2.key2);
// console.log(obj2);
// console.log(obj2.__proto__);

//this is happening

// obj2.__proto__ // (it will set obj2 proto that is obj1)


// obj2.key3="value3";
// console.log(obj1.key1);
// console.log(obj2.key1); //it will give undefined but we want javscript will check key outside obj2 if that value is not available in obj1 

//81
//prototype

// function hello(){
//     console.log("hello world");
// }

// const hello = ["value1"]; //prototype is not present

// javascript function => function + object

// console.log(hello.name); //it will give function name

//you can add your own properties

// hello.myOwnProperty = "very unique value";

// console.log(hello.myOwnProperty);

//name property ---> tells function name;

//function provides more useful properties

// function will give free space i.e object - it is prototype / i can use this prototype

//function create karte hi hame free ki jagah milti hai matlab prototype usme hum function ke related key value pair add kar sakte hai

// console.log(hello.prototype); //{}

//only functions provide prototype property

// if(hello.prototype){
//     console.log("prototype is present")
// }else{
//     console.log("prototype is not present");
// }

// hello.prototype.abc="abc";
// hello.prototype.xyz="xyz";
// hello.prototype.sing=function(){
//     return "Lalalla";
// };
// console.log(hello.prototype.sing());


//82

// const userMethods={
//     about: function(){
//         return `${this.firstName} is ${this.age} years old.`;
//     },
//     is18:function(){
//         return this.age >= 18;
//     },
//     sing:function(){
//         return 'toon na na na la la';
//     }
// }
// function createUser(firstName,lastName,email,age,address){
//     const user=Object.create(createUser.prototype);//{} it will give proto
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//     return user;

// }
// createUser.prototype.about=function(){
//             return `${this.firstName} is ${this.age} years old.`;
//   };
//   createUser.prototype.is18=function(){
//             return this.age >= 18;
//         };
// createUser.prototype.sing=function(){
//             return 'toon na na na la la';
//         };

// console.log(createUser.prototype);
// const user1 = createUser('sunny','khambayat','sunnykhambayat@gmail.com', 3, "my address" );
// const user2 = createUser('harshit','vashsith','harshit@gmail.com', 10, "my address" );
// const user3 = createUser('mohit','vashsitha','mohit@gmail.com', 5, "my address" );
// console.log(user1);
// console.log(user1.about());
// console.log(user1.sing());
// console.log(user3.about());

//83
//new keyword
// function createUser(firstName , age){
//     this.firstName=firstName;
//     this.age=age;
// }
// createUser.prototype.about=function(){
//     console.log(this.firstName,this.age);
// }
// const user1= new createUser("harshit" , 6);   //new keyword will set proto value by default is prototype

//new keyword (what will new keyword do)
// 1) it will create empty object this ={}
// 2) return this
// it will replace these line Object.create(createUser.prototype);


// console.log(user1);

//constructor function
//we will start with capital letter - it is convention
// function CreateUser(firstName,lastName,email,age,address){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.email = email;
//     this.age = age;
//     this.address = address;
//     return this;

// }
// CreateUser.prototype.about=function(){
//             return `${this.firstName} is ${this.age} years old.`;
//   };
//   CreateUser.prototype.is18=function(){
//             return this.age >= 18;
//         };
// CreateUser.prototype.sing=function(){
//             return 'toon na na na la la';
//         };

//new keyword will set proto equal to prototype
// const user1 = new CreateUser('sunny','khambayat','sunnykhambayat@gmail.com', 3, "my address" );
// const user2 = new CreateUser('harshit','vashsith','harshit@gmail.com', 10, "my address" );
// const user3 = new CreateUser('mohit','vashsitha','mohit@gmail.com', 5, "my address" );
// console.log(user1);
// console.log(user1.is18());

//84
// function CreateUser(firstName,lastName,email,age,address){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.email = email;
//     this.age = age;
//     this.address = address;
//     return this;

// }
// CreateUser.prototype.about=function(){
//             return `${this.firstName} is ${this.age} years old.`;
//   };
//   CreateUser.prototype.is18=function(){
//             return this.age >= 18;
//         };
// CreateUser.prototype.sing=function(){
//             return 'toon na na na la la';
//         };

//new keyword will set proto equal to prototype
// const user1 = new CreateUser('sunny','khambayat','sunnykhambayat@gmail.com', 3, "my address" );
// const user2 = new CreateUser('harshit','vashsith','harshit@gmail.com', 10, "my address" );
// const user3 = new CreateUser('mohit','vashsitha','mohit@gmail.com', 5, "my address" );
// for(let key in user1){
//     // console.log(key)
//     if(user1.hasOwnProperty(key)){  //if we don't want to print key of prototype then we will use hasOwnProperty
//         console.log(key);
//     }
// }

//85
// let numbers=[1,2,3];

// let numbers = new Array(1,2,3);
// console.log(Array.prototype);


// console.log(Object.getPrototypeOf(numbers));
// console.log(numbers);

// function hello(){
//     console.log("hello")
// }

//prototype
// console.log(hello.prototype);
// hello.prototype=[];
// console.log(hello.prototype);

//86
//2015 /es6
//class keyword
//class are fake

// class CreateUser{
//     constructor(firstName,lastName,email,age,address){
//         // console.log("constructor called");
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.email = email;
//         this.age = age;
//         this.address = address; //we didn't return anything here  because it will return object
//     }
//     about(){
//         return `${this.firstName} is ${this.age} years old.`;
//     }
//     is18(){
//         return this.age >= 18;
//     }
//     sing(){
//         return 'toon na na na la la';
//     }
//     func(a){
//         console.log(a);
//     }
// }
//we can do this by using class keyword
// function CreateUser(firstName,lastName,email,age,address){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.email = email;
//     this.age = age;
//     this.address = address;
//     return this;

// }
// CreateUser.prototype.about=function(){
//             return `${this.firstName} is ${this.age} years old.`;
//   };
//   CreateUser.prototype.is18=function(){
//             return this.age >= 18;
//         };
// CreateUser.prototype.sing=function(){
//             return 'toon na na na la la';
//         };

// new keyword will set proto equal to prototype
// const user1 = new CreateUser('sunny','khambayat','sunnykhambayat@gmail.com', 3, "my address" );
// const user2 = new CreateUser('harshit','vashsith','harshit@gmail.com', 10, "my address" );
// const user3 = new CreateUser('mohit','vashsitha','mohit@gmail.com', 5, "my address" );
// console.log(user1);
// console.log(user1.is18());
// console.log(Object.getPrototypeOf(user1)); //it will give us prototype of user1
// user1.func("ram");


//87
//practice of class

// class Animal{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     eat(){
//         return `${this.name} is eating`;
//     }
//     isSuperCute(){
//         return this.age <=1;
//     }
//     isCute(){
//         return true;
//     }
// }

// const animal = new Animal("tom",2);
// console.log(animal);
// console.log(animal.eat());

//dog class

// class Dog{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//     eat(){
//         return `${this.name} is eating`;
//     }
//     isSuperCute(){
//         return this.age <=1;
//     }
//     isCute(){
//         return true;
//     }
// }

// const tommy = new Dog("tommy",3);
// console.log(tommy);
//we can use here inheritance

// class Dog extends Animal{ //we can create subclass dog by using extends class animal

// }
// const tommy = new Dog("tommy",3);
// console.log(tommy);

//88
//super
// class Animal{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     eat(){
//         return `${this.name} is eating`;
//     }
//     isSuperCute(){
//         return this.age <=1;
//     }
//     isCute(){
//         return true;
//     }
// }
//  class Dog extends Animal{
//     constructor(name,age,speed){
//         super(name,age);    // super class ka constructor means animal ka
//         this.speed =speed;
//     }
//     eat(){
//         return `Modified Eat: ${this.name} is eating`;
//     }
//     run(){
//         return `${this.name} is running at ${this.speed}`;
//     }
//  }

//object / instance
// const tommy = new Dog("tommy" , 3 , 45)
// console.log(tommy.run());
// console.log(tommy.eat());

//89
// class Animal{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     eat(){
//         return `${this.name} is eating`;
//     }
//     isSuperCute(){
//         return this.age <=1;
//     }
//     isCute(){
//         return true;
//     }
// }
//  class Dog extends Animal{
//     constructor(name,age,speed){
//         super(name,age);    // super class ka constructor means animal ka
//         this.speed =speed;
//     }
//     eat(){
//         return `Modified Eat: ${this.name} is eating`;
//     }
//     run(){
//         return `${this.name} is running at ${this.speed}`;
//     }
//  }

//object / instance
// const tommy = new Dog("tommy" , 3 , 45)
// console.log(tommy.run());
// console.log(tommy.eat());
// const animal=new Animal('sheru',2);
// console.log(animal.eat());



//90
//getter and setters
// class Person{
//     constructor(firstName,lastName,age){
//     this.firstName=firstName;
//     this.lastName = lastName;
//     this.age=age;
//     }
//     get fullName(){
//         return `${this.firstName} ${this.lastName}`
//     }
//     set fullName(fullName){
//         const [firstName,lastName]=fullName.split(" ");
//         this.firstName=firstName;
//         this.lastName=lastName;
//     }
    // setName(firstName,lastName){
        // this.firstName = firstName;
        // this.lastName = lastName;
    // }
// }

// const person1 =new Person("harshit" , "sharma" , 5) 
// console.log(person1);
// console.log(person1.firstName);
// console.log(person1.fullName());
// console.log(person1.fullName) // by using get we can use it as a get
// I want fullname as property

// console.log(person1.firstName);
// console.log(person1.lastName);
// person1.setName("mohit","raj");
// person1.firstName="mohit";
// person1.lastName="raj";
// person1.fullName="mohit vashistha"
// console.log(person1.firstName);
// console.log(person1.fullName);
// console.log(person1.lastName);


//91
//static method and properties

class Person{
    constructor(firstName,lastName,age){
    this.firstName=firstName;
    this.lastName = lastName;
    this.age=age;
    }
    static classInfo(){
        return 'this is person class';
    }
    static desc="static property";
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
    set fullName(fullName){
        const [firstName,lastName]=fullName.split(" ");
        this.firstName=firstName;
        this.lastName=lastName;
    }
    eat(){
            return `${this.firstName} is eating`;
        }
    isSuperCute(){
            return this.age <=1;
        }
        isCute(){
                    return true;
                }
}

const person1=new Person("harshit" ,"sharma" ,8);
const ans=Person.classInfo();// we can call it by using class we don't need to make object 
console.log(ans);
console.log(Person.desc);













































































































