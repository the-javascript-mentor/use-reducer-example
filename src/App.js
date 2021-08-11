import useCounter from "./useCounter";

const App = () => {
  const {
    counter,
    increaseCounter,
    decreaseCounter,
    increaseCounterBy,
    resetCounter,
    invertCounter,
  } = useCounter();
  return (
    <div>
      <p>The current value is: {counter}</p>
      <button onClick={increaseCounter}>Increase</button>
      <hr />
      <button onClick={decreaseCounter}>Decrease</button>
      <hr />
      <button
        onClick={() => {
          increaseCounterBy(10);
        }}
      >
        Increase by 10
      </button>
      <hr />
      <button
        onClick={() => {
          increaseCounterBy(100);
        }}
      >
        Increase by 100
      </button>
      <hr />
      <button onClick={resetCounter}>Reset</button>
      <hr />
      <button onClick={invertCounter}>Invert</button>
    </div>
  );
};

export default App;
