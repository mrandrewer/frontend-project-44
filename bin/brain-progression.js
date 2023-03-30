#!/usr/bin/env node
import { getRandomNumber, runGame } from '../src/game.js';

const minProgressionLength = 5;
const maxProgressionLength = 15;
const maxStartElement = 20;
const maxIncrement = 20;

/**
 * Generates data for progression game turn
 * @returns {Object} An array of strings, where first element is a question
 * and second element is an answer.
 */
const getProgressionGameData = () => {
  const progressionLength = minProgressionLength
    + getRandomNumber(maxProgressionLength - minProgressionLength);
  const increment = getRandomNumber(maxIncrement);

  const progression = [];
  let element = getRandomNumber(maxStartElement);
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(`${element}`);
    element += increment;
  }

  const missPosition = getRandomNumber(progressionLength - 1);
  const answer = progression[missPosition];
  progression[missPosition] = '..';
  const question = progression.join(' ');
  return [question, answer];
};

runGame('What number is missing in the progression?', getProgressionGameData);
