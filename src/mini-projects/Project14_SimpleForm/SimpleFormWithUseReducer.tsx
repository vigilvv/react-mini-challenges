import { useReducer } from "react";
import { mockSubmit } from "./mockSubmit";
import styles from "./SimpleForm.module.css";

type ReducerStateType = {
  name: string;
  email: string;
  agreeTOS: boolean;
  submitting: boolean;
  success: boolean;
  error: string | null;
};
export function SimpleFormWithUseReducer() {
  const intialState: ReducerStateType = {
    name: "",
    email: "",
    agreeTOS: true,
    // type: "",
    // value: "",
    submitting: false,
    success: false,
    error: null,
  };

  function reducer(
    state: ReducerStateType,
    // action: {
    //   type: string;
    //   name?: string;
    //   value?: string | boolean;
    //   error?: string | null;
    // }
    action:
      | {
          type: string;
        } & Partial<{
          name: string;
          value: string | boolean;
          error: string | null;
        }>
  ) {
    // if (action.type === "input") {
    //   return {
    //     ...state,
    //     [action.name ?? ""]: action.value,
    //   };
    // } else if (action.type === "submit") {
    //   return {
    //     ...state,
    //     submitting: true,
    //     success: false,
    //     error: null,
    //   };
    // } else if (action.type === "success") {
    //   return {
    //     name: "",
    //     email: "",
    //     agreeTOS: true,
    //     submitting: false,
    //     success: true,
    //     error: null,
    //   };
    // } else if (action.type === "error") {
    //   return {
    //     ...state,
    //     submitting: false,
    //     success: false,
    //     error: action.error as string,
    //   };
    // } else {
    //   throw new Error("Invalid action type");
    // }

    // Use switch instead of if/else
    switch (action.type) {
      case "input":
        return {
          ...state,
          [action.name ?? ""]: action.value,
        };
      case "submit":
        return {
          ...state,
          submitting: true,
          success: false,
          error: null,
        };
      case "success":
        return {
          name: "",
          email: "",
          agreeTOS: true,
          submitting: false,
          success: true,
          error: null,
        };
      case "error":
        return {
          ...state,
          submitting: false,
          success: false,
          error: action.error as string,
        };
      default:
        throw new Error("Invalid action type");
    }
  }

  const [state, dispatch] = useReducer(reducer, intialState);

  const { name, email, agreeTOS, submitting, success, error } = state;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: "submit" });

    try {
      await mockSubmit({ name, email, agreeTOS });
      dispatch({ type: "success" });
    } catch (e) {
      const err = e as Error;
      dispatch({ type: "error", error: err.message });
    }
  };

  // Console log just to avoid TS warning about unused vars
  console.log(
    `Submitting: ${submitting}, Success: ${success}, Error: ${error}`
  );

  return (
    <div>
      <h4>SimpleForm - with useReducer</h4>
      <form onSubmit={handleSubmit} className={styles.formStyle}>
        <label htmlFor="name">
          <span>Name</span>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="John Doe"
            value={name}
            onChange={(e) =>
              dispatch({ type: "input", name: "name", value: e.target.value })
            }
          />
        </label>

        <label htmlFor="email">
          <span>Email</span>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            required
            placeholder="johndoe@example.com"
            value={email}
            onChange={(e) =>
              dispatch({ type: "input", name: "email", value: e.target.value })
            }
          />
        </label>

        <label htmlFor="tos">
          <span>Agree to Terms of Service</span>
          <input
            type="checkbox"
            id="tos"
            name="tos"
            checked={agreeTOS}
            onChange={(e) =>
              dispatch({
                type: "input",
                name: "agreeTOS",
                value: e.target.checked,
              })
            }
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
