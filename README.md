# Q-Learning

This is a source code for Q-Learning (Reinforcement Learning Technique) using Javascript (node.js)

## Getting Started

This project use javascript as base language and npm for package manager. Make sure you have both of them on your system. ([nodejs](https://nodejs.org/en/)).

### Quick Start

1.  Install project dependencies using npm or yarn (npm preferably).

    ```
    npm install
    ```

2.  Run the Q-Learning

    ```
    npm start
    ```

## Running Procedures

1.  QLearning/conditionalMovement.js
2.  QLearning/valueMovement.js
3.  QLearning/possibleMovement.js
4.  QLearning/q-learning.js

### Node Environment

This project using 2 environment (Testing and Trial).

Use one of the environment for running a single file like so,

#### TEST Environment

```
STATUS=TEST node [QLearning/__.js]
```

#### TRIAL Environment

```
STATUS=TRIAL node [QLearning/__.js]
```

The result of each files would be generate a json file inside JSON folder and the FINAL Q-Learning located on **QLearning/JSON/Q-LEARNING.json**

## Result

You can find the results on JSON folder

## Rewards

You can find the rewards 2 Dimension array on REWARDS folder

1.  Reward TEST 2D Array file, located on: QLearning/REWARDS/**REWARD_TEST.json**
2.  Reward TRIAL 2D Array file, located on: QLearning/REWARDS/**REWARD_TRIAL.json.json**
