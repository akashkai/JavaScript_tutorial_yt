//number to other datatypes
let score = 20

let stringScore=String(score)
let booleanScore=Boolean(score)

console.log("Original value :", score, "\nDatatype :", typeof score)
console.table([stringScore, booleanScore])
console.table([typeof stringScore, typeof booleanScore])

//string to other datatypes
let score1 = "Twenty"

let numberScore1=Number(score1)
let booleanScore1=Boolean(score1)

console.log("Original value :", score1, "\nDatatype :", typeof score1)
console.table([numberScore1, booleanScore1])
console.table([typeof numberScore1, typeof booleanScore1])

//boolean to other datatypes
let score2 = true

let stringScore2=String(score2)
let numberScore2=Number(score2)

console.log("Original value :", score2, "\nDatatype :", typeof score2)
console.table([stringScore2, numberScore2])
console.table([typeof stringScore2, typeof numberScore2])


//Nan => number
//null =>object
//undefined =>undefined

let name=null
let address=undefined
let phone=NaN


console.log("Original values: ", "name : ",name, " address : ", address, "phone : ", phone)

console.log("Type conversion in num")

console.table([Number(name),Number(address), Number(phone)])

console.log("Type conversion in string")

console.table([String(name), String(address), String(phone)])

console.log("Type conversion in Boolean")

console.table([Boolean(name),Boolean(address), Boolean(phone)])





