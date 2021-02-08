// HomeWork Task 1
let scoresOfBeerPong =
{
    Anna: 0,
    Oleg: 0,
    Roman: 0
}
scoresOfBeerPong.Igor = 0
//scoresOfBeerPong.Anna +=1
//console.log(scoresOfBeerPong)
for (let i = 0; i < Object.keys(scoresOfBeerPong).length; i++ ){

        for (let j = 0; j < 1; j++){
            let newScore1 = Math.floor(Math.random() * 2)
            scoresOfBeerPong.Anna += newScore1
        }
        for (let d = 0; d < 1; d++){
            let newScore2 = Math.floor(Math.random() * 2)
            scoresOfBeerPong.Oleg += newScore2
        }
        for (let l = 0; l < 1; l++){
            let newScore3 = Math.floor(Math.random() * 2)
            scoresOfBeerPong.Roman += newScore3
        }
        for (let m = 0; m < 1; m++){
            let newScore4 = Math.floor(Math.random() * 2)
            scoresOfBeerPong.Igor += newScore4
        }
}
console.log(scoresOfBeerPong)

// HomeWork Task 2
let myCrazyObject = {
    "name": "strange object",
    "some array": [7, 9, {purpose: "blablabla", number: 123} , 3.3],
    "random animal": "wolf"
}
console.log(myCrazyObject["some array"][2].number)
