"use client";

import { useEffect, useState } from "react";
import { siteContent } from "../site-content";

export function PromoBanner() {
  const [visible, setVisible] = useState(true);
  const [offerStage, setOfferStage] = useState<"free" | "paid" | null>(null);

  useEffect(() => {
    const isFreePeriod = Date.now() < Date.parse(siteContent.promo.freeUntil);
    setOfferStage(isFreePeriod ? "free" : "paid");
  }, []);

  if (!siteContent.promo.enabled || !visible || !offerStage) return null;

  const formatDate = (date: number) => new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC"
  }).format(new Date(date));
  const freeThrough = formatDate(Date.parse(siteContent.promo.freeUntil) - 24 * 60 * 60 * 1000);
  const paidFrom = formatDate(Date.parse(siteContent.promo.freeUntil));
  const message = offerStage === "free"
    ? siteContent.promo.freeMessage
        .replace("{duration}", String(siteContent.promo.freeDurationMinutes))
        .replace("{date}", freeThrough)
    : siteContent.promo.paidMessage
        .replace("{date}", paidFrom)
        .replace("{rate}", String(siteContent.promo.hourlyRateGBP));

  return (
    <aside className="promo-bar" aria-label="Current offer">
      <div className="promo-inner container">
        <span className="promo-spark" aria-hidden="true">✳</span>
        <span className="promo-label">{siteContent.promo.label}</span>
        <span className="promo-message">{message}</span>
        <a href="#contact" className="promo-link">
          {offerStage === "free" ? siteContent.promo.freeLinkText : siteContent.promo.paidLinkText}
          <span aria-hidden="true">↗</span>
        </a>
        <button className="promo-close" type="button" aria-label="Dismiss offer" onClick={() => setVisible(false)}>×</button>
      </div>
    </aside>
  );
}

