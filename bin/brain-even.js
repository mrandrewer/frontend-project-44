#!/usr/bin/env node
import runGame from '../src/game.js';

// One game question
const getEvenGameData = () => {
  const question = Math.round(Math.random() * 99 + 1);
  const answer = question % 2 === 0 ? 'yes' : 'no';
  return [question, answer];
};

runGame('Answer "yes" if the number is even, otherwise answer "no".', getEvenGameData);
