import {
  printGreeting,
  printCorrect,
  printError,
  printCongratulation,
  printTryAgain,
  poseQuestion,
} from './cli.js';

const turnsToWin = 3;
const maxGameNumber = 100;

const getRandomNumber = (max = maxGameNumber) => Math.round(Math.random() * (max - 1) + 1);

// game turn logic
const runGameTurn = (getTurnDataCallback) => {
  const [question, answer] = getTurnDataCallback();
  const userAnswer = poseQuestion(question);
  if (userAnswer.toLowerCase() === answer) {
    printCorrect();
    return true;
  }
  printError(answer, userAnswer);
  return false;
};

// Main game loop
const runGame = (instruction, getTurnDataCallback) => {
  const name = printGreeting(instruction);
  let turnWins = 0;
  while (turnWins < turnsToWin) {
    if (!runGameTurn(getTurnDataCallback)) {
      printTryAgain(name);
      return;      
    }
    turnWins += 1;
  }
  printCongratulation(name);
};

export { runGame, getRandomNumber };
