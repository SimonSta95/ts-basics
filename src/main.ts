import "./style.css"
//1
let numbers : number[] = [1,2,3,4,5,6,7,8,9,10];
console.log(numbers)
console.log(numbers.map(number  => number * 2))

//2
let words : String[] = ["Und", "Da", "Weil", "Trinken", "Schlafen", "Coden"]
console.log(words)
console.log(words.filter(word => word.length > 5))

//3
console.log(numbers)
console.log("Total: " + numbers.reduce((res, number) => res + number,0))

//4
let bigNumbers : number[] = [1,5,4,2,8,3,7,420];
console.log(bigNumbers)
console.log(bigNumbers.some(number => number > 10))

//Bonus
const liste = [15, 6, 3213, 9, 0, 12, 8464 , 1, 1264, 481, 186, 1031, 194];

console.log("BONUS")
console.log("Sort desc: " + liste.sort((a,b) => b - a))
console.log("Quadriert: " + liste.map(number => number*number))

const sortedList: number[] = liste.sort((a,b) => b - a)
const filteredList: number[] = sortedList.slice(2, -4)
const resultList: number[] = liste.filter(number => filteredList.includes(number))
console.log(resultList)

console.log("durch 4 teilbar: " + liste.filter(number => number% 4 !== 0))
console.log("Sum: " + liste.reduce((res,number) => res + number,0))