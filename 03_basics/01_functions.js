function sayMyName(){
    console.log("P");
    console.log("A");
    console.log("N");
    console.log("C");
    console.log("H");
    console.log("A");
}

//sayMyName //reference
sayMyName() //execution

//adding two numbers

//function addNums(num1, num2){
//    console.log(num1 + num2)
//}

function addNums(num1, num2){

  let result = num1 + num2
  return result // return ke baad kuch bhi print nhi hota
}

//addNums(3,4)
//addNums(3, "4")
//addNums(3, "a")
//addNums(3, null)

const result = addNums(3,5)
//console.log("Result: ", result);

function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username")
        return 
    }
    return `${username} just logged in`
}

const user = loginUserMessage("Andre Russel")
console.log(user)

const user1 = loginUserMessage()
console.log(user1)  // undefiened ayega


