let choices = document.querySelectorAll(".choice");
let result = document.querySelector(".result");
let you = document.querySelector(".you");
let ai = document.querySelector(".ai");

let winSound = new Audio("win.mp3")
let loseSound = new Audio("lose.mp3")
let drawSound = new Audio("draw.mp3")


function startanimation(){
    you.style = "animation: shake 1s linear 3;";
    ai.style = "animation: shake 1s linear 3;";
    you.innerText= "👊";
    ai.innerText= "👊";
}
function stopanimation(){
    you.style = "animation: none";
    ai.style = "animation: none";
}

choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        result.classList.remove("draw")
        result.classList.remove("win")
        result.classList.remove("lose")
        result.innerText = ""

        startanimation();
        
        let userchoice = choice.getAttribute("id");
        let option = ["rock", "paper", "scissor"]
        let comindex=Math.floor(Math.random()*3);
        let comchoice = option[comindex];

        setTimeout(() => {
            stopanimation()
            playgame(userchoice , comchoice)
        }, 3000);

        
        
    })
})

function playgame(userchoice , comchoice){

    if(userchoice === "paper"){
        you.innerText = "✋";
    }
    else if(userchoice === "scissor"){
        you.innerText = "✌️";
    }else{
        you.innerText= "👊";
    }
    
    if(comchoice === "paper"){
        ai.innerText = "✋";
    }
    else if(comchoice === "scissor"){
        ai.innerText = "✌️";
    }else{
        ai.innerText= "👊";
    }
    
    if(userchoice === comchoice){
        drawSound.play();
        result.innerHTML = "Draw, Try Again";
        result.classList.add("draw");
    }
    else if( userchoice === "scissor" && comchoice === "paper"
        || userchoice === "paper" && comchoice === "rock" 
        || userchoice === "rock" && comchoice === "scissor"
    ){
        winSound.play();
        result.innerHTML = "Hurray you Win!!";
        result.classList.add("win");     
        
        
    }
    else{
        loseSound.play();
        result.innerHTML = "Sorry You Lose!!";
        result.classList.add("lose");
        
        
    }

}