#!/usr/bin/env node
import { getRandomNumber, runGame } from '../src/game.js';

/**
 * Generates data for even game turn
 * @returns {Object} An array of strings, where first element is a question
 * and second element is an answer.
 */
const getEvenGameData = () => {
  const question = getRandomNumber();
  const answer = question % 2 === 0 ? 'yes' : 'no';
  return [question.toString(), answer];
};

runGame('Answer "yes" if the number is even, otherwise answer "no".', getEvenGameData);
