"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        e.target,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess(true);
          setError(false);
          e.target.reset();
        },
        () => {
          setError(true);
          console.error("EmailJS error:", err);
          setSuccess(false);
        }
      );
  };

  return (
    <section className="contact-section">
      <h1>Contact Me</h1>

      <form className="contact-form" onSubmit={sendEmail}>
        <input name="name" placeholder="Name" required />
        <input name="email" type="email" placeholder="Email" required />
        <input name="subject" placeholder="Subject" required />
        <textarea name="message" placeholder="Message" required />

        <button type="submit">Send Message</button>
      </form>

      {success && <p className="success">Message sent successfully!</p>}
      {error && <p className="error">Something went wrong. Try again.</p>}
    </section>
  );
}
