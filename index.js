//Checks who's turn it is
let red = true

//Checks if the box is empty or not
box1Empty = true
box2Empty = true
box3Empty = true
box4Empty = true
box5Empty = true
box6Empty = true
box7Empty = true
box8Empty = true
box9Empty = true

//Makes each box a variable to be easily connected to the functions

const box1 = document.querySelector('.box1')
const box2 = document.querySelector('.box2')
const box3 = document.querySelector('.box3')
const box4 = document.querySelector('.box4')
const box5 = document.querySelector('.box5')
const box6 = document.querySelector('.box6')
const box7 = document.querySelector('.box7')
const box8 = document.querySelector('.box8')
const box9 = document.querySelector('.box9')

//Functions changing the box color

function changeBox1(){
    if (box1Empty == true){
        if (red == true){
            box1.style.backgroundColor = 'red';
            red = false;
            box1Empty = false;
        }
        else{
            box1.style.backgroundColor = 'green';
            red = true;
            box1Empty = false;
        }
    }
}

function changeBox2(){
    if (box2Empty == true){
        if (red == true){
            box2.style.backgroundColor = 'red';
            red = false;
            box2Empty = false;
        }
        else{
            box2.style.backgroundColor = 'green';
            red = true;
            box2Empty = false;
        }
    }
}

function changeBox3(){
    if (box3Empty == true){
        if (red == true){
            box3.style.backgroundColor = 'red';
            red = false;
            box3Empty = false;
        }
        else{
            box3.style.backgroundColor = 'green';
            red = true;
            box3Empty = false;
        }
    }
}

function changeBox4(){
    if (box4Empty == true){
        if (red == true){
            box4.style.backgroundColor = 'red';
            red = false;
            box4Empty = false;
        }
        else{
            box4.style.backgroundColor = 'green';
            red = true;
            box4Empty = false;
        }
    }
}

function changeBox5(){
    if (box5Empty == true){
        if (red == true){
            box5.style.backgroundColor = 'red';
            red = false;
            box5Empty = false;
        }
        else{
            box5.style.backgroundColor = 'green';
            red = true;
            box5Empty = false;
        }
    }
}

function changeBox6(){
    if (box6Empty == true){
        if (red == true){
            box6.style.backgroundColor = 'red';
            red = false;
            box6Empty = false;
        }
        else{
            box6.style.backgroundColor = 'green';
            red = true;
            box6Empty = false;
        }
    }
}

function changeBox7(){
    if (box7Empty == true){
        if (red == true){
            box7.style.backgroundColor = 'red';
            red = false;
            box7Empty = false;
        }
        else{
            box7.style.backgroundColor = 'green';
            red = true;
            box7Empty = false;
        }
    }
}

function changeBox8(){
    if (box8Empty == true){
        if (red == true){
            box8.style.backgroundColor = 'red';
            red = false;
            box8Empty = false;
        }
        else{
            box8.style.backgroundColor = 'green';
            red = true;
            box8Empty = false;
        }
    }
}

function changeBox9(){
    if (box9Empty == true){
        if (red == true){
            box9.style.backgroundColor = 'red';
            red = false;
            box9Empty = false;
        }
        else{
            box9.style.backgroundColor = 'green';
            red = true;
            box9Empty = false;
        }
    }
}

//This function activates Play Again by resetting bg colors

function playAgain(){
    box1.style.backgroundColor = '#ffffff';
    box2.style.backgroundColor = '#ffffff';
    box3.style.backgroundColor = '#ffffff';
    box4.style.backgroundColor = '#ffffff';
    box5.style.backgroundColor = '#ffffff';
    box6.style.backgroundColor = '#ffffff';
    box7.style.backgroundColor = '#ffffff';
    box8.style.backgroundColor = '#ffffff';
    box9.style.backgroundColor = '#ffffff';
    box1Empty = true
    box2Empty = true
    box3Empty = true
    box4Empty = true
    box5Empty = true
    box6Empty = true
    box7Empty = true
    box8Empty = true
    box9Empty = true
    document.getElementById("winnerAnnouncer").innerHTML = "No one has won yet!";
    gameWon = 0
}

//These function checks for a winner

let gameWon = 0

function checkWinner(){
    checkRows();
    checkColumns();
    checkDiaganols();
    noWinner();
}

function checkRows(){
    // If green wins:
    if (box1.style.backgroundColor == 'green' & box2.style.backgroundColor == 'green' & box3.style.backgroundColor == 'green'){
        document.getElementById("winnerAnnouncer").innerHTML = "Green wins!";
        endGame();
        gameWon = 1;
    }
    else if (box4.style.backgroundColor == 'green' & box5.style.backgroundColor == 'green' & box6.style.backgroundColor == 'green'){
        document.getElementById("winnerAnnouncer").innerHTML = "Green wins!";
        endGame();
        gameWon = 1;
    }
    else if (box7.style.backgroundColor == 'green' & box8.style.backgroundColor == 'green' & box9.style.backgroundColor == 'green'){
        document.getElementById("winnerAnnouncer").innerHTML = "Green wins!";
        endGame();
        gameWon = 1;
    }
    // If red wins:
    else if (box1.style.backgroundColor == 'red' & box2.style.backgroundColor == 'red' & box3.style.backgroundColor == 'red'){
        document.getElementById("winnerAnnouncer").innerHTML = "Red wins!";
        endGame();
        gameWon = 1;
    }
    else if (box4.style.backgroundColor == 'red' & box5.style.backgroundColor == 'red' & box6.style.backgroundColor == 'red'){
        document.getElementById("winnerAnnouncer").innerHTML = "Red wins!";
        endGame();
        gameWon = 1;
    }
    else if (box7.style.backgroundColor == 'red' & box8.style.backgroundColor == 'red' & box9.style.backgroundColor == 'red'){
        document.getElementById("winnerAnnouncer").innerHTML = "Red wins!";
        endGame();
        gameWon = 1;
    }

}

function checkColumns(){
    // If green wins:
    if (box1.style.backgroundColor == 'green' & box4.style.backgroundColor == 'green' & box7.style.backgroundColor == 'green'){
        document.getElementById("winnerAnnouncer").innerHTML = "Green wins!";
        endGame();
        gameWon = 1;
    }
    else if (box2.style.backgroundColor == 'green' & box5.style.backgroundColor == 'green' & box8.style.backgroundColor == 'green'){
        document.getElementById("winnerAnnouncer").innerHTML = "Green wins!";
        endGame();
        gameWon = 1;
    }
    else if (box3.style.backgroundColor == 'green' & box6.style.backgroundColor == 'green' & box9.style.backgroundColor == 'green'){
        document.getElementById("winnerAnnouncer").innerHTML = "Green wins!";
        endGame();
        gameWon = 1;
    }
    // If red wins:
    else if (box1.style.backgroundColor == 'red' & box4.style.backgroundColor == 'red' & box7.style.backgroundColor == 'red'){
        document.getElementById("winnerAnnouncer").innerHTML = "Red wins!";
        endGame();
        gameWon = 1;
    }
    else if (box2.style.backgroundColor == 'red' & box5.style.backgroundColor == 'red' & box8.style.backgroundColor == 'red'){
        document.getElementById("winnerAnnouncer").innerHTML = "Red wins!";
        endGame();
        gameWon = 1;
    }
    else if (box3.style.backgroundColor == 'red' & box6.style.backgroundColor == 'red' & box9.style.backgroundColor == 'red'){
        document.getElementById("winnerAnnouncer").innerHTML = "Red wins!";
        endGame();
        gameWon = 1;
    }

}

function checkDiaganols(){
    // If green wins:
    if (box1.style.backgroundColor == 'green' & box5.style.backgroundColor == 'green' & box9.style.backgroundColor == 'green'){
        document.getElementById("winnerAnnouncer").innerHTML = "Green wins!";
        endGame();
        gameWon = 1;
    }
    else if (box3.style.backgroundColor == 'green' & box5.style.backgroundColor == 'green' & box7.style.backgroundColor == 'green'){
        document.getElementById("winnerAnnouncer").innerHTML = "Green wins!";
        endGame();
        gameWon = 1;
    }
    // If red wins:
    else if (box1.style.backgroundColor == 'red' & box5.style.backgroundColor == 'red' & box9.style.backgroundColor == 'red'){
        document.getElementById("winnerAnnouncer").innerHTML = "Red wins!";
        endGame();
        gameWon = 1;
    }
    else if (box3.style.backgroundColor == 'red' & box5.style.backgroundColor == 'red' & box7.style.backgroundColor == 'red'){
        document.getElementById("winnerAnnouncer").innerHTML = "Red wins!";
        endGame();
        gameWon = 1;
    }

}

function noWinner(){
    if(gameWon == 0 & box1Empty == false & box2Empty == false & box3Empty == false & box4Empty == false & box5Empty == false & box6Empty == false & box7Empty == false & box8Empty == false & box9Empty == false){
        document.getElementById("winnerAnnouncer").innerHTML = "No one wins!";
    }
}


// This function ends the game if a winner is declared, so no more boxes can be filled.

function endGame(){
    box1Empty = false;
    box2Empty = false;
    box3Empty = false;
    box4Empty = false;
    box5Empty = false;
    box6Empty = false;
    box7Empty = false;
    box8Empty = false;
    box9Empty = false;
}

