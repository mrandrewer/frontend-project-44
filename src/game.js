import {
  printGreeting,
  printCorrect,
  printError,
  printCongratulation,
  printTryAgain,
  poseQuestion,
} from './cli.js';

const turnsToWin = 3;

// game turn logic
const runGameTurn = (getTurnDataCallback) => {
  const [question, answer] = getTurnDataCallback();
  const userAnswer = poseQuestion(question);
  if (userAnswer.toLowerCase() === answer) {
    printCorrect();
    return true;
  }
  printError();
  return false;
};

// Main game loop
const runGame = (instruction, getTurnDataCallback) => {
  const name = printGreeting(instruction);
  let turnWins = 0;
  while (turnWins < turnsToWin) {
    if (runGameTurn(getTurnDataCallback)) {
      turnWins += 1;
    } else {
      printTryAgain(name);
      turnWins = 0;
    }
  }
  printCongratulation(name);
};

export default runGame;
