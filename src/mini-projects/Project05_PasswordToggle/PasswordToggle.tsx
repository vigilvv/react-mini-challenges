import { useState } from "react";
import styles from "./PasswordToggle.module.css";
const MIN_PASSWORD_LENGTH = 8;

export default function PasswordToggle() {
  const [passwordInput, setPasswordInput] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const passwordLength = passwordInput.length;
  const belowLimit = passwordLength < MIN_PASSWORD_LENGTH;

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPasswordInput(e.target.value);

  const handleShowPasswordClick = () => setShowPassword(!showPassword);

  const handleSubmitClick = (e: React.FormEvent) => {
    e.preventDefault();
    if (belowLimit) {
      alert("Password too short");
    } else {
      alert("Password successfully submitted");
      setPasswordInput("");
    }
  };
  return (
    <form onSubmit={handleSubmitClick}>
      <div className={styles.labelDiv}>
        <label htmlFor="password-input">Password:</label>
        <span className={belowLimit ? styles.textRed : styles.textGreen}>
          {passwordLength}
        </span>
      </div>
      <div className={styles.inputDiv}>
        <input
          type={showPassword ? "text" : "password"}
          id="password-input"
          placeholder="Password"
          value={passwordInput}
          onChange={handlePasswordChange}
        />
        <button type="button" onClick={handleShowPasswordClick}>
          {showPassword ? "hide" : "show"}
        </button>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
