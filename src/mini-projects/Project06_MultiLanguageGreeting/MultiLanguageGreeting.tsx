import { useEffect, useState } from "react";
import styles from "./MultiLanguageGreeting.module.css";

export default function MultiLanguageGreeting() {
  const [index, setIndex] = useState(0);
  const greetings = ["Hello", "Hola", "Bonjour"];

  const handleGreetingClick = () => {
    const newIndex = index === 2 ? 0 : index + 1;
    setIndex(newIndex);
    localStorage.setItem("index", newIndex.toString());
  };

  useEffect(() => {
    const retrievedIndex = localStorage.getItem("index");

    if (retrievedIndex === null) return;
    // console.log("Running useEffect", new Date().getTime());
    setIndex(Number(retrievedIndex));
  }, []);

  return (
    <div>
      <h3 className={styles.greeting}>{greetings[index]}, Sir</h3>
      <button onClick={handleGreetingClick}>Next Greeting</button>
    </div>
  );
}
