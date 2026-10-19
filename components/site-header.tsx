"use client";

import { useState } from "react";
import { siteContent } from "../site-content";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#top" aria-label="360 Scholar Research & Learning home">
          <span className="brand-mark" aria-hidden="true">360</span>
          <span className="brand-copy">
            <strong><span>{siteContent.brand.first}</span><span>{siteContent.brand.second}</span></strong>
            <small>{siteContent.brand.division}</small>
          </span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-nav"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span></span><span></span>
        </button>

        <nav className={`primary-nav${menuOpen ? " nav-open" : ""}`} id="primary-nav" aria-label="Main navigation">
          <a href="#support" onClick={() => setMenuOpen(false)}>{siteContent.nav.support}</a>
          <a href="#approach" onClick={() => setMenuOpen(false)}>{siteContent.nav.approach}</a>
          <a href="#faq" onClick={() => setMenuOpen(false)}>{siteContent.nav.faq}</a>
          <a className="nav-secondary" href="https://www.360scholar.org/" target="_blank" rel="noreferrer">
            {siteContent.nav.publishing}
          </a>
          <a className="button button-small button-dark nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>
            {siteContent.nav.cta} <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
