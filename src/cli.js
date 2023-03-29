import readlineSync from 'readline-sync';

const printGreeting = (instruction) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  if (instruction) {
    console.log(instruction);
  }
  return name;
};

const printCorrect = () => {
  console.log('Correct!');
};

const printError = (answer, userAnswer) => {
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
};

const printCongratulation = (name) => {
  console.log(`Congratulations, ${name}!`);
};

const printTryAgain = (name) => {
  console.log(`Let's try again, ${name}!`);
};

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
