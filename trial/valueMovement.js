const jsonfile = require('jsonfile');

const file = './trial/conditionMovement.json';
const fileWrite = './trial/rewards.json';

const rewards = [
  [-5, -3, -1, 100],
  [-2, -1, -1, -4],
  [-4, -2, -5, -4],
  [-1, -3, -2, -3],
];

const condition = jsonfile.readFileSync(file);

// UP RIGHT DOWN LEFT

const result = [];

let count = 0;
let I = 0;
condition.forEach((reward, i) => {
  console.log(i);

  if (count === 4) {
    count = 0;
    I += 1;
  }

  console.log({
    rewards: rewards[I],
    I,
    count,
  });

  let UP = 0;
  let DOWN = 0;
  if (I === 0) {
    UP = reward[0] * rewards[I - 1][0];
  }
  if (I === 3) {
    DOWN = reward[2] * rewards[I + 1][2];
  }

  const RIGHT = reward[1] * rewards[I][1];
  const LEFT = reward[3] * rewards[I][3];

  count += 1;

  result.push([UP, RIGHT, DOWN, LEFT]);
});

jsonfile.writeFile(fileWrite, result, (err) => {
  console.error(err);
});

