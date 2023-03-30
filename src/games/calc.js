import { getRandomNumber } from '../game.js';

/**
 * Manual for calc game
 */
const getCalcManual = () => 'What is the result of the expression?';

/**
 * Generates data for calc game turn
 * @returns {Object} An array of strings, where first element is a question
 * and second element is an answer.
 */
const getCalcGameData = () => {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const operation = getRandomNumber(3);
  let question;
  let answer;
  switch (operation) {
    case 1:
      question = `${num1} + ${num2}`;
      answer = (num1 + num2).toString();
      break;
    case 2:
      question = `${num1} - ${num2}`;
      answer = (num1 - num2).toString();
      break;
    case 3:
      question = `${num1} * ${num2}`;
      answer = (num1 * num2).toString();
      break;
    default:
      question = undefined;
      answer = undefined;
      break;
  }
  return [question, answer];
};

export { getCalcGameData, getCalcManual };
