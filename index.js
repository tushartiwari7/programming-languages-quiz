
var ask = require('readline-sync');
const chalk = require('chalk')

var username = ask.question(chalk.bold("what's your name! "));
console.log();

console.log(``);

console.log(chalk.bgMagenta(`Welcome ${username} \nLet's play a small programming quiz, ${username} \n`));

var question1 = {
    question: `Which of these is not a programming language \n(A)-C \n(B)-C++ \n(C)-Javascript \n(D)- HTML \n\nenter A,B,C or D `,
    answer: `d`,
    answercap: `D`
  }

var question2 = {
    question: `Which Programming Language is Developed by Google \n(A)- C++ \n(B)-PHP \n(C)-Dart \n(D)-Python \n\nenter A,B,C or D `,
    answer: 'C',
    answercap: `C`
  }

var question3 = {
  question: `Which is the Most Popular Programming Language \n(A)- Java \n(B)-Python \n(C)- Javascript\n(D)-C \n \nenter A,B,C or D `,
  answer: `b`,
  answercap: `B`
}

var question4 = {
  question: `Which of these is not a procedural programming language \n(A)- C \n(B)- C++ \n(C)- Java \n(D)- FORTRAN \n\nenter A,B,C or D `,
  answer: `b`,
  answercap: `B`
}

var question5 = {
  question: `which of these is not a Scripting Programming Language \n(A)- HTML \n(B)-PHP \n(C)- Python \n(D)-Typescript \n\nenter A,B,C or D `,
  answer: `a`,
  answercap: `a`
}

var question6 = {
  question: `Which is Most Hated Programming Language. \n(A)- Objective C \n(B)- PHP  \n(C)- Javascript \n(D)- C++ \n\nenter A,B,C or D `,
  answer: `a`,
  answercap: `a`
}

var question7 = {
  question: `Which isthe Latest Android Version and when is it released. \n(A)- Android 10, 3 Feb 2020 \n(B)-Android 11, 3 Feb 2020 \n(C)- Android 10, 3 Sep 2020 \n(D)- Android 11, 3 Sep 2020  \n\nenter A,B,C or D `,
  answer: `d`,
  answercap: `D`
}

var allquestions = [question1,question2,question3,question4,question5,question6,question7];

var result = askquestion(allquestions,0);


  function askquestion (allquestions,score) {
    for(var i=0;i<allquestions.length;i++)
    {
      var userans = ask.question(chalk.bold(allquestions[i].question));

      if((userans === allquestions[i].answer) || (userans === allquestions[i].answercap)) {
        console.log(chalk.green("\nyeah! you are right "));
        score++;
      }                 
      else {
        console.log(chalk.red.bold("\nnaah dude you were wrong."));
      } 

        console.log(chalk.yellow.bold(`your score is ${score} \n`));
        console.log(chalk.gray('---------------------\n'));
        
    }

    return score;
  }

var leaderboard = [{
  name: "pradeep" ,
  score: 5
},
{
  name: "khaira" ,
  score: 4
},
{
  name: "shreya" ,
  score: 4
}];
console.log(chalk.bgGrey.white(`\n Congrats ` + username + ` You scored a total of `+result+` points \n`));
console.log(chalk.gray('---------------------\n'));
console.log(chalk.bold.magenta("LEADERBOARD:-  \n \n"));
  for(var i = 0;i<leaderboard.length;i++) {
    console.log(` ${leaderboard[i].name} : ${leaderboard[i].score} \n`);
  }
console.log(chalk.gray('---------------------\n'));
console.log(chalk.bold.bgCyan("now send me a screenshot of this \n(ig: tushartiwari0172) and i will add your name to the Leaderboard"));