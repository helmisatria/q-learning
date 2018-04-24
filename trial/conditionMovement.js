const jsonfile = require('jsonfile');

const file = './trial/conditionMovement.json';

const gamma = 0.8;

const rewards = [
  [-5, -3, -1, 100],
  [-2, -1, -1, -4],
  [-4, -2, -5, -4],
  [-1, -3, -2, -3],
];

// UP RIGHT DOWN LEFT

const result = [];

rewards.forEach((reward, i) => {
  reward.forEach((re, j) => {
    let UP = 1;
    let RIGHT = 1;
    let DOWN = 1;
    let LEFT = 1;

    if (i === 0) {
      UP = 0;
    }
    if (i === 3) {
      DOWN = 0;
    }
    if (j === 0) {
      LEFT = 0;
    }
    if (j === 3) {
      RIGHT = 0;
    }

    result.push([UP, RIGHT, DOWN, LEFT]);
  });
});

console.log(result);
jsonfile.writeFile(file, result, (err) => {
  console.error(err);
});

