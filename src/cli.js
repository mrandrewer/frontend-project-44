import readlineSync from 'readline-sync';

/**
 * Prints the greeting and gets the user name
 * @param {String} instruction If specified, this string is printed after the greetings
 * @returns Entered user name
 */
const printGreeting = (instruction) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  if (instruction) {
    console.log(instruction);
  }
  return name;
};

/**
 * Prints message about correct answer
 */
const printCorrect = () => {
  console.log('Correct!');
};

/**
 * Prints message about incorrect answer
 * @param {String} answer Expected answer
 * @param {String} userAnswer Incorrect user answer
 */
const printError = (answer, userAnswer) => {
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
};

/**
 * Prints message about winning the game
 * @param {String} name User name
 */
const printCongratulation = (name) => {
  console.log(`Congratulations, ${name}!`);
};

/**
 * Prints message about losing the game
 * @param {String} name User name
 */
const printTryAgain = (name) => {
  console.log(`Let's try again, ${name}!`);
};

/**
 * Prints question and gets user answer
 * @param {String} question Question string
 * @returns {String} answer from user input
 */
const poseQuestion = (question) => {
  console.log(`Question: ${question}`);
  return readlineSync.question('Your answer: ');
};

export {
  printGreeting,
  printCorrect,
  printError,
  printCongratulation,
  printTryAgain,
  poseQuestion,
};
