import { useEffect, useRef, useState } from "react";
import styles from "./CSSRollAnimation.module.css";

export default function CSSRollAnimationWithRef() {
  const animate = useRef<"animateLeft" | "animateRight" | "">(""); // Which animation to play - initial state = ""

  const [animationActive, setAnimationActive] = useState(false); // Disable the button when the animation is active

  const node = useRef<HTMLDivElement | null>(null);

  const handleAnimation = () => {
    setAnimationActive(true);

    if (animate.current === "animateLeft" || animate.current === "") {
      animate.current = "animateRight";
    } else {
      animate.current = "animateLeft";
    }
  };

  useEffect(() => {
    if (!animationActive) return;

    const checkAnimations = async () => {
      if (node.current === null) return;

      const animations = node.current.getAnimations({ subtree: true });
      const promises = animations.map((animation) => animation.finished);
      await Promise.all(promises);

      setAnimationActive(false);
    };

    checkAnimations();
  }); // No dependency array because there's only one state (animationActive) that can cause re-render

  return (
    <div>
      <div className={styles.shapeContainer} ref={node}>
        <div className={`${styles.shape} ${styles[animate.current]}`}></div>
        <button
          onClick={handleAnimation}
          className={styles.button}
          disabled={animationActive}
        >
          {animate.current === "animateLeft" || animate.current === ""
            ? "Roll Right"
            : "Roll Left"}
        </button>
      </div>
    </div>
  );
}
