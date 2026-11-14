"use client";

import { useEffect, useState, type FormEvent } from "react";
import { siteContent } from "../site-content";

export function EnquiryForm() {
  const [selectedSupport, setSelectedSupport] = useState("");
  const [contactMethod, setContactMethod] = useState("WhatsApp");
  const [draftHref, setDraftHref] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    function handleSupportSelected(event: Event) {
      const customEvent = event as CustomEvent<string>;
      setSelectedSupport(customEvent.detail);
    }
    window.addEventListener("360scholar:support-selected", handleSupportSelected);
    return () => window.removeEventListener("360scholar:support-selected", handleSupportSelected);
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const supportArea = String(form.get("support-type") || "Not sure yet");
    const message = [
      "Hello 360 Scholar, I’d like to ask about academic coaching.",
      "",
      "Name: " + String(form.get("name") || "Not provided"),
      "Email: " + String(form.get("email") || "Not provided"),
      "Support area: " + supportArea,
      "Subject: " + String(form.get("study-area") || "Not provided"),
      "Study level: " + String(form.get("study-level") || "Not provided"),
      "Deadline: " + String(form.get("deadline") || "Not provided"),
      "",
      "What I’m working on:",
      String(form.get("message") || "I’d like help choosing a next step.")
    ].join("\n");

    if (contactMethod === "WhatsApp") {
      setDraftHref("https://wa.me/447535655738?text=" + encodeURIComponent(message));
      setStatus("Your message is ready as a WhatsApp draft. Review it and press Send in WhatsApp when you’re ready.");
    } else {
      const subject = "Academic coaching enquiry — " + supportArea;
      setDraftHref(
        "mailto:" + encodeURIComponent(siteContent.contact.email) +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(message)
      );
      setStatus("Your email draft is ready. Review it and press Send in your email app when you’re ready.");
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-intro">
        <span>NO OBLIGATION TO BOOK</span>
        <p>Share a little context. We’ll confirm fit, next steps and any fee before you decide.</p>
      </div>
      <label htmlFor="support-type">What would you like help with?</label>
      <select
        id="support-type"
        name="support-type"
        value={selectedSupport}
        onChange={(event) => setSelectedSupport(event.target.value)}
      >
        <option value="">Not sure yet — help me choose</option>
        <option value="Not sure yet">Help me choose</option>
        {siteContent.form.options.map((option) => <option key={option} value={option}>{option}</option>)}
      </select>

      <label htmlFor="study-area">Subject or programme <span>(optional)</span></label>
      <select id="study-area" name="study-area" defaultValue="">
        <option value="">Choose a broad area or tell us in your message</option>
        {siteContent.subjects.map((group) => (
          <optgroup key={group.name} label={group.name}>
            {group.areas.map((area) => <option key={area} value={area}>{area}</option>)}
          </optgroup>
        ))}
      </select>

      <label htmlFor="study-level">Study level <span>(optional)</span></label>
      <select id="study-level" name="study-level" defaultValue="">
        <option value="">Choose your level</option>
        {siteContent.studyLevels.map((level) => <option key={level} value={level}>{level}</option>)}
      </select>

      <label htmlFor="deadline">Your deadline <span>(optional)</span></label>
      <input id="deadline" name="deadline" placeholder="For example, 20 November" />

      <label htmlFor="name">Your name <span>(optional)</span></label>
      <input id="name" name="name" autoComplete="name" placeholder="How should we address you?" />

      <label htmlFor="email">Email address <span>(needed if you choose email below)</span></label>
      <input id="email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required={contactMethod === "Email"} />

      <label htmlFor="message">What would you like to make progress on? <span>(optional)</span></label>
      <textarea id="message" name="message" rows={3} placeholder="A short summary is enough. Please do not include student IDs or sensitive documents." />

      <label htmlFor="contact-method">How would you like to contact us?</label>
      <select id="contact-method" name="contact-method" value={contactMethod} onChange={(event) => setContactMethod(event.target.value)}>
        <option value="WhatsApp">WhatsApp · Micheal Alabi, Sales Manager</option>
        <option value="Email">Email · support@360scholar.org</option>
      </select>

      <button type="submit" className="button button-primary button-submit">
        Prepare my enquiry <span aria-hidden="true">↗</span>
      </button>
      {status && draftHref ? (
        <div className="form-draft" aria-live="polite">
          <p>{status}</p>
          <a className="button button-dark" href={draftHref} target={contactMethod === "WhatsApp" ? "_blank" : undefined} rel={contactMethod === "WhatsApp" ? "noreferrer" : undefined}>
            {contactMethod === "WhatsApp" ? "Open WhatsApp draft" : "Open email draft"} <span aria-hidden="true">↗</span>
          </a>
        </div>
      ) : (
        <p className="form-status" aria-live="polite">
          The website does not save this form. Continuing opens WhatsApp or your email app; nothing is sent until you press Send there. Those services process your information under their own terms.
        </p>
      )}
    </form>
  );
}
