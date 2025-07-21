import { useState } from "react";
import styles from "./CharacterLimit.module.css";
const MAX_CHAR_LIMIT = 20;

export default function CharacterLimit() {
  const [input, setInput] = useState("");
  const charsUsed = input.length;
  const limitExceeded = charsUsed > MAX_CHAR_LIMIT;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInput(e.target.value);

  const handleSubmitClick = () => {
    if (limitExceeded) {
      alert("Cannot submit: Limit exceeded");
    } else {
      alert("Submitted successfully");
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSubmitClick}>
      <div className={styles.labelDiv}>
        <label htmlFor="input-text">Input text:</label>
        <span className={limitExceeded ? styles.charLimitExceed : ""}>
          Characters remaining: {MAX_CHAR_LIMIT - charsUsed}
        </span>
      </div>
      <input
        type="text"
        id="input-text"
        value={input}
        onChange={handleInputChange}
        placeholder="Enter some text"
      />
      <button type="submit">Submit</button>
    </form>
  );
}
