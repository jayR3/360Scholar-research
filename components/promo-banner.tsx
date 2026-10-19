"use client";

import { useState } from "react";
import { siteContent } from "../site-content";

export function PromoBanner() {
  const [visible, setVisible] = useState<boolean>(siteContent.promo.enabled);
  const [copied, setCopied] = useState(false);

  if (!visible) return null;

  async function copyCode() {
    if (!siteContent.promo.code) return;
    try {
      await navigator.clipboard.writeText(siteContent.promo.code);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  return (
    <aside className="promo-bar" aria-label="Current offer">
      <div className="promo-inner container">
        <span className="promo-spark" aria-hidden="true">✳</span>
        <span className="promo-label">{siteContent.promo.label}</span>
        <span className="promo-message">{siteContent.promo.message}</span>
        {siteContent.promo.code && (
          <button className="promo-code" type="button" onClick={copyCode} aria-label="Copy offer code">
            {copied ? "Copied ✓" : `${siteContent.promo.code} ⧉`}
          </button>
        )}
        {siteContent.promo.endDate && <span className="promo-date">Until {siteContent.promo.endDate}</span>}
        <a href="#contact" className="promo-link">{siteContent.promo.linkText} <span aria-hidden="true">↗</span></a>
        <button className="promo-close" type="button" aria-label="Dismiss offer" onClick={() => setVisible(false)}>×</button>
      </div>
    </aside>
  );
}
