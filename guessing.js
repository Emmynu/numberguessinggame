let guessLimit = 6;
let showGuess = 6
let outOfGuesses =  false;
let guessCount = 0;
let answer = Math.floor(Math.random()*10) + 1


function userId(){
    let UserId = prompt("Enter your username :")
    let password = prompt("Enter a password")
    UserId = document.getElementById("userid").textContent = "Hello " + UserId + "👋"
    localStorage.setItem("name", JSON.stringify(UserId))
    localStorage.setItem("Password", JSON.stringify(password))
}

function login(){
    password2 = prompt("Enter your password")
    fromPassword = JSON.parse(localStorage.getItem("Password"))
    if(password2 === fromPassword){
        alert("Sucessfully LoggedIn")
        const fromLocal = JSON.parse(localStorage.getItem("name"))
        document.getElementById("userid").textContent = fromLocal
    }
    else{
        alert("Wrong Password")
        userId()
    }
}
function ele(){
    localStorage.clear()
}
function user(){
    let userInput =  document.getElementById("text-box").value 
    userInput = parseInt(userInput)

    if(answer !== userInput && guessCount < guessLimit){
        guessCount++
        console.log(guessCount)
        document.getElementById("dis").textContent = "GUESS AGAIN 🙃🙂"
        showGuess--
        document.getElementById("dis2").textContent = "You have " + showGuess + " guess(s) left!😱"
        if(guessCount ===  guessLimit){
            document.getElementById("dis").textContent = "UNFORTUNATELY😭, You've exhausted all your guesses.YOU LOSE!😞"
            alert("Try Again")
        }
    }
    else if(answer === userInput && guessCount < guessLimit){
        document.getElementById("dis").textContent = "GREAT!!.You win!! 😁 " + " it only took you " + guessCount + " guesses 😲"
    }
}


