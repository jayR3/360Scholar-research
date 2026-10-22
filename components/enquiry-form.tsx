"use client";

import { useState, type FormEvent } from "react";
import { siteContent } from "../site-content";

export function EnquiryForm() {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const supportArea = String(form.get("support-type") || "Not sure yet");
    const subject = `Academic coaching enquiry — ${supportArea}`;
    const body = [
      `Name: ${String(form.get("name") ?? "")}`,
      `Email: ${String(form.get("email") ?? "")}`,
      `Support area: ${supportArea}`,
      "",
      `Goals:\n${String(form.get("message") || "Not provided")}`
    ].join("\n");

    window.location.href = `mailto:${encodeURIComponent(siteContent.contact.email)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus("Your email app will open. Send the prepared email and we’ll reply with a time or next step.");
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label htmlFor="name">{siteContent.form.nameLabel}</label>
      <input id="name" name="name" autoComplete="name" placeholder={siteContent.form.namePlaceholder} required />
      <label htmlFor="email">{siteContent.form.emailLabel}</label>
      <input id="email" name="email" type="email" autoComplete="email" placeholder={siteContent.form.emailPlaceholder} required />
      <label htmlFor="support-type">{siteContent.form.supportLabel}</label>
      <select id="support-type" name="support-type" defaultValue="">
        <option value="" disabled>{siteContent.form.supportPlaceholder}</option>
        {siteContent.form.options.map((option) => <option key={option}>{option}</option>)}
      </select>
      <label htmlFor="message">
        {siteContent.form.messageLabel} <span>{siteContent.form.optionalLabel}</span>
      </label>
      <textarea id="message" name="message" rows={3} placeholder={siteContent.form.messagePlaceholder}></textarea>
      <button type="submit" className="button button-primary button-submit">
        {siteContent.form.submit} <span aria-hidden="true">↗</span>
      </button>
      <p className="form-status" aria-live="polite">
        {status || siteContent.form.privacyNote} {" "}
        <a href={`mailto:${siteContent.contact.email}?subject=Academic%20coaching%20enquiry`}>
          {siteContent.form.directEmailLabel}
        </a>
      </p>
    </form>
  );
}

