import { useState } from "react";
import { mockSubmit } from "./mockSubmit";
import styles from "./SimpleForm.module.css";

export function SimpleFormWithState() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [agreeTOS, setAgreeTOS] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    setSuccess(false);

    try {
      await mockSubmit({ name, email, agreeTOS });
      setSuccess(true);
      setName("");
      setEmail("");
      setAgreeTOS(true);
    } catch (e) {
      const err = e as Error;
      setSuccess(false);
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  // Console log just to avoid TS warning about unused vars
  console.log(
    `Submitting: ${submitting}, Success: ${success}, Error: ${error}`
  );

  return (
    <div>
      <h4>SimpleForm - with State</h4>
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
            onChange={(e) => setName(e.target.value)}
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
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label htmlFor="tos">
          <span>Agree to Terms of Service</span>
          <input
            type="checkbox"
            id="tos"
            name="tos"
            checked={agreeTOS}
            onChange={(e) => setAgreeTOS(e.target.checked)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
