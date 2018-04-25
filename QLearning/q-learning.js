const Create2DArray = require('../utils/Create2DArray');
const nextState = require('../utils/nextState');
const randomBetween = require('../utils/randomBetween');
const jsonfile = require('jsonfile');

const POSSIBLE_MOVEMENT = require('./JSON/possibleMovement.json');

let REWARDS;
if (process.env.STATUS === 'TEST') REWARDS = require('./REWARDS/REWARD_TEST.json');
if (process.env.STATUS === 'TRIAL') REWARDS = require('./REWARDS/REWARD_TRIAL.json');

const VALUE_MOVEMENT = require('./JSON/valueMovement.json');

const GAMMA = 1;
const Q = Create2DArray(REWARDS.length * REWARDS[0].length, 4);

const GOALSTATE = 9;
const EPISODE_LENGTH = 100;
const LOG = [];

for (let episode = 0; episode < EPISODE_LENGTH; episode += 1) {
  let state = randomBetween(0, VALUE_MOVEMENT.length);

  while (state !== GOALSTATE) {
    // actionIndex --> 0 = UP - 1 = RIGHT - 2 = DOWN - 3 = LEFT
    // actionValue --> Value of the Action

    const random = randomBetween(0, POSSIBLE_MOVEMENT[state].length);
    const actionIndex = POSSIBLE_MOVEMENT[state][random];
    const actionValue = VALUE_MOVEMENT[state][actionIndex];

    const { next_state } = nextState(REWARDS, state, actionIndex);

    const QNextValues = [];
    POSSIBLE_MOVEMENT[next_state].forEach((movementIndex) => {
      QNextValues.push(Q[next_state][movementIndex]);
    });

    const QValue = actionValue + (GAMMA * Math.max(...QNextValues));

    // Q[state][actionIndex] = QValue;
    Q[state][actionIndex] = Math.ceil(QValue);

    // console.log('Q-Learning: \n', {
    //   episode, state, actionIndex, next_state, QNextValues, actionValue, QValue,
    // });

    LOG.push({
      episode, state, actionIndex, next_state, QNextValues, actionValue, QValue,
    });

    // state = 15;
    state = next_state;
  }
}


console.log('====================================');
console.log({ Q });
console.log('====================================');

jsonfile.writeFileSync('./QLearning/JSON/Q-LEARNING.json', Q);

