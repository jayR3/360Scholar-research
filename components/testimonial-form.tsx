"use client";

import { useState, type FormEvent } from "react";
import { siteContent } from "../site-content";

const whatsappUrl = (message: string) =>
  "https://wa.me/447535655738?text=" + encodeURIComponent(message);

export function TestimonialForm() {
  const [submitted, setSubmitted] = useState(false);
  const [feedbackDraft, setFeedbackDraft] = useState("");
  const [thesisInterest, setThesisInterest] = useState(false);
  const [thesisPrompt, setThesisPrompt] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const service = String(form.get("service") || "");
    const isThesis = service.toLowerCase().includes("thesis") || service.toLowerCase().includes("dissertation");
    const lines = [
      "Hello 360 Scholar, I’d like to share feedback about my support.",
      "Support used: " + service,
      "Subject / study area: " + String(form.get("study-area") || "Not provided"),
      "Study level: " + String(form.get("study-level") || "Not provided"),
      "Person who supported me: " + String(form.get("specialist") || "Not provided"),
      "Name: " + String(form.get("first-name") || "Not provided"),
      "Rating: " + String(form.get("rating") || "") + " out of 5",
      "",
      "My feedback:",
      String(form.get("review") || ""),
      "",
      "Permission to publish: " + (form.get("publish-consent") ? "Yes, as selected below" : "No permission given; please keep this private")
    ];
    const displayName = String(form.get("display-name") || "Anonymous");
    if (form.get("publish-consent")) lines.push("If published, display me as: " + displayName);
    setFeedbackDraft(whatsappUrl(lines.join("\n")));
    setThesisPrompt(isThesis);
    setThesisInterest(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="testimonial-success" aria-live="polite">
        <span className="success-mark" aria-hidden="true">✓</span>
        <h3>Thank you for sharing your experience.</h3>
        <p>Your feedback draft is ready in WhatsApp. Please review and send it there. Nothing is published automatically.</p>
        <a className="button button-dark" href={feedbackDraft} target="_blank" rel="noreferrer">Open feedback draft <span aria-hidden="true">↗</span></a>
        {thesisPrompt && (
          <div className="thesis-prompt">
            <span className="catalog-label">One optional next step</span>
            <h4>Would you like to explore publishing your thesis?</h4>
            <p>This appears because you selected thesis or dissertation support. It is optional and is not shown for assessment-only feedback.</p>
            <div className="thesis-actions">
              <button type="button" className="button button-primary" onClick={() => setThesisInterest(true)}>Yes, tell me more <span aria-hidden="true">↗</span></button>
              <button type="button" className="text-link" onClick={() => setThesisPrompt(false)}>No, thanks</button>
            </div>
            {thesisInterest && (
              <a className="thesis-followup" href={whatsappUrl("Hello 360 Scholar, I have shared feedback about thesis or dissertation coaching and would like to explore publishing my thesis. Please tell me the next step.")} target="_blank" rel="noreferrer">
                Open a publishing enquiry in WhatsApp <span aria-hidden="true">↗</span>
              </a>
            )}
          </div>
        )}
        <button type="button" className="text-link feedback-again" onClick={() => setSubmitted(false)}>Share another review</button>
      </div>
    );
  }

  return (
    <form className="testimonial-form" onSubmit={handleSubmit}>
      <div className="testimonial-form-heading">
        <span>YOUR FEEDBACK</span>
        <p>Required fields are marked with an asterisk.</p>
      </div>
      <label htmlFor="feedback-service">Which support did you use? *</label>
      <select id="feedback-service" name="service" required defaultValue="">
        <option value="" disabled>Select a support area</option>
        {siteContent.form.options.map((option) => <option key={option} value={option}>{option}</option>)}
      </select>

      <label htmlFor="feedback-study-area">Subject or programme</label>
      <select id="feedback-study-area" name="study-area" defaultValue="">
        <option value="">Choose a broad area</option>
        {siteContent.subjects.map((group) => (
          <optgroup key={group.name} label={group.name}>
            {group.areas.map((area) => <option key={area} value={area}>{area}</option>)}
          </optgroup>
        ))}
      </select>

      <label htmlFor="feedback-study-level">Study level</label>
      <select id="feedback-study-level" name="study-level" defaultValue="">
        <option value="">Choose your level</option>
        {siteContent.studyLevels.map((level) => <option key={level} value={level}>{level}</option>)}
      </select>

      <label htmlFor="feedback-specialist">Name of the writer or specialist who supported you <span>(optional)</span></label>
      <input id="feedback-specialist" name="specialist" placeholder="Enter their name if you remember it" />

      <label htmlFor="feedback-first-name">Your first name <span>(optional)</span></label>
      <input id="feedback-first-name" name="first-name" placeholder="Only needed if you prefer to be identified" />

      <label htmlFor="feedback-rating">Your rating *</label>
      <select id="feedback-rating" name="rating" required defaultValue="">
        <option value="" disabled>Choose a rating</option>
        <option value="5">5 — Excellent</option>
        <option value="4">4 — Very good</option>
        <option value="3">3 — Good</option>
        <option value="2">2 — Could be better</option>
        <option value="1">1 — Poor</option>
      </select>

      <label htmlFor="feedback-review">Your written feedback *</label>
      <textarea id="feedback-review" name="review" rows={4} minLength={10} maxLength={1200} required placeholder="What support did you use, and what did you find useful?" />

      <label htmlFor="feedback-display-name">If you give publication permission, display this as</label>
      <select id="feedback-display-name" name="display-name" defaultValue="Anonymous">
        <option>Anonymous</option>
        <option>First name only</option>
      </select>

      <label className="consent-label">
        <input type="checkbox" name="publish-consent" />
        <span>I give 360 Scholar permission to consider publishing this feedback using the display choice above. I understand it will be reviewed first.</span>
      </label>

      <button type="submit" className="button button-primary button-submit">Prepare my feedback <span aria-hidden="true">↗</span></button>
      <p className="form-status">This site does not store feedback. WhatsApp opens with a draft for you to review and send. A video can be attached there before you press Send. If you do not tick publication permission, the review is marked private.</p>
    </form>
  );
}
