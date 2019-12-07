const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';

let gameIsRunning = false;

// function startGame() {
//     console.log('Hello');
// }

// const start = function() {
//   console.log('Hello');
// };

// startGameBtn.addEventListener('click', startGame);
// startGameBtn.addEventListener('click', start);

const getPlayerChoice = () => {
  const selection = prompt(`${ROCK}, ${PAPER}, ${SCISSORS}`, '').toUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
    return;
  }
  return selection;
};

const getComputerChoice = () => {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) =>
  cChoice === pChoice
    ? RESULT_DRAW
    : (pChoice === ROCK && cChoice === SCISSORS) ||
      (pChoice === SCISSORS && cChoice === PAPER) ||
      (pChoice === PAPER && cChoice === ROCK)
    ? RESULT_PLAYER_WINS
    : RESULT_COMPUTER_WINS;

// if (
//   (pChoice === ROCK && cChoice === SCISSORS) ||
//   (pChoice === SCISSORS && cChoice === PAPER) ||
//   (pChoice === PAPER && cChoice === ROCK)
// ) {
//   return RESULT_PLAYER_WINS;
// } else if (
//   (cChoice === ROCK && pChoice === SCISSORS) ||
//   (cChoice === SCISSORS && pChoice === PAPER) ||
//   (cChoice === PAPER && pChoice === ROCK)
// ) {
//   return RESULT_COMPUTER_WINS;
// } else {
//   return RESULT_DRAW;
// }

startGameBtn.addEventListener('click', () => {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log('Game is starting ...');
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  let winner;
  if (playerChoice) {
    winner = getWinner(computerChoice, playerChoice);
  } else {
    winner = getWinner(computerChoice, playerChoice);
  }
  console.log(playerChoice);
  console.log(computerChoice);
  let message = `You picked ${playerChoice ||
    DEFAULT_USER_CHOICE}, computer picked ${computerChoice}, therefore you `;
  if (winner === RESULT_DRAW) {
    message += 'had a draw';
  } else if (winner === RESULT_PLAYER_WINS) {
    message += 'won.';
  } else {
    message += 'lost.';
  }
  alert(message);
  gameIsRunning = false;
});

// not related to game

const combine = (resultHandler, operation, ...numbers) => {
  const validateNumber = number => (isNaN(number) ? 0 : number);

  let sum = 0;
  for (const num of numbers) {
    if (operation === 'ADD') {
      sum += validateNumber(num);
    } else {
      sum -= validateNumber(num);
    }
  }
  resultHandler(sum);
};

// const subtractUp = function() {
//   let sum = 0;
//   for (const num of arguments) {
//     sum -= num;
//   }
//   return sum;
// };

const showResult = (messageText, result) => alert(messageText + ' ' + result);

combine(
  showResult.bind(this, 'The result after adding all number is: '),
  'ADD',
  7,
  5,
  4,
  3,
  11,
);
combine(
  showResult.bind(this, 'The result after subtracting all number is: ',),
  'SUBTRACT',
  7,
  5,
  4,
  3,
  11,
);
