import counterActions from "./counterActions";

const counterReducer = (currentCounterValue, counterAction) => {
  if (counterAction.type === counterActions.increase) {
    return currentCounterValue + 1;
  }
  if (counterAction.type === counterActions.decrease) {
    return currentCounterValue - 1;
  }
  if (counterAction.type === counterActions.reset) {
    return 0;
  }
  if (counterAction.type === counterActions.increaseBy) {
    return currentCounterValue + counterAction.amount;
  }
  if (counterAction.type === counterActions.invert) {
    return currentCounterValue * -1;
  }
};

export default counterReducer;
