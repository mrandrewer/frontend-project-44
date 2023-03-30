#!/usr/bin/env node
import { getRandomNumber, runGame } from '../src/game.js';

/**
 * Calculates the greatest common divisor for two numbers
 * @param {Number} a First number
 * @param {Number} b Second number
 */
const getGDC = (a, b) => {
  if (!b) {
    return a;
  }
  return getGDC(b, a % b);
};

/**
 * Generates data for gdc game turn
 * @returns {Object} An array of strings, where first element is a question
 * and second element is an answer.
 */
const getGDCGameData = () => {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  return [`${num1} ${num2}`, `${getGDC(num1, num2)}`];
};

runGame('Find the greatest common divisor of given numbers.', getGDCGameData);
