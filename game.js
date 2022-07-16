num1= "";
num2= "";
answer= "";
question= "";
player1score= 0;
player2score= 0;
player1name= localStorage.getItem("Player 1 name");
player2name= localStorage.getItem("Player 2 name");
document.getElementById("p1name").innerHTML= player1name + ":";
document.getElementById("p2name").innerHTML= player2name + ":";
document.getElementById("questionp").innerHTML= "Question Turn- " + player1name;
document.getElementById("answerp").innerHTML= "Answer Turn- " + player2name;
questionturn= player1name;
answerturn= player2name;

function send() {
    num1= document.getElementById("num1").value;
    num2= document.getElementById("num2").value;
    answer= parseInt(num1) * parseInt(num2);
    question= document.getElementById("question").innerHTML= "Question: " + num1 + " x " + num2 + "=";
    document.getElementById("num1").value= "";
    document.getElementById("num2").value= "";
}

function check() {
    playeranswer= document.getElementById("answer").value;
    qwe= "w";
    if(playeranswer == answer) {
        if(answerturn == player1name) {
            player1score= player1score + 10;
            document.getElementById("p1score").innerHTML= player1score;
        }
        else {
            player2score= player2score + 10;
            document.getElementById("p2score").innerHTML= player2score;
        }
    }

    if(qwe == "w") {
        if(questionturn == player1name) {
            questionturn= player2name;
            document.getElementById("questionp").innerHTML= "Question Turn- " + player2name;
            answerturn= player1name;
            document.getElementById("answerp").innerHTML= "Answer Turn- " + player1name;
            qwe= "";
        }
        else {
            questionturn= player1name;
            document.getElementById("questionp").innerHTML= "Question Turn- " + player1name;
            answerturn= player2name;
            document.getElementById("answerp").innerHTML= "Answer Turn- " + player1name;
            qwe= "";
        }
    }
}