const accountId = 144553
let accountEmail="priyanshumahajan@gmail.com"
var accountPassword="12345"
accountCity="Hoshiarpur" //this is not a good technique but still it is possible
let accountState; // this will result as 
// accountId = 2 // not allowed
accountEmail="kyurem@gmail.com"
accountPassword="75574578"
accountCity="Jalandhar"

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
/* never use var keyword
because of issue in block scope and functonal scope*/