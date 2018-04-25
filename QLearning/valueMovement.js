const jsonfile = require('jsonfile');

let REWARDS;
if (process.env.STATUS === 'TEST') REWARDS = require('./JSON/REWARD_TEST.json');
if (process.env.STATUS === 'TRIAL') REWARDS = require('./JSON/rewards.json');

const file = './QLearning/JSON/conditionMovement.json';
const fileWrite = './QLearning/JSON/valueMovement.json';

const condition = jsonfile.readFileSync(file);

// UP RIGHT DOWN LEFT

const result = [];

let count = 0;
let I = 0;
condition.forEach((reward) => {
  // console.log(i);

  if (count === REWARDS[0].length) {
    count = 0;
    I += 1;
  }

  console.log({
    REWARDS: REWARDS[I],
    I,
    count,
  });

  let UP = null;
  let DOWN = null;
  if (I !== 0) {
    UP = reward[0] * REWARDS[I - 1][count];
  }
  if (I !== REWARDS[0].length - 1) {
    DOWN = reward[2] * REWARDS[I + 1][count];
  }

  const RIGHT = reward[1] * REWARDS[I][count + 1];
  const LEFT = reward[3] * REWARDS[I][count - 1];

  count += 1;

  result.push([UP, RIGHT, DOWN, LEFT]);
});

jsonfile.writeFileSync(fileWrite, result);
