import { useReducer, useState } from "react";
import styles from "./SliderCounter.module.css";

type ReducerStateType = {
  count: number;
  step: number;
};

type ReducerActionType = {
  type: "increment" | "decrement" | "reset" | "updateStep";
  step?: number;
};

export default function SliderCounter() {
  const [sliderValue, setSliderValue] = useState(1);

  function reducer(state: ReducerStateType, action: ReducerActionType) {
    if (action.type === "increment") {
      return {
        count: state.count + state.step,
        step: state.step,
      };
    } else if (action.type === "decrement") {
      return {
        count: state.count - state.step,
        step: state.step,
      };
    } else if (action.type === "reset") {
      return {
        count: 0,
        step: state.step,
      };
    } else if (action.type === "updateStep") {
      return {
        count: state.count,
        step: action.step ?? 1, // You need this to avoid TS warning. ReducerActionType for "step" can be undefined if not specified.
      };
    } else {
      throw new Error("Unsupported action type specified");
    }
  }

  const [state, dispatch] = useReducer(reducer, { count: 0, step: 1 });

  const handleIncrement = () => dispatch({ type: "increment" });
  const handleDecrement = () => dispatch({ type: "decrement" });
  const handleReset = () => dispatch({ type: "reset" });
  const handleUpdateStep = (step: number) =>
    dispatch({ type: "updateStep", step });

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const stepValue = Number(target.value);
    setSliderValue(stepValue);
    handleUpdateStep(stepValue);
  };

  return (
    <div>
      <h2 className={styles.count}>{state.count}</h2>
      <div>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleReset}>0</button>
      </div>
      <div className={styles.sliderGroup}>
        <input
          type="range"
          min="1"
          max="10"
          value={sliderValue}
          onChange={handleSliderChange}
        />
        <span>{sliderValue}</span>
      </div>
    </div>
  );
}
