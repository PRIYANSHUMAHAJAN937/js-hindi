const marvel_heroes=["thor","ironman","spiderman"]
const dc_heroes =["superman","flash","batman"]

//marvel_heroes.push(dc_heroes)

//onsole.log(marvel_heroes)
//console.log(marvel_heroes[3][1])

//const combo_hero = marvel_heroes.concat(dc_heroes)
//console.log(combo_hero)


//const new_heroes=[...marvel_heroes, ...dc_heroes] //this is caleed spread
//console.log(new_heroes)

const another_array =[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)



console.log(Array.isArray("Priyanshu")) // to check if it is array
console.log(Array.from("Priyanshu")) //from is used to convert into array

console.log(Array.from({name:"Priyanshu"}))//interesting

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));