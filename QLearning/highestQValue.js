const Q = require('./JSON/Q-LEARNING.json');
const R = require('./REWARDS/REWARD_TEST.json');
const nextState = require('../utils/nextState');
const randomBetween = require('../utils/randomBetween');

let REWARDS;
if (process.env.STATUS === 'TEST') REWARDS = require('./REWARDS/REWARD_TEST.json');
if (process.env.STATUS === 'TRIAL') REWARDS = require('./REWARDS/REWARD_TRIAL.json');

const INITIAL_STATE = 90;

const FINAL_STATE = 9;

let state = INITIAL_STATE;

const log = [];

let TOTALREWARDS = 0;
let count = 0;
const END = 1000;

while (state !== FINAL_STATE && count < END) {
  // console.log(Q[state]);
  log.push(state);

  const movementValues = Q[state].filter(Number); // not 0

  const maxValue = Math.max(...movementValues);

  // TOTALREWARDS += maxValue;
  // TOTALREWARDS += Math.max(...R[state].filter(x => x));

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

for (let i = 0; i < log.length; i++) {
  const colRow = log[i].toString().split('');

  let row;
  let col;
  if (colRow.length === 1) {
    row = 0;
    col = colRow[0];
  } else {
    row = colRow[0];
    col = colRow[1];
  }

  TOTALREWARDS += R[row][col];
}

console.log('====================================');
console.log({ log, steps: log.length - 1, TOTALREWARDS });
console.log('====================================');
