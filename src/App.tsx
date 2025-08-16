// import AlertButton from "./mini-projects/Project01_AlertButton";
// import EmojiCopyGame from "./mini-projects/Project02_EmojiCopyGame";
// import TodoList from "./mini-projects/Project03_TodoList";
// import CharacterLimit from "./mini-projects/Project04_CharLimit";
// import PasswordToggle from "./mini-projects/Project05_PasswordToggle";
// import MultiLanguageGreeting from "./mini-projects/Project06_MultiLanguageGreeting";
// import SearchFilter from "./mini-projects/Project07_SearchFilter";
// // import PokemonCarousel from "./mini-projects/Project08_PokemonCarousel";
// import PokemonCarousel, {
//   PokemonCarouselWithAbort,
// } from "./mini-projects/Project08_PokemonCarousel";
// import TabVisibilityCounter from "./mini-projects/Project09_TabVisibilityCounter";
// import StopWatch from "./mini-projects/Project10_StopWatch";
// import CSSRollAnimationWithTimer from "./mini-projects/Project11_CSSRollAnimation";

// import SliderCounter from "./mini-projects/Project13_SliderCounter";
import { SimpleFormWithState } from "./mini-projects/Project14_SimpleForm";

// import { CSSRollAnimationWithRef } from "./mini-projects/Project11_CSSRollAnimation";

// import ToolbarScroll from "./mini-projects/Project12_ToolbarScroll";

function App() {
  return (
    <>
      {/* <h1>React Mini Projects</h1>
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

      <h3>8. Pokemon Carousel</h3>
      <p>
        Fetch and display pokemon from PokeAPI (can also use "PokemonCarousel"
        component)
      </p>
      <PokemonCarouselWithAbort />

      <h3>9. Tab Visibility Counter</h3>
      <p>
        Displays a count for the number of times the user has switched away from
        the current browser tab.
      </p>
      <TabVisibilityCounter />

      <h3>10. StopWatch</h3>
      <p>
        Create a StopWatch component that allows the user to start and stop the
        timer.
      </p>
      <StopWatch /> */}

      {/* <h3>11. CSS Roll Animation</h3>
      <p>
        On button click transform the shape into a ball and roll (left-right and
        right-left). There is also "CSSRollAnimationWithTimer".
      </p>
      <CSSRollAnimationWithRef /> */}

      {/* <h3>12. ToolbarScroll</h3>
      <p>
        Toolbar that you can click and scroll to different sections of the page
      </p>
      <ToolbarScroll /> */}
      {/* 
      <h3>13. CounterSlider</h3>
      <p>
        Use slider to adjust count step between 1 to 10. Incremnent, decrement,
        or reset counter on button presses.
      </p>
      <SliderCounter /> */}

      <h3>14. SimpleForm</h3>
      <p>
        Simple form that takes name, email and TOS - in three forms
        "SimpleFormWithFormData", "SimpleFormWithState" and
        "SimpleFormWithReducer"
      </p>
      <SimpleFormWithState />
    </>
  );
}

export default App;
