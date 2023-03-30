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

/**
 * Returns random number from 1 to max
 * @param {Number} max Max number, default is 100
 * @returns {Number} generated number
 */
const getRandomNumber = (max = maxGameNumber) => Math.round(Math.random() * (max - 1) + 1);

/**
 * Game turn logic
 * @param {Object} getTurnDataCallback Callback function that returns a [question, answer] array
 * @returns {bool} True if the user answers correctly
 */
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

/**
 * Main game loop logic
 * @param {String} instruction An instruction printed at the start of the gamme
 * @param {object} getTurnDataCallback Callback function that returns a [question, answer] array
  */
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
