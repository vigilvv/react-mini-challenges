import styles from "./ToolbarScroll.module.css";

export default function NavBar({
  handleClick,
}: {
  handleClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}) {
  return (
    <nav>
      <div className={styles.navChild1} onClick={handleClick}>
        S1
      </div>
      <div className={styles.navChild2} onClick={handleClick}>
        S2
      </div>
      <div className={styles.navChild3} onClick={handleClick}>
        S3
      </div>
    </nav>
  );
}
