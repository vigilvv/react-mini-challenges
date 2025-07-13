import styles from "./EmojiCopyGame.module.css";

const emojis = [
  {
    id: "frown",
    emoji: "🙁",
  },
  {
    id: "mid",
    emoji: "😐",
  },
  {
    id: "smile",
    emoji: "🙂",
  },
];

export default function EmojiCopyGame() {
  const selectedEmojiIndex = Math.floor(Math.random() * emojis.length);
  const selectedEmoji = emojis[selectedEmojiIndex];

  const handleCopy = (e: React.ClipboardEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;

    const copiedEmoji = target.innerText;
    const copiedTimestamp = e.timeStamp;

    if (copiedEmoji === selectedEmoji.emoji && copiedTimestamp <= 10000) {
      alert("Winner!");
    } else {
      alert("You lose! Try again by pressing the RESET button.");
    }
  };

  const handleReset = () => window.location.reload();

  return (
    <div className={styles.gameBox}>
      <div className={styles.selectedEmoji}>{selectedEmoji.emoji}</div>
      <p className={styles.mainEmojiText}>Copy this emoji</p>
      <ul className={styles.allEmojis}>
        {emojis.map((emoji) => (
          <li key={emoji.id} onCopy={handleCopy}>
            {emoji.emoji}
          </li>
        ))}
      </ul>
      <a onClick={handleReset} className={styles.resetButton}>
        RESET GAME
      </a>
    </div>
  );
}
