import { useEffect, useRef, useState } from "react";
import styles from "./StopWatch.module.css";
import formatTime from "./formatTime";

export default function StopWatch() {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);
  const timerId = useRef<NodeJS.Timeout | null>(null);

  const handleRunning = () => {
    if (!running) {
      timerId.current = setInterval(() => {
        setSeconds((s) => s + 1);
      }, 1000);

      setRunning(true);
    } else {
      clearInterval(timerId.current ?? ""); // If timerId.current is null then pass the empty string to clearInterval because it does not accept null
      //   timerId.current = null; // Its already cleared so setting it to null or not, does not matter
      setRunning(false);
    }
  };

  useEffect(() => {
    return () => clearInterval(timerId.current ?? "");
  }, []);

  return (
    <div>
      <p className={styles.timerText}>{formatTime(seconds)}</p>
      <button onClick={handleRunning}>{running ? "Stop" : "Start"}</button>
    </div>
  );
}
