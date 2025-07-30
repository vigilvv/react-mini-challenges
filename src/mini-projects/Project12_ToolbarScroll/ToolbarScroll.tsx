import { useRef } from "react";
import styles from "./ToolbarScroll.module.css";
import NavBar from "./NavBar";

type RefType = HTMLDivElement | null;

export default function ToolbarScroll() {
  const S1ref = useRef<RefType>(null);
  const S2ref = useRef<RefType>(null);
  const S3ref = useRef<RefType>(null);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    let ref;
    const target = e.target as HTMLDivElement;

    const sectionText = target.innerText;

    if (sectionText === "S1") ref = S1ref;
    if (sectionText === "S2") ref = S2ref;
    if (sectionText === "S3") ref = S3ref;

    if (!ref?.current) return;

    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className={styles.container}>
      <NavBar handleClick={handleClick} />
      <section>
        <div className={styles.section1} ref={S1ref}>
          Section 1
        </div>
        <div className={styles.section2} ref={S2ref}>
          Section 2
        </div>
        <div className={styles.section3} ref={S3ref}>
          Section 3
        </div>
      </section>
    </div>
  );
}
