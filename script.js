

if(!localStorage.getItem("botScore")){
    localStorage.setItem("botScore", 0); 
}


let btn = document.getElementById("botBtn") 


btn.addEventListener("click" , anotherOne) 



function anotherOne(){
    let botScore = parseInt(localStorage.getItem("botScore"))
   // botScore = botScore + 1 
    localStorage.setItem("botScore", ++botScore)
    console.log(botScore)
}   


