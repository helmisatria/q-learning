const VALUE_MOVEMENT = require('./JSON/valueMovement.json');
const jsonfile = require('jsonfile');

const file = './QLearning/JSON/possibleMovement.json';

const possibleMovement = [];

VALUE_MOVEMENT.forEach((row) => {
  const tmp = [];
  row.forEach((col, index) => {
    if (col !== null) {
      tmp.push(index);
    }
  });
  possibleMovement.push(tmp);
});

jsonfile.writeFile(file, possibleMovement);

