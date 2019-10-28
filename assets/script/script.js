
//Ready the document
$( document ).ready(function() {
    var answerArr = ["B","A","D","C","B","D","A","D","C","B"];
    var userArr = [" "," "," "," "," "," "," "," "," "," "];
    

    //Answers:
    //Plankton: B
    //Atlantic Ocean: A
    //Pelagic Zone: D
    //1500ft: C
    //Pacific: B
    //Archipelago: D
    //Sailfish: A
    //Near the Coast: D
    //Salt: C
    //Ocean Sunfish: B    

    console.log($("#timer").text());
    var answer = $("[type = 'radio']");
    var userAnswer = "";
   
    var unchecked = 0;
    var correct = 0;
    var wrong= 0;
    
    var number = 60;
    var intervalId;
   

    
   
    run();
    
    
    
    function answers(){
        
       
        // console.log(answer.length);
        // console.log(answer[0].value);
        for (i = 0; i < answer.length; i++){
             if (answer[i].checked){
                userAnswer = answer[i].value;  
                var order = parseInt(answer[i].name);
                userArr[order]= userAnswer; 
        }
        }
        for (j = 0; j < userArr.length; j++){
           
            if (userArr[j] == answerArr[j])
            {   
                console.log(userArr[j]);
                correct++;
            }
            else if (userArr[j] == " "){
                unchecked++;
            }
            else if (userArr[j] !== answerArr[j]){
                console.log(userArr[j]);
                wrong++;
        }
        }
        
        
        console.log(userArr);
        console.log(answerArr);
    
    }

    function resultScreen(){
        $(".questions").hide();
        $("#timer").append("<p class = 'result'> Correct Answers: " + correct + "</p>");
        $("#timer").append("<p class = 'result'> Incorrect Answers: " + wrong + "</p>");
        $("#timer").append("<p class = 'result'> Unanswered Questions: " + unchecked + "</p>");
    }
    function run(){
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);

    }
    function decrement(){
        number--;
        if (number < 10){
            number = "0"+number;
        }

        $("#timer").text("Timer 00:"+number);
        if (number ==="00"){
            clearInterval(intervalId);
            $("#timer").text("Time's Up!");
            answers();
            resultScreen();
        }
    }
    


});