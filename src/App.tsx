import AlertButton from "./mini-projects/Project01_AlertButton";
import EmojiCopyGame from "./mini-projects/Project02_EmojiCopyGame";
import TodoList from "./mini-projects/Project03_TodoList";
import CharacterLimit from "./mini-projects/Project04_CharLimit";
import PasswordToggle from "./mini-projects/Project05_PasswordToggle";
import MultiLanguageGreeting from "./mini-projects/Project06_MultiLanguageGreeting";
import SearchFilter from "./mini-projects/Project07_SearchFilter";

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

      <h3>4. Character Limit Alerter</h3>
      <p>
        Visually show if the input text exceeds the set character limit (20). If
        it exceeds show a visual indication and a "submission failed" alert when
        submitting.
      </p>
      <CharacterLimit />

      <h3>5. Password toggle</h3>
      <p>
        Visually show if the password is below the minimum character limit (8).
        If it is below the limit show a visual indication and a "submission
        failed" alert when submitting.
      </p>
      <PasswordToggle />

      <h3>6. Multi-Language Greeting</h3>
      <p>
        Create an app that displays greetings to a user in 3 different
        languages. The user can cycle through the greetings by clicking on a
        button. Store this selection in localStorage so that when the user
        returns to the app later they will see their last selected greeting.
      </p>
      <MultiLanguageGreeting />

      <h3>7. Search Filter</h3>
      <p>Display only the items matching the search input.</p>
      <SearchFilter />
    </>
  );
}

export default App;
