document.getElementById("myDiv").innerHTML = "<h1>Hello</h1>"

document.getElementById("myDiv").setAttribute("class", "div")

document.getElementById("myDiv").style.backgroundColor = "red"


let wins = 0
function rps () {
    let userChoice = "r"
    let computerChoice = "s"
    gameLogic(userChoice, computerChoice)
}

function gameLogic (userChoice, computerChoice) {
    console.log(userChoice)
    if (userChoice === "r" && computerChoice === "s"){
        wins++
        console.log("hello")
    }
}
rps()



function getData(){
    //get data code
    //maniuplateData into HTML function
    //domData(data)
}

function domData(data){
    //use data and target div 
    // innerHTML
    //console.log yay
}

