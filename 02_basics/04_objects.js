//const tinderUser = new Object() // singleton
const tinderUser={} //non singleton object

tinderUser.id = "123abc"
tinderUser.name="sam"
tinderUser.isLoggedIn = false
//console.log(tinderUser)

const regularUser={
    email:"sam69@how.com",
    fullname : {
        userFullname: {
            firstname: "Priyanshu",
            lastanme: "Mahajan"
        }
    }
}
//console.log(regularUser.fullname);
//console.log(regularUser.fullname.userFullname);
//console.log(regularUser.fullname.userFullname.firstname);

const obj1 ={ 1:"a", 2:"b"}

const obj2 ={3:"a", 4:"b"}
 
//const obj3 = {obj1, obj2}

//const obj3 = Object.assign(obj1,obj2)
//const obj3 = Object.assign({},obj1,obj2) // result is ame but good practice

const obj3={...obj1, ...obj2}
//console.log(obj3)

const users = [
    {
        id:2,
        name:"dogi"
    },
    {
        id:3,
        name:"katty"
    }
]
users[1].email

console.log(tinderUser)

console.log(Object.keys(tinderUser)); // array of keys
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
