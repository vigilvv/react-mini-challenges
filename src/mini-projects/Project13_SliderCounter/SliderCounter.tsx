import { useReducer, useState } from "react";
import styles from "./SliderCounter.module.css";

type ReducerStateType = {
  count: number;
  step: number;
};

// type ReducerActionType = {
//   type: "increment" | "decrement" | "reset" | "updateStep";
//   step?: number;
// };

// Using discriminated union
type ReducerActionType =
  | {
      type: "increment" | "decrement" | "reset";
    }
  | {
      type: "updateStep";
      step: number;
    };

export default function SliderCounter() {
  const [sliderValue, setSliderValue] = useState(1); // Can also use a ref for this

  // Reducer using else if
  // function reducer(state: ReducerStateType, action: ReducerActionType) {
  //   if (action.type === "increment") {
  //     return {
  //       count: state.count + state.step,
  //       step: state.step,
  //     };
  //   } else if (action.type === "decrement") {
  //     return {
  //       count: state.count - state.step,
  //       step: state.step,
  //     };
  //   } else if (action.type === "reset") {
  //     return {
  //       count: 0,
  //       step: state.step,
  //     };
  //   } else if (action.type === "updateStep") {
  //     return {
  //       count: state.count,
  //       // step: action.step ?? 1, // You need this to avoid TS warning. ReducerActionType for "step" can be undefined if not specified.
  //       step: action.step,
  //     };
  //   } else {
  //     throw new Error("Unsupported action type specified");
  //   }
  // }

  // Reducer using switch/case
  // function reducer(state: ReducerStateType, action: ReducerActionType) {
  //   const step = action.type === "updateStep" ? action.step : state.step;
  //   const count = state.count;

  //   switch (action.type) {
  //     case "increment":
  //       return {
  //         count: count + step,
  //         step,
  //       };
  //     case "decrement":
  //       return {
  //         count: count - step,
  //         step,
  //       };
  //     case "reset":
  //       return {
  //         count: 0,
  //         step,
  //       };
  //     case "updateStep":
  //       return {
  //         count: count,
  //         step,
  //       };
  //     default:
  //       throw new Error("Unsupported action type specified");
  //   }
  // }

  // Reducer using switch/case and spread operator - for brevity
  // function reducer(state: ReducerStateType, action: ReducerActionType) {
  //   const step = action.type === "updateStep" ? action.step : state.step;
  //   const count = state.count;

  //   switch (action.type) {
  //     case "increment":
  //       return { ...state, count: count + step };
  //     case "decrement":
  //       return { ...state, count: count - step };
  //     case "reset":
  //       return { ...state, count: 0 };
  //     case "updateStep":
  //       return { ...state, step };
  //     default:
  //       throw new Error("Unsupported action type specified");
  //   }
  // }

  // Reducer using switch/case and spread operator - for brevity - much more simplified
  function reducer(state: ReducerStateType, action: ReducerActionType) {
    const step = action.type === "updateStep" ? action.step : state.step;
    const count = state.count;

    const resultObject: Record<ReducerActionType["type"], ReducerStateType> = {
      increment: { ...state, count: count + step },
      decrement: { ...state, count: count - step },
      reset: { ...state, count: 0 },
      updateStep: { ...state, step },
    };

    if (!(action.type in resultObject)) {
      throw new Error(`Unsupported action type: ${action.type}`);
    }

    return resultObject[action.type];
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
