import { getRandomNumber } from '../game.js';

/**
 * Manual for gdc game
 */
const getGCDManual = () => 'Find the greatest common divisor of given numbers.';

/**
 * Calculates the greatest common divisor for two numbers
 * @param {Number} a First number
 * @param {Number} b Second number
 */
const getGCD = (a, b) => {
  if (!b) {
    return a;
  }
  return getGCD(b, a % b);
};

/**
 * Generates data for gdc game turn
 * @returns {Object} An array of strings, where first element is a question
 * and second element is an answer.
 */
const getGCDGameData = () => {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  return [`${num1} ${num2}`, `${getGCD(num1, num2)}`];
};

export { getGCDGameData, getGCDManual };
