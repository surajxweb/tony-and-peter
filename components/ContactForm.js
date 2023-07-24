// ContactForm.js

import { useForm, ValidationError } from "@formspree/react";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("https://formspree.io/f/mvojgwdn");

  if (state.succeeded) {
    return <p className={styles.success}>Thank you for subscribing!</p>;
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label htmlFor="email" className={styles.label}>
        Email Address
      </label>
      <input
        id="email"
        type="email"
        name="email"
        className={styles.input}
        required
      />
      <ValidationError
        prefix="Email"
        field="email"
        errors={state.errors}
        className={styles.validationError}
      />
      <label htmlFor="message" className={styles.label}>
        Write us a message, or just say hello!
      </label>
      <textarea id="message" name="message" className={styles.textarea} />
      <ValidationError
        prefix="Message"
        field="message"
        errors={state.errors}
        className={styles.validationError}
      />
      <button
        type="submit"
        disabled={state.submitting}
        className={styles.button}
      >
        Subscribe
      </button>
      <ValidationError
        errors={state.errors}
        className={styles.validationError}
      />
    </form>
  );
}
