// Auto incrementing counter with delay and step

import Slider from "./Slider";
import styles from "./AutoCounterWDelayAndStep.module.css";
import { useEffect, useState } from "react";
import { useEffectEvent } from "use-effect-event";

export default function AutoCounterWDelayAndStep() {
  const [count, setCount] = useState(1);
  const [delay, setDelay] = useState(100);
  const [step, setStep] = useState(1);

  function onDelayChange(value: number) {
    setDelay(value);
  }

  function onStpChange(value: number) {
    setStep(value);
  }

  const onInterval = useEffectEvent(() => {
    setCount((c) => c + step);
  });

  useEffect(() => {
    const id = setInterval(() => {
      onInterval();
    }, delay);

    return () => clearInterval(id);
  }, [delay]);

  return (
    <div>
      <h1>{count}</h1>
      <label htmlFor="delaySlider" className={styles.slider}>
        <span>Delay:</span>
        <Slider onChange={onDelayChange} MIN={100} MAX={10000} STEP={100} />
      </label>

      <label htmlFor="stepSlider" className={styles.slider}>
        Step:
        <Slider onChange={onStpChange} MIN={1} MAX={100} STEP={1} />
      </label>
    </div>
  );
}
