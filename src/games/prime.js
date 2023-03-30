import { getRandomNumber } from '../src/game.js';

/**
 * Manual for prime game
 */
const getPrimeManual = () => 'Answer "yes" if given number is prime. Otherwise answer "no".';

/**
 * Checks if the number is prime
 * @param {Number} num Natural number
 * @returns {Boolean} True if the number is prime, otherwise false
 */
const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

/**
 * Generates data for prime game turn
 * @returns {Object} An array of strings, where first element is a question
 * and second element is an answer.
 */
const getPrimeGameData = () => {
  const question = getRandomNumber();
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question.toString(), answer];
};

export { getPrimeGameData, getPrimeManual };
