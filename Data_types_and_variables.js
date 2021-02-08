// Try 1
let comingPerson = 15
let newPerson = 9
let countOfBalloons = (comingPerson + newPerson) * 2
console.log(countOfBalloons)

// Try 2
let secondInAMinute = 60
let minuteInAHour = 60
let secondInAHour = secondInAMinute * minuteInAHour
console.log(secondInAHour)
let hoursInADay = 24
let secondInADay = secondInAHour * hoursInADay
console.log(secondInADay)
let daysInAYear = 365
let secondInAYear = secondInADay * daysInAYear
console.log(secondInAYear)
let age = 45
let ageInASecond = secondInAYear * age
console.log(ageInASecond)

// Try 3
let balloons = 100
balloons *= 2
console.log(balloons)
balloons /= 4
console.log(balloons)
balloons += 100
console.log(balloons)
balloons -= 100
console.log(balloons)

// Try 4
let sillyString = "эЙ, кАК деЛа?"
let lowerString = sillyString.toLowerCase()
let firstSymbol = lowerString[0]
let firstUpperSymbol = firstSymbol.toUpperCase()
let restOfString = lowerString.slice(1)
console.log(restOfString)
console.log(firstUpperSymbol + restOfString)

let newString = sillyString[0].toUpperCase() + sillyString.slice(1).toLowerCase()
console.log(newString)

// Try 5
let ageOfChild = 15
let withAnAdult = false
if (ageOfChild < 12 && withAnAdult === false){
    console.log("You will not pass!")
} else {
    console.log("You will pass!")
}