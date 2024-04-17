const userEmail = "h@dpof.ai"   //string me kuch hai to it is considered ture , if empty string than it is false

if(userEmail){
    console.log("Got user email")
} else {
    console.log("DON'T have user email")
}

// empty arrat ko true maana jaata hai , inhe hi truthy value kehte hai

// falsy values

/*  false, 0, -0, BigInt 0n, "", null, undefined, NaN */

// truthy values

/* "0", 'false' , " ", [], {}, function(){}*/

const emptyObj ={}
if(Object.keys(emptyObj).length === 0){
    console.log("object is empty")
}

// Nullish Coalescing Operator (??) : null undefined pe based

let val1;
//val1 = 5 ?? 10
//val1 = null ?? 10

//val1 = undefined ?? 15

val1 = null ?? 10 ??50   // 1st vaali assign hogi
console.log(val1)

// Terniary operation

//condition ? true : false

const iceprice = 100
iceprice >=80 ? console.log("more than 80") : console.log("less than 80")





