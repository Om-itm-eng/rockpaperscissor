function computer(){
    let array = ["rock" , "paper", "scissor"];
    let comchoos = Math.floor(Math.random()*3);
    return array[comchoos];
}
let playcount = 0;
let comcount = 0;
let draw = 0 ;

function score(playturn){
    let compturn = computer();
    let comp = document.querySelector("#com");
    let player = document.querySelector("#player");
    player.innerText = "you: " +playturn;
    comp.innerText = "computer: "+compturn;

    if(playturn == compturn){
        draw+=1;
    }
    else if(playturn == "rock"){
        if(compturn == "paper"){
            comcount+=1;
        }
        else{
            playcount+=1;
        }
    }
    else if(playturn == "paper"){
        if(compturn == "scissor"){
            comcount+=1;
        }
        else{
            playcount+=1;
        }
    }
    else{
        if(compturn == "rock"){
            comcount+=1;
        }
        else{
            playcount+=1;
        }
    }
    let winno = document.querySelector("#win");
    winno.innerText = `Win = ${playcount}`;
    let drawno = document.querySelector("#draw");
    drawno.innerText = `Draw = ${draw}`;
    let loseno = document.querySelector("#lose");
    loseno.innerText = `Lose = ${comcount}`;
    
}

let inp = document.querySelectorAll(".indiv");
inp[0].addEventListener("click" , ()=>{
        score("rock");
 });
 inp[1].addEventListener("click" , ()=>{
    score("paper");
});
inp[2].addEventListener("click" , ()=>{
    score("scissor");
});

