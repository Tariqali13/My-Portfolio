"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";

type State =
  | { status: "idle"; message: "" }
  | { status: "loading"; message: "" }
  | { status: "success"; message: string }
  | { status: "error"; message: string };

export function ContactForm() {
  const [state, setState] = useState<State>({ status: "idle", message: "" });

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState({ status: "loading", message: "" });

    const form = event.currentTarget;
    const data = new FormData(form);

    const payload = {
      name: String(data.get("name") || ""),
      email: String(data.get("email") || ""),
      company: String(data.get("company") || ""),
      message: String(data.get("message") || ""),
      website: String(data.get("website") || ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Unable to send your message.");
      }

      form.reset();
      setState({
        status: "success",
        message: result.message || "Thanks - your message has been sent.",
      });
    } catch (error) {
      setState({
        status: "error",
        message:
          error instanceof Error
            ? error.message
            : "Unable to send your message.",
      });
    }
  }

  return (
    <form className="contactForm" onSubmit={submit}>
      <div className="formGrid">
        <label>
          <span>Name</span>
          <input name="name" autoComplete="name" required minLength={2} maxLength={80} />
        </label>
        <label>
          <span>Email</span>
          <input name="email" type="email" autoComplete="email" required maxLength={160} />
        </label>
      </div>

      <label>
        <span>Company / organization <em>optional</em></span>
        <input name="company" autoComplete="organization" maxLength={120} />
      </label>

      <label className="honeypot" aria-hidden="true">
        Website
        <input name="website" tabIndex={-1} autoComplete="off" />
      </label>

      <label>
        <span>What are you building or hiring for?</span>
        <textarea name="message" required minLength={20} maxLength={3000} rows={6} />
      </label>

      <div className="formFooter">
        <button
          className="button buttonPrimary"
          type="submit"
          disabled={state.status === "loading"}
        >
          <Send size={17} />
          {state.status === "loading" ? "Sending…" : "Send message"}
        </button>
        <p
          className={
            state.status === "error"
              ? "formStatus formStatusError"
              : "formStatus"
          }
          aria-live="polite"
        >
          {state.message}
        </p>
      </div>
    </form>
  );
}
