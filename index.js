var readLineSync = require('readline-sync');
const chalk = require('chalk');
var highScore = 10;
var score = 0;
var userName = readLineSync.question("what's your name? ");
console.log(chalk.bold.green("welcome "+userName +", to 'DO YOU KNOW ME' "))

function play(question,answer)
{
    var userAnswer = readLineSync.question(question);

    if(userAnswer.toUpperCase() === answer.toUpperCase())
    {
        console.log(chalk.bold.green(userAnswer +" is the right choice! , you scored a point "));
        score++;
    }
    else
    {
        console.log(chalk.bold.red(userAnswer +" is the wrong choice!"));  
        console.log(chalk.bold.green(answer +" is the correct choice "));
    }

    console.log(chalk.bold.blue("your current score is:",score));

}
    var questions = [{question : "1. where do i live? \n a) ratnipora  \n b) pulwama \n c) budgam \n",
    answer : "a"},
    {question : "2. what is my profession? \n a) web developer \n b) student \n c) youtuber \n",
    answer : "b" },
    {question : "3. who is my favourite character among the avengers? \n a) captain america \n b) ant man \n c) iron man \n",
    answer :"c"},
    {question : "4. who is my favourite footballer? \n a) messi \n b) ronaldo \n c) zlatan \n",
    answer :"a"},
    {question : "5. what do i like to do the most? \n a) playing \n b) coding \n c) watching tech movies \n",
    answer : "b"},
    {question : "6. what is my age? \n a)18 \n b)20 \n c)21 \n",
    answer : "b"},
    {question : "7. which is my favourite sport? \n a) cricket \n b) basketball \n c) football \n",
    answer : "c"},
    {question : "8. name my favourite place \n a) spain \n b) switzerland \n c) madina \n",
    answer : "c"},
    {question : "9. who is my favourite cricketer? \n a)virat kohli \n b) babar azam \n c) ben stokes \n ",
    answer : "b"},
    {question : "10.name my phone's brand? \n a) samsung \n b) oneplus \n c) apple \n",
    answer : "a"},
    ]; 

    for(var i = 0; i<questions.length; i++)
    {
        var currentQuestion = questions[i];
        play(currentQuestion.question,currentQuestion.answer);
    }

    console.log(chalk.bold.yellow("your final score is: ",score))

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
        console.log(chalk.bold.green("congratulations! " +userName+ " , you have beaten the high score."));
        console.log(chalk.bold.blue("please share screenshot of your score."));
    }
    else
    {
        console.log(chalk.bold.yellow("well tried , but you fell short of the high score"));
    }