// Try 1
let name = "Ivan"
if (name === "Ivan"){
    console.log("Hello to me!")
} else {console.log("Fuck Off, please")}

// Try 2
let num = 1
for (let i = 0; num < 10000; i ++){
    console.log(num*=3)
}


// Try 2.1
let number = 1
while (number < 10000){
    console.log(number*=3)
}

// HomeWork Task 1
let animals = ["Fish", "Monkey", "Deer", "Elephant"]
for (let i = 0; i < animals.length; i++){
    animals[i] += " is a wonderful animal"
}
console.log(animals)

// HomeWork Task 2
let alphabet = "abcdefghijklmnopqrstuvwxyz"
let randomWord = ""
while (randomWord.length < 7){
   randomWord += alphabet[Math.floor(Math.random() * alphabet.length)]
}
console.log(randomWord)


// HomeWork Task 3
let normalText = "Hello! I learn JavaScript, you are not. Ha-ha!"
let hackerText = normalText.split("")
for (let i = 0; i < hackerText.length; i++){
    if (hackerText[i] === "e" || hackerText[i] === "E"){
        hackerText[i] = "3"
    }
    else if(hackerText[i] === "l" || hackerText[i] === "L"){
        hackerText[i] = "1"
    }
    else if(hackerText[i] === "a" || hackerText[i] === "A"){
        hackerText[i] = "4"
    }
}
console.log(hackerText.join(""))





















