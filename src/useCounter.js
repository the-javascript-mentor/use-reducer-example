import { useReducer } from "react";
import counterActions from "./counterActions";
import counterReducer from "./counterReducer";

const useCounter = () => {
  const [counter, dispatchCounterAction] = useReducer(counterReducer, 0);

  const increaseCounter = () => {
    dispatchCounterAction({
      type: counterActions.increase,
    });
  };

  const decreaseCounter = () => {
    dispatchCounterAction({
      type: counterActions.decrease,
    });
  };

  const increaseCounterBy = (amount) => {
    dispatchCounterAction({
      type: counterActions.increaseBy,
      amount,
    });
  };

  const resetCounter = () => {
    dispatchCounterAction({
      type: counterActions.reset,
    });
  };

  const invertCounter = () => {
    dispatchCounterAction({
      type: counterActions.invert,
    });
  };

  return {
    counter,
    increaseCounter,
    decreaseCounter,
    increaseCounterBy,
    resetCounter,
    invertCounter,
  };
};

export default useCounter;
