const Create2DArray = require('../utils/Create2DArray');
const nextState = require('../utils/nextState');
const randomBetween = require('../utils/randomBetween');

const POSSIBLE_MOVEMENT = require('./possibleMovement.json');
const REWARDS = require('./rewards.json');
const VALUE_MOVEMENT = require('./valueMovement.json');

const GAMMA = 0.8;
const Q = Create2DArray(16, 4);

const EPISODE_LENGTH = 1;

// const __log__state = [];

for (let episode = 0; episode < EPISODE_LENGTH; episode += 1) {
  // const state = randomBetween(0, VALUE_MOVEMENT.length);
  let state = 13;

  while (state !== VALUE_MOVEMENT.length - 1) {
    // actionIndex --> 0 = UP - 1 = RIGHT - 2 = DOWN - 3 = LEFT
    // actionVal --> Value of the Action
    // const { actionIndex, actionVal } = chooseOneNotNull(VALUE_MOVEMENT[state]);
    const random = randomBetween(0, POSSIBLE_MOVEMENT[state].length);
    const actionIndex = POSSIBLE_MOVEMENT[state][random];
    const actionValue = VALUE_MOVEMENT[state][actionIndex];

    const { next_state } = nextState(REWARDS, state, actionIndex);

    const QNextValues = [];
    POSSIBLE_MOVEMENT[next_state].forEach((movementIndex) => {
      QNextValues.push(Q[next_state][movementIndex]);
    });

    const QValue = actionValue + (GAMMA * Math.max(...QNextValues));

    Q[state][actionIndex] = QValue;

    console.log('Q-Learning: \n', {
      episode, state, actionIndex, next_state, QNextValues, actionValue, QValue,
    });

    // state = 15;
    state = next_state;
  }
}

console.log('====================================');
console.log({ Q });
console.log('====================================');
