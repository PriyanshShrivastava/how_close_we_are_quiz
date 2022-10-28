import chalk from "chalk";
import readlineSync from "readline-sync";
const welcome = chalk.green;
const blue = chalk.blue;
const bold = chalk.bold;
const white = chalk.white;
const bgColYellow = chalk.bgYellow;
const red = chalk.red;
const grey = chalk.grey;

import { createRequire } from "module";
import { read } from "fs";
const require = createRequire(import.meta.url);
const quesJson = require("./questions.json");

// console.log(welcome("Yoo bois!"));

let userName = readlineSync.question("What is your name? : ");
console.log();
console.log(
  bgColYellow.bold.white(
    "Hello," +
      userName +
      " I welcome you into this amazing quiz about, How well do you know ME(Priyansh)!"
  )
);

let getyearsKnown = function(){
    const yearKnown = Number(readlineSync.question("For how long do you know Priyansh? (in years): "));

    if(yearKnown>=2){
        console.log("Bro! You have to at-least score 70% otherwise you are GOOONEEE 😰 (No Pressure)")    
    }else{
        console.log("You are yet to know him more in order to answer these questions : ")
        let continueQuest = readlineSync.question("Do you wanna continue? :").toLowerCase;

        if(continueQuest == 'y' || continueQuest == 'yes'){
            console.log("Fine then! Here are the rules : - ")
        }else{
            console.log('No worries! See ya');
        }
    }
}
console.log();
console.log("     1. Every right answer gets a point.");
console.log("     2. For Every wrong answer one point will get reduced");

let score = 0;

function welcomeScreen() {
  console.log("Here we begin");
  console.log("--------------------------");
}
console.log();

getyearsKnown();

setTimeout(welcomeScreen, 2000);

function showScore(score) {
  console.log(grey.bold("Current Score :", score));
}

function play(questions) {
  
  for (let quest of questions) {
    console.log();
    let answerCust = readlineSync.question(quest.question);
    console.log();
    if (quest.answer.includes(answerCust)) {
      console.log(welcome("Yayyy! your answer is correct!"));
      score++;
      showScore(score);
    } else {
      if (score > 0) {
        score--;
      }
      console.log(red("Oh No!!!, Incorrect answer detected!"));
      showScore(score);
    }
  }
  console.log();
  console.log("--------------------------------");
  
  console.log(welcome.bold("\t\tYour Final score is : ", score));
  
  let custAgainQuest = readlineSync.question("Do you want to play the game again?  ");

  
  if(custAgainQuest == 'y' || custAgainQuest =='yes'){
    play(quesJson);
  }else{
    console.log(bold("Than you for playing! Do visit again"));
  }
}
setTimeout(play, 4000, quesJson);


