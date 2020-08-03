var arr = ["stone","paper","scissor"];
var random ;
var usermove,compmove;
var userscore = document.getElementById("user_score");
var compscore = document.getElementById("comp_score");
var score1 = 0;
var score2 = 0;
var winner;
function myfunc(value){
    usermove = value;
    random = Math.floor(Math.random()*3);
    compmove = arr[random];
    document.getElementById("usermove").innerHTML = " " + usermove;
    document.getElementById("compmove").innerHTML = " " + compmove;
    
    if ((usermove != compmove) && ((score1 && score2) != 6)){
        if (usermove == "stone"){
            if (compmove == "scissor"){
                score1 += 1;
                userscore.innerHTML = score1;
            }
            else {
                score2 += 1;
                compscore.innerHTML = score2;
            }
        }
        if (usermove == "paper"){
            if (compmove == "stone"){
                score1 += 1;
                userscore.innerHTML = score1;
            
            }
            else {
                score2 += 1;
                compscore.innerHTML = score2;
            }
        }
        if (usermove == "scissor"){
            if (compmove == "paper"){
                score1 += 1;
                userscore.innerHTML = score1; 
            }
            else {
                score2 += 1;
                compscore.innerHTML = score2;
            }
        }
    }
    if (score1 == 6){
        document.getElementById("container").style.display="none";
        winner = "You";
        document.getElementById("msg").innerHTML = winner + " Won!!"
    }
    if (score2 == 6){
        document.getElementById("container").style.display="none";
        if(score2 == 6){
            winner = "Computer"
        }
        document.getElementById("msg").innerHTML = winner + " Won!!"
    }
}
function reset(){
    compscore.innerHTML = 0;
    userscore.innerHTML = 0;
    document.getElementById("usermove").innerHTML = "";
    document.getElementById("compmove").innerHTML = "";
    score1 = 0;
    score2 = 0;
}
