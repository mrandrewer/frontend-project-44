#!/usr/bin/env node
import { getRandomNumber, runGame } from '../src/game.js';

// One game question
const getCalcGameData = () => {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const operation = getRandomNumber(3);
  let question = undefined;
  let answer = undefined;
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
  }
  return [question, answer];
};

runGame('What is the result of the expression?', getCalcGameData);
