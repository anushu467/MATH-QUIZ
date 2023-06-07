Player_1_name= localStorage.getItem("player1_name");
Player_2_name=localStorage.getItem("player2_name");

player1_score=0;
player2_score=0;

document.getElementById("player_1name").innerHTML=player_1_name+ ":";
document.getElementById("player_2name").innerHTML=player_2_name+ ":";

document.getElementById("player1_score").innerHTML=player1_score+ ":";
document.getElementById("player2_score").innerHTML=player2_score+ ":"; 

document.getElementById("player_question").innerHTML="question turn -"+ player_1_name ;
document.getElementById("player_answer").innerHTML="answer turn -"+ Player_2_name ;

function send(){
    number_1= document.getElementById("number1").value ;
    number_2= document.getElementById("number2").value ;

    computer_answer = number_1*number_2 ;
    console.log(computer_answer);
    
    question= "<h3>"+number_1+"X"+number_2+"</h3>";
    textinput= "Answer: <input id='text'>" ;
    check_button= "<button onclick='check()' class='btn btn-success'></button>" ;
    row= question+textinput+check_button ;
    document.getElementById("output").innerHTML= row ;
    document.getElementById("number1").value="";
    document.getElementById("number2").value="";

}
question_turn = "player_1" ;
answer_turn = "player_2" ;

function check() {
 get_answer = document.getElementById("text").value ;
 if(get_answer == computer_answer)
 {
    if(answer_turn == "player_1")
    {
        player1_score = player1_score+1 ;
        document.getElementById("player_1score").innerHTML = player1_score ;
    }
    else{
       player2_score = player2_score+1 ;
       document.getElementById("player_2score").innerHTML = player2_score ;
 }
}
if(question_turn == "player_1")
{
    question_turn = "player_2"
    document.getElementById("player_question").innerHTML = "question_turn -"+player_2_name ;

}
else{
    question_turn = "player_1"
    document.getElementById("player_question").innerHTML = "question_turn -"+player_1_name ;
}
if(answer_turn == "player_1")
{
    answer_turn = "player_2"
    document.getElementById("player_answer").innerHTML = "answer_turn -"+player_2_name ;

}
else{
    answer_turn = "player_1"
    document.getElementById("player_answer").innerHTML = "answer_turn -"+player_1_name ;
}
document.getElementById("output").innerHTML = "" ;
}