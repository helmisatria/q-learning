const chooseOneNotNull = (array) => {
  let actionIndex = Math.floor(Math.random() * array.length);
  let actionVal = array[actionIndex];

  while (actionVal === null) {
    actionIndex = Math.floor(Math.random() * array.length);
    actionVal = array[Math.floor(Math.random() * array.length)];
  }

  return { actionIndex, actionVal };
};

module.exports = chooseOneNotNull;

