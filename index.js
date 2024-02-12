
function Bat(){
    userChoice="Bat";
    console.log("You choose Bat");
    computerChoice1();
}
function Ball(){
    userChoice="Ball";
    console.log("You choose Ball");
    computerChoice1();
}
function Stump(){
    userChoice="Stump";
    console.log("You choose Stump");
    computerChoice1();
}
function computerChoice1(){
let randomNumber=Math.random()*3;
if(randomNumber>0 && randomNumber<=1){
    computerChoice='Bat';
    console.log('computer choice is Bat');
    
}else if(randomNumber >1 && randomNumber<2){
    computerChoice='Ball';
    console.log('computer choice is Ball');
    
}else{
    computerChoice= "Stump";
    console.log('computer choice is Stump');
    
}
checkWin();
}
function checkWin(){
    if(userChoice=="Bat" && computerChoice=="Ball"){
        console.log("You Won");
    }
    else if(userChoice=="Bat" && computerChoice=="Stump"){
        console.log("Computer Won");
    }
    else if(userChoice=="Bat" && computerChoice=="Bat"){
        console.log("Tie");
    }
    else if(userChoice=="Bat" && computerChoice=="Bat"){
        console.log("Tie");
    }
    else if(userChoice=="Ball" && computerChoice=="Bat"){
        console.log("Computer Won");
    }
    else if(userChoice=="Ball" && computerChoice=="Stump"){
        console.log("You Won");
    }
    else if(userChoice=="Ball" && computerChoice=="Ball"){
        console.log("Tie");
    }
    else if(userChoice=="Stump" && computerChoice=="Bat"){
        console.log("You Won");
        
    }
    else if(userChoice=="Stump" && computerChoice=="Ball"){
        console.log("Computer Won");
    }
    else if(userChoice=="Stump" && computerChoice=="Stump"){
        console.log("Tie");
    }
}