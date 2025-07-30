import { useState } from "react";
import styles from "./CSSRollAnimation.module.css";

export default function CSSRollAnimation() {
  const [position, setPosition] = useState<"left" | "right">("left"); // Postion of the square shape
  const [animationState, setAnimationState] = useState<
    "" | "animateLeft" | "animateRight"
  >(""); // Which animation to play

  const [animationActive, setAnimationActive] = useState(false); // Disable the button when the animation is active

  const handleAnimation = () => {
    setAnimationActive(true);

    setTimeout(() => {
      setAnimationActive(false);
    }, 2000);

    if (position === "left") {
      setAnimationState("animateRight");
      setPosition("right");
    } else {
      setAnimationState("animateLeft");
      setPosition("left");
    }
  };

  return (
    <div>
      <div className={styles.shapeContainer}>
        <div className={`${styles.shape} ${styles[animationState]}`}></div>
        <button
          onClick={handleAnimation}
          className={styles.button}
          disabled={animationActive}
        >
          {position === "left" ? "Roll Right" : "Roll Left"}
        </button>
      </div>
    </div>
  );
}
