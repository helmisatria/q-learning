const nextState = (REWARDS, currentState, actionIndex) => {
  let next_state_val;

  let realState = currentState;
  let row = 0;
  let row_next = 0;
  let col_next = 0;
  let colPlusMinus = 0;

  while (realState > REWARDS[0].length - 1) {
    realState -= REWARDS[0].length;
    row += 1;
  }

  row_next = row;

  if (actionIndex === 0) { // UP
    row_next = row - 1;
    next_state_val = REWARDS[row_next][realState];
  } else if (actionIndex === 1) { // RIGHT
    col_next = realState + 1;
    colPlusMinus += 1;
    next_state_val = REWARDS[row][col_next];
  } else if (actionIndex === 2) { // DOWN
    row_next = row + 1;
    next_state_val = REWARDS[row_next][realState];
  } else if (actionIndex === 3) { // LEFT
    col_next = realState - 1;
    colPlusMinus -= 1;
    next_state_val = REWARDS[row][col_next];
  }

  let next_state = realState;
  for (let i = row_next; i !== 0; i -= 1) {
    next_state += REWARDS[0].length;
    // console.log(i);
  }

  next_state += colPlusMinus;

  // console.log('====================================');
  // console.log({
  //   realState, row, next_state,
  // });
  // console.log('====================================');

  return { next_state_val, next_state };
};

module.exports = nextState;

