$(document).ready(function() {

  var correctAnswers=0;
  var incorrectAnswers=0;
  var unansweredQuestion = 0;


  var questions={
    question1: "Who won the 2014 World Cup?",
    question2: "How often is the World Cup?",
    question3: "Who is the top goalscorer in World Cup history?",
    question4: "Which country has won the most World Cups?",
    question5: "Where is the 2018 World Cup going to take place?"};

  var answers1=["Brazil ", "Argentina ", "Germany" ];  
  var answers2=["4 years", "5 years", "2 years"];
  var answers3=["Pele", "Miroslav Klose", "Ronaldo"];
  var answers4=["Italy", "Germany", "Brazil"];
  var answers5=["Mexico", "Russia", "China"];

  $(".start-button").html(('<button id="initialButton">Start</button>'));
  $(".questionsArea").hide();

  function startGame (){
    $('#countdown').html('You have 30 seconds left' + ('<br>'));
    $(".start-button").hide();
    $(".questionsArea").show();

    $(".question-one").append(questions.question1);
    $(".answer-one").append(answers1[0] + " " + ('<input type="radio" name="one" id="Brazil1"/>') + " " + answers1[1] + " " + ('<input type="radio" name="one" id="Argentina1"/>') + " " +  answers1[2] + " " + ('<input type="radio" name="one" id="Germany1"/>'));
    $(".question-two").append(questions.question2);
    $(".answer-two").append(answers2[0] + " " + ('<input type="radio" name="two" id="four"/>') + " " + answers2[1] + " " + ('<input type="radio" name="two" id="five"/>') + " " + answers2[2] + " " + ('<input type="radio" name="two" id="two"/>'));
    $(".question-three").append(questions.question3);
    $(".answer-three").append(answers3[0] + " " + ('<input type="radio" name="three" id="Pele"/>') + " " + answers3[1] + " " + ('<input type="radio" name="three" id="klose"/>') + " " + answers3[2] + " " + ('<input type="radio" name="three" id="Ronaldo"/>'                               ));

    $(".question-four").append(questions.question4);
    $(".answer-four").append(answers4[0] + " " + ('<input type="radio" name="four" id="Italy1"/>') + " " + answers4[1] + " " + ('<input type="radio" name="four" id="Germany2"/>') + " " + answers4[2] + " " + ('<input type="radio" name="four" id="Brazil2"/>'));

    $(".question-five").append(questions.question5);
    $(".answer-five").append(answers5[0] + " " + ('<input type="radio" name="five" id="Mexico1"/>') + " " + answers5[1] + " " + ('<input type="radio" name="five" id="Russia1"/>') + " " + answers5[2] + " " + ('<input type="radio" name="five" id="China1"/>'));
  
  }

  function submitAnswers (){
        clearInterval(myTimer);
        $('#countdown').hide();
        $(".doneButton").hide();
        $(".questionsArea").hide();
        
      
        if ($("#Germany1").is(':checked')){
          correctAnswers++;
        }
        else if ( ($("#Brazil1").is(':checked')) || ( ($("#Argentina1").is(':checked')))){
          incorrectAnswers++;
        }
        else {
          unansweredQuestion++;
        }
        

        if ($("#four").is(':checked')){
          correctAnswers++;
        }
        else if (($("#five").is(':checked')) || ( ($("#two").is(':checked')))){
          incorrectAnswers++;
        }
        else {
          unansweredQuestion++;
        }
        
        if ($("#klose").is(':checked')){
          correctAnswers++;
        }
        else if (($("#Pele").is(':checked')) || ( ($("#Ronaldo").is(':checked'))) ){
          incorrectAnswers++;
        }
        else {
          unansweredQuestion++;
        }

        if ($("#Brazil2").is(':checked')){
          correctAnswers++;
        }
        else if (($("#Italy1").is(':checked')) || ( ($("#Germany2").is(':checked'))) ){
          incorrectAnswers++;
        }
        else {
          unansweredQuestion++;
        }

        if ($("#Russia1").is(':checked')){
          correctAnswers++;
        }
         else if (($("#Mexico1").is(':checked')) || ( ($("#China1").is(':checked'))) ){
          incorrectAnswers++;
        }
        else {
          unansweredQuestion++;
        }
        
        $(".results").append("<h4>Finished!</h4>" + "Answered Correctly: " + correctAnswers + ('<br>') + "Answered Incorrectly: " + incorrectAnswers + ('<br>') + "Unanswered: " + unansweredQuestion + ('<br>'));
        $(".results").append("<h4>You scored: </h4>" + (correctAnswers / 5*100) + "%");
  }
 
  function submitAnswersButton(){
    $(".doneButton").append(('<button id="submitButton">Done</button>') + ('<br>'));
    $('#submitButton').on('click', function(){
        submitAnswers();
    });
  }
  $('#initialButton').on('click', function(){
    startGame();
    submitAnswersButton();
    time=30;
    myTimer=setInterval(function(){
      time--;
      $('#countdown').html('You have ' + time + ' seconds left');
      if (time === 0) {
          clearInterval(myTimer);
          submitAnswers ()};
          },1000);
  });

});
