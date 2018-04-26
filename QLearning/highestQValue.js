const Q = require('./JSON/Q-LEARNING.json');
const nextState = require('../utils/nextState');
const randomBetween = require('../utils/randomBetween');

let REWARDS;
if (process.env.STATUS === 'TEST') REWARDS = require('./REWARDS/REWARD_TEST.json');
if (process.env.STATUS === 'TRIAL') REWARDS = require('./REWARDS/REWARD_TRIAL.json');

const INITIAL_STATE = 90;

const FINAL_STATE = 9;

let state = INITIAL_STATE;

const log = [];

let result = 0;
let count = 0;
const END = 1000;

while (state !== FINAL_STATE && count < END) {
  // console.log(Q[state]);
  log.push(state);

  const movementValues = Q[state].filter(Number); // not 0

  const maxValue = Math.max(...movementValues);


  result += maxValue;

  // IF value Q Action ada yang sama dalam 1 state
  let maxIndex;
  let countMaxValue = 0;
  const indexMaxValues = [];
  movementValues.forEach((val, index) => {
    if (val === maxValue) {
      countMaxValue += 1;
      indexMaxValues.push(index);
    }
  });
  if (countMaxValue > 1) {
    const rand = randomBetween(0, countMaxValue);
    maxIndex = indexMaxValues[rand];
  } else {
    maxIndex = Q[state].indexOf(maxValue);
  }

  // console.log({
  //   state, maxValue, maxIndex, q: Q[state],
  // });

  const { next_state } = nextState(REWARDS, state, maxIndex);

  state = next_state;
  count += 1;
}
log.push(state);


console.log('====================================');
console.log({ log, result, count: log.length });
console.log('====================================');
