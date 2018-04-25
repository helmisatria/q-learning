const jsonfile = require('jsonfile');

let REWARDS;
if (process.env.STATUS === 'TEST') REWARDS = require('./JSON/REWARD_TEST.json');
if (process.env.STATUS === 'TRIAL') REWARDS = require('./JSON/rewards.json');

const file = './QLearning/JSON/conditionMovement.json';

// UP RIGHT DOWN LEFT

const result = [];

REWARDS.forEach((reward, i) => {
  reward.forEach((re, j) => {
    let UP = 1;
    let RIGHT = 1;
    let DOWN = 1;
    let LEFT = 1;

    if (i === 0) {
      UP = 0;
    }
    if (i === REWARDS[0].length - 1) {
      DOWN = 0;
    }
    if (j === 0) {
      LEFT = 0;
    }
    if (j === REWARDS[0].length - 1) {
      RIGHT = 0;
    }

    result.push([UP, RIGHT, DOWN, LEFT]);
  });
});

jsonfile.writeFileSync(file, result);

