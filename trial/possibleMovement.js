const VALUE_MOVEMENT = require('./valueMovement.json');
const jsonfile = require('jsonfile');

const file = './trial/possibleMovement.json';

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

