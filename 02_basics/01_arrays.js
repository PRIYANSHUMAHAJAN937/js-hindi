const arr1 = [0,1,2,3,4,5]
console.log(arr1[0]);
//shallow copy , copy me change orignal also change
//deep copy , copy me change orginal do not change
const heroes = ["superman","batman","catwomen"]
const arr2 = new Array(1,2,3,4,5)

//Array methods
//arr1.push(6)
//arr1.push(7)
//arr1.pop()

//arr1.unshift(9)
//arr1.shift()
//console.log(arr1.includes(9))
//console.log(arr1)
//console.log(arr1.indexOf(4))

const newArr = arr1.join()
console.log(arr1)
console.log(newArr)

//slice,  splice

console.log("A", arr1);

const myn1 =arr1.slice(1,3) //include 1 and 2
console.log(myn1)
console.log("B",arr1);

const myn2 = arr1.splice(1,3)
console.log("C",arr1)
console.log(myn2)






