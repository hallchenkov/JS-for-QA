//  1 and 2 task. Generate teasers
let partsOfBody = ["ass" , "foot", "mouth", "fingers", "eyes", "face"]
let uglyWords = ["ugly", "small", "big", "dirty", "fat"]
let partsOfBodyAnimals = ["paw", "ass", "muzzle", "tail"]
let uglyAnimals = ["snake", "horse", "elephant", "orangutan"]
let partOfBodyWord = partsOfBody[Math.floor(Math.random() * 6)]
let uglyWord = uglyWords[Math.floor(Math.random() * 5)]
let partAnimalWord = partsOfBodyAnimals[Math.floor(Math.random() * 4)]
let animalWord = uglyAnimals[Math.floor(Math.random() * 4)]
let teaser = "Your " + partOfBodyWord + " so " + uglyWord + " as " + partAnimalWord + " the same as a " + animalWord + ", bitch!"
//console.log(teaser)
//console.log("Your " + partOfBodyWord + " so " + uglyWord + " as " + partAnimalWord + " the same as a " + animalWord + ", bitch!")

//  3. Generate teasers with "Join"
let teaserJoin = ["Your", partOfBodyWord, "so", uglyWord, "as", partAnimalWord, "the same as a", animalWord, ", bitch!"]
//console.log(teaserJoin.join(" "))

//  4. Concat with "Join"
let num = [3, 2, 1, 0]
console.log(num.join(" more, than "))