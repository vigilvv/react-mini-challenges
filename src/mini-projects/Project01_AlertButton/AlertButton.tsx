import styles from "./AlertButton.module.css";

export default function AlertButton() {
  const handleClick = () => alert("YOU MADE IT!");

  return (
    <button className={styles.alertButton} onClick={handleClick}>
      Alert me!
    </button>
  );
}
