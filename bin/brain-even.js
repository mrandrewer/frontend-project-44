#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greet from './cli.js';

// One game question
const parityTurn = () => {
  const question = Math.round(Math.random() * 99 + 1);
  console.log(`Question: ${question}`);

  const answer = question % 2 === 0 ? 'yes' : 'no';
  const userAnswer = readlineSync.question('Your answer: ');
    
  if (userAnswer.toLowerCase() === answer) {
    console.log('Correct!');
    return true;
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
    return false;
  }
};

// Main game loop
const parityGame = () => {
  const name = greet();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let wins = 0;
  while (wins < 3) {
    if (parityTurn()) {
      wins += 1;
    } else {
      console.log(`Let's try again, ${name}!`);
      wins = 0;
    }
  };
  console.log(`Congratulations, ${name}!`);
}

parityGame();
