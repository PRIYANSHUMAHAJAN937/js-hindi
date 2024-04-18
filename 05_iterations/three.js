// for of

//["","",""]
//[{},{},{}]

const arr = [1,2,3,4,5]

for (const num of arr) {
    console.log(num);
}

const greetings = "Hello World"

for (const greet of greetings) {
    console.log(`each character is : ${greet}`)
}

// Maps

const map = new Map()
map.set('IN',"INDIA")
map.set('USA',"UNITED STATES OF AMERICA")
map.set('Fr',"FRANCE")
map.set('IN',"INDIA")

console.log(map);
for (const key of map) {
    console.log(key) 
}

for (const [key,value] of map) {
    console.log(key, ':-', value) 
}

const myObj = {
    'game1' : 'NFS',
    'game2' : 'GTA'
}

//for (const [kry,value] of myObj) {
  //  console.log(key, ':-', value); cannot iterate objects like this
//}

