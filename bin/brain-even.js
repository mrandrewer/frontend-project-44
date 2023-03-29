#!/usr/bin/env node
import { getRandomNumber, runGame } from '../src/game.js';

// One game question
const getEvenGameData = () => {
  const question = getRandomNumber();
  const answer = question % 2 === 0 ? 'yes' : 'no';
  return [question, answer];
};

runGame('Answer "yes" if the number is even, otherwise answer "no".', getEvenGameData);
