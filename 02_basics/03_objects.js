//two ways to declare
//literal and constructor

//singleton - only a single object of its own kind made only through cinstructor

//literals do not make singleton

//literals
const mySym =Symbol("key1") //important

const JsUser={
    name: "Priyanshu" ,
    "full name": "Priyanshu Mahajan",
    [mySym]: "mykey1", //important
    age: 20,
    location: "Hoshiarpur",
    email: "kyuren384@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

console.log(JsUser.age)//lest eeficient way

console.log(JsUser["email"])
console.log(JsUser["full name"])

console.log(JsUser[mySym]) //important

JsUser.email = "kyurem894@yahoo.com"
//Object.freeze(JsUser) //you cannot make changes now 
JsUser.email = "kyurem894@hotmail.com"
console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello Js User")
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`);
}

//console.log(JsUser.greeting); // function execute nhi hua hai, just uska reference ayeya hai
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
