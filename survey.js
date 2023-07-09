const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let questions = ['What\'s your name? Nicknames are also acceptable :) ',
'What\'s an activity you like doing? ',
'What do you listen to while doing that? ',
'Which meal is your favourite (eg: dinner, brunch, etc.)? ',
'What\'s your favourite thing to eat for that meal? ', 
'Which sport is your absolute favourite? ',
'What is your superpower? In a few words, tell us what you are amazing at! '];
let answers = [];

function askQuestion(index) {
  rl.question(questions[index], (answer) => {
    console.log(`${answer}, awesome!`);
    answers.push(answer)
    if (index === questions.length - 1) {
      console.log(`Here is your funky, fabulous profile: Hi! my name is ${answers[0]} and I really enjoy ${answers[1]}. While ${answers[1]} I like to listen to ${answers[2]}! My favourite meal of the day is ${answers[3]} because I love to eat ${answers[4]}! I also get hungry lots because I play ${answers[5]}. If I was a superhero (maybe I am ;) ) I would have ${answers[6]} powers!`)
      rl.close();
    } else {
      askQuestion(index + 1);
    }
  });
}

askQuestion(0);
