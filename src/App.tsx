import AlertButton from "./mini-projects/Project01_AlertButton";
import EmojiCopyGame from "./mini-projects/Project02_EmojiCopyGame";
import TodoList from "./mini-projects/Project03_TodoList";

function App() {
  return (
    <>
      <h1>React Mini Projects</h1>
      <h3>1. Alert Button</h3>
      <p>When clicked creates a button event and displays the alert</p>
      <AlertButton />

      <br />

      <h3>2. Emoji Copy Game</h3>
      <p>
        Copy the displayed emoji within 10 seconds to win the game. You can
        "RESET" and try again.
      </p>
      <EmojiCopyGame />

      <h3>3. Todo App</h3>
      <p>Create a Todo App</p>
      <TodoList />
    </>
  );
}

export default App;
