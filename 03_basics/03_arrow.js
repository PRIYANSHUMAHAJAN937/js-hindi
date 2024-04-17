const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`); // this is used to refer or access to current context
        console.log(this);
    }
}

//user.welcomeMessage()
//user.username = "sam"
//user.welcomeMessage()

//console.log(this); //if we run this here we get {}(empty object)  , but when we run this in browser we get window object because it is the global object

//function chai(){
  //   let username = "hitesh"
    // console.log(this.username); //undefined
 //}

//chai()

//const chai = function () {
  // let username = "hitesh"
   //console.log(this.username); //undefined
 //}

const chai =  () => { // everything same,just remove function keyword and add arrow after parenthesis
  let username = "hitesh"
    console.log(this);
}
 //chai()

// const addTwo = (num1, num2) => {
  //   return num1 + num2
 //}

 //const addTwo = (num1, num2) =>  num1 + num2  //implicit return

//const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))

