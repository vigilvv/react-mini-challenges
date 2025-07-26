import { useEffect, useState } from "react";
import styles from "./TabVisibilityCounter.module.css";

export default function TabVisibilityCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const handleChange = () => {
      if (document.visibilityState !== "visible") setCount((c) => c + 1);
    };

    document.addEventListener("visibilitychange", handleChange);

    return () => document.removeEventListener("visibilitychange", handleChange);
  }, []);

  return (
    <h5 className={styles.tabCounterText}>
      Number of times the user moved away from the current browser tab: {count}
    </h5>
  );
}
