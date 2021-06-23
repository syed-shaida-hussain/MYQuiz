var readLineSync = require('readline-sync');
var highcore = 10;
var score = 0;
var userName = readLineSync.question("what's your name? ");
console.log("welcome "+userName +", to 'DO YOU KNOW ME' ")

function play(question,answer)
{
    var userAnswer = readLineSync.question(question);

    if(userAnswer.toUpperCase() === answer.toUpperCase())
    {
        console.log("you are right! , yay you scored a point ");
        score++;
    }
    else
    {
        console.log("you are wrong! ");
    }

    console.log("your current score is:",score);

}
    var questions = [{question : "where do i live? ",
    answer : "ratnipora"},
    {question : "what is my profession? ",
    answer : "student" },
    {question : "who is my favourite character in marvel? ",
    answer :"iron man"},
    {question : "who is my favourite footballer? ",
    answer :"messi"},
    {question : "what do i like to do the most? ",
    answer : "playing"},
    {question : "how old i am? ",
    answer : "20"},
    {question : "what is my favourite sport? ",
    answer : "football"},
    {question : "name my favourite place ",
    answer : "madina"},
    {question : "who is my favourite cricketer? ",
    answer : "babar azam"},
    {question : "name my phone's brand? ",
    answer : "samsung"},
    ]; 

    for(var i = 0; i<questions.length; i++)
    {
        var currentQuestion = questions[i];
        play(currentQuestion.question,currentQuestion.answer);
    }

    console.log("your final score is: ",score)

    var myScore = {
        name: "shaida",
        score: highScore,
    }

    var userScore = {
        name: userName,
        score: score,
    }

    var highScores = [myScore ,userScore];

    if (userScore.score === myScore.score)
    {
        console.log("congratulations!, " +userName+ ", you have levelled the high score.");
        console.log("please share screenshot of your score.");
    }
    else
    {
        console.log("well tried");
    }