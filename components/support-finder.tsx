"use client";

import { useState } from "react";
import { siteContent } from "../site-content";

export function SupportFinder() {
  const [selected, setSelected] = useState("");

  function chooseSupport(option: string) {
    setSelected(option);
    window.dispatchEvent(new CustomEvent("360scholar:support-selected", { detail: option }));
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    window.setTimeout(() => {
      document.getElementById("support-type")?.focus({ preventScroll: true });
    }, 450);
  }

  return (
    <div className="support-finder" aria-labelledby="support-finder-title">
      <div className="support-finder-heading">
        <span className="catalog-label">Start with one choice</span>
        <h3 id="support-finder-title">What would you like help with?</h3>
        <p>Choose the closest match. You can change it or ask us to help you decide.</p>
      </div>
      <div className="support-choices">
        {siteContent.form.options.map((option, index) => (
          <button
            className={selected === option ? "support-choice is-selected" : "support-choice"}
            type="button"
            key={option}
            onClick={() => chooseSupport(option)}
          >
            <span className="choice-index">0{index + 1}</span>
            <span>{option}</span>
            <span className="choice-arrow" aria-hidden="true">↗</span>
          </button>
        ))}
        <button
          className={selected === "Not sure yet" ? "support-choice support-choice-unsure is-selected" : "support-choice support-choice-unsure"}
          type="button"
          onClick={() => chooseSupport("Not sure yet")}
        >
          <span className="choice-index">?</span>
          <span>Help me choose</span>
          <span className="choice-arrow" aria-hidden="true">↗</span>
        </button>
      </div>
    </div>
  );
}
