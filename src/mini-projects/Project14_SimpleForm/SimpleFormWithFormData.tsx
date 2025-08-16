import { useRef } from "react";
import { mockSubmit } from "./mockSubmit";
import styles from "./SimpleForm.module.css";

export default function SimpleFormWithFormData() {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    // If the handler is on the same element that the user is interacting with, target and currentTarget are usually the same — and "target" is fine.
    // But if you're handling events bubbling from children (like a parent <div> catching child clicks), prefer currentTarget.

    const { name, email, agreeTOS } = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      agreeTOS: (formData.get("tos") === "on") as boolean,
    };

    // alert(`Name: ${name}. Email: ${email}. Agree TOS: ${agreeTOS}`);

    await mockSubmit({ name, email, agreeTOS });

    if (formRef.current) {
      formRef.current.reset();
    }
  };

  return (
    <div>
      <h4>SimpleForm - with FormData</h4>
      <form onSubmit={handleSubmit} ref={formRef} className={styles.formStyle}>
        <label htmlFor="name">
          <span>Name</span>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="John Doe"
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
          />
        </label>

        <label htmlFor="tos">
          <span>Agree to Terms of Service</span>
          <input type="checkbox" id="tos" name="tos" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
