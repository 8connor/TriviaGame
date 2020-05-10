$(document).ready(function () {
    // IDS
    var startButton = $("#startButton");
    var triviaGame = $("#triviaGame");
    var formAnswers = $("#formAnswers");
    var subButton = $("#subButton");
    var body = $("body")
    // =================================
    // Answers
    var input0 = "<input type='radio' id='answer1' value='true' name='userSelect0'>";
    var input1 = "<input type='radio' class='answer' value='true' name='userSelect1'>";
    var input2 = "<input type='radio' class='answer' value='true' name='userSelect2'>";
    var input3 = "<input type='radio' class='answer' value='true' name='userSelect3'>";
    var incorrectInput0 = "<input type='radio' class='answer' value='false' name='userSelectWrong0'>";
    var incorrectInput1 = "<input type='radio' class='answer' value='false' name='userSelectWrong1'>";
    var incorrectInput2 = "<input type='radio' class='answer' value='false' name='userSelectWrong2'>";
    var incorrectInput3 = "<input type='radio' class='answer' value='false' name='userSelect3Wrong'>";
    //=================================
    //timer

    var watch;
    
    var time = 0;

    var timerRunning = false;
    //=================================

    var myQuestions = [
        {
            question: "<p>What was the first full length CGI movie?</p>",
            answers: [
                "Toy Story",
                "Cars",
                "Monsters, Inc.",
                "Finding Nemo",
            ],
        },
        {
            question: "<p>Which of these is NOT a name of one of the Spice Girls?</p>",
            answers: [
                "Emma Bunton",
                "Geri Halliwell",
                "Victoria Beckham",
                "Hayley Williams",
            ],
        },
        {
            question: "<p>Which NBA team won the most titles in the 90s?</p>",
            answers: [
                "Bulls",
                "Spurs",
                "Lakers",
                "Celtics",
            ],
        },
        {
            question: "<p>Where was the first computer built?</p>",
            answers: [
                "University of Pennsylvania",
                "Princeton University",
                "Brown University",
                "Yale University",
            ],
        },
    ]
    //=================================
    subButton.hide();
    triviaGame.hide();

    startButton.on("click", function () {
        triviaGame.show();
        startButton.hide();
        subButton.show();
    });

    function startGame() {
        formAnswers.append(myQuestions[0].question);
        formAnswers.append(input0 + myQuestions[0].answers[0]);
        formAnswers.append(incorrectInput0 + myQuestions[0].answers[1]);
        formAnswers.append(incorrectInput0 + myQuestions[0].answers[2]);
        formAnswers.append(incorrectInput0 + myQuestions[0].answers[3]);

        formAnswers.append(myQuestions[1].question);
        formAnswers.append(incorrectInput1 + myQuestions[1].answers[0]);
        formAnswers.append(incorrectInput1 + myQuestions[1].answers[1]);
        formAnswers.append(incorrectInput1 + myQuestions[1].answers[2]);
        formAnswers.append(input1 + myQuestions[1].answers[3]);

        formAnswers.append(myQuestions[2].question);
        formAnswers.append(incorrectInput2 + myQuestions[2].answers[0]);
        formAnswers.append(input2 + myQuestions[2].answers[1]);
        formAnswers.append(incorrectInput2 + myQuestions[2].answers[2]);
        formAnswers.append(incorrectInput2 + myQuestions[2].answers[3]);

        formAnswers.append(myQuestions[3].question);
        formAnswers.append(input3 + myQuestions[3].answers[0]);
        formAnswers.append(incorrectInput3 + myQuestions[3].answers[1]);
        formAnswers.append(incorrectInput3 + myQuestions[3].answers[2]);
        formAnswers.append(incorrectInput3 + myQuestions[3].answers[3]);
    };

    $("#subButton").on("click", function(){
        if($("input[name=userSelect0]:checked").val()){
            body.append("<h1>question 1 : correct!</h1>")
        }else{
            body.append("<h1>question 1 : incorrect!</h1>")
        }if($("input[name=userSelect1]:checked").val()){
            body.append("<h1>question 2 : correct!</h1>")
        }else{
            body.append("<h1>question 2 : incorrect!</h1>")
        }if($("input[name=userSelect2]:checked").val()){
            body.append("<h1>question 3 : correct!</h1>")
        }else{
            body.append("<h1>question 3 : incorrect!</h1>")
        }if($("input[name=userSelect3]:checked").val()){
            body.append("<h1>question 4 : correct!</h1>")
        }else{
            body.append("<h1>question 4 : incorrect!</h1>")
        };
    });
    
    startGame();
});