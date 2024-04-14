function calculateCartPrice(...num1){ //rest operator
    return num1
}

function calculatePrice(val1,val2,...num2){
    return num2
}


//console.log(calculateCartPrice(200,400,500))
//console.log(calculatePrice(200,400,500,2000)) // 200 goes to val1, 400 to val2 and remaining to num2

const user = {
    username:"Priaysnhu",
    price: 1234543
}

function handleUser(anyobject){
    console.log(`user name is ${anyobject.username} and price is${anyobject.price}`);
}

//handleUser(user)

handleUser({
  username:"SAM",
   price:399
})

const myNewArray = [200,300,400,500]

function returnSeconValue(getArray){
    return getArray[1]
}

//console.log(returnSeconValue(myNewArray));
console.log(returnSeconValue([200,44,500,4443]));





