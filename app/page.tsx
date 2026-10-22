import Image from "next/image";
import { EnquiryForm } from "../components/enquiry-form";
import { PromoBanner } from "../components/promo-banner";
import { SiteHeader } from "../components/site-header";
import { siteContent } from "../site-content";

export default function HomePage() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <PromoBanner />
      <SiteHeader />

      <main id="main">
        <section className="hero section-pad" id="top">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow"><span className="eyebrow-rule"></span>{siteContent.hero.kicker}</p>
              <h1>{siteContent.hero.title}</h1>
              <p className="hero-lede">{siteContent.hero.description}</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#contact">{siteContent.hero.primaryCta} <span aria-hidden="true">↗</span></a>
                <a className="text-link" href="#support">{siteContent.hero.secondaryCta} <span aria-hidden="true">↓</span></a>
              </div>
              <p className="hero-cta-hint">{siteContent.hero.ctaHint}</p>
              <div className="hero-points" aria-label="Our principles">
                <span><i aria-hidden="true">✓</i> {siteContent.hero.pointOne}</span>
                <span><i aria-hidden="true">✓</i> {siteContent.hero.pointTwo}</span>
              </div>
            </div>

            <div className="hero-visual">
              <Image
                src="/research-consultation-hero.svg"
                alt={siteContent.hero.imageAlt}
                fill
                priority
                sizes="(max-width: 760px) 100vw, 52vw"
              />
              <div className="hero-image-shade" aria-hidden="true"></div>
              <div className="hero-note">
                <span className="note-icon" aria-hidden="true">✳</span>
                <div><strong>{siteContent.hero.noteTitle}</strong><span>{siteContent.hero.noteSubtitle}</span></div>
                <span className="note-arrow" aria-hidden="true">↗</span>
              </div>
              <div className="image-caption"><span className="caption-dot"></span>{siteContent.hero.imageCaption}</div>
            </div>
          </div>
          <div className="hero-bottom container">
            <span>{siteContent.hero.bottomOne}</span>
            <span className="hero-bottom-line"></span>
            <span>{siteContent.hero.bottomTwo}</span>
            <span className="hero-bottom-line"></span>
            <span>{siteContent.hero.bottomThree}</span>
          </div>
        </section>

        <section className="intro-section section-pad" id="support">
          <div className="container">
            <div className="section-heading heading-split">
              <div>
                <p className="eyebrow"><span className="eyebrow-rule"></span>{siteContent.support.kicker}</p>
                <h2>{siteContent.support.title} <em>{siteContent.support.emphasis}</em></h2>
              </div>
              <p className="section-intro">{siteContent.support.description}</p>
            </div>

            <div className="services-grid">
              {siteContent.services.map((service) => (
                <article className="service-card" key={service.number}>
                  <div className="service-card-top"><span className="service-number">{service.number}</span><span className="service-tag">{service.tag}</span></div>
                  <div className="service-glyph" aria-hidden="true">✳</div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <div className="service-detail">{service.detail} <span aria-hidden="true">↗</span></div>
                </article>
              ))}
            </div>
            <div className="integrity-note">
              <span className="integrity-icon" aria-hidden="true">✳</span>
              <p><strong>{siteContent.support.integrityTitle}</strong> {siteContent.support.integrityDescription}</p>
              <a href="#approach" className="text-link">{siteContent.support.integrityLink} <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </section>

        <section className="approach-section section-pad" id="approach">
          <div className="container approach-layout">
            <div className="approach-heading">
              <p className="eyebrow eyebrow-light"><span className="eyebrow-rule"></span>{siteContent.approach.kicker}</p>
              <h2>{siteContent.approach.title}</h2>
              <p>{siteContent.approach.description}</p>
              <a className="button button-light" href="#contact">{siteContent.approach.cta} <span aria-hidden="true">↗</span></a>
            </div>
            <div className="steps-list">
              {siteContent.steps.map((step) => (
                <article className="approach-step" key={step.number}>
                  <span className="step-number">{step.number}</span>
                  <div><h3>{step.title}</h3><p>{step.description}</p></div>
                  <span className="step-marker" aria-hidden="true">↗</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="arms-section section-pad">
          <div className="container">
            <div className="section-heading heading-centered">
              <p className="eyebrow"><span className="eyebrow-rule"></span>{siteContent.arms.kicker}</p>
              <h2>{siteContent.arms.title}</h2>
              <p className="section-intro">{siteContent.arms.description}</p>
            </div>
            <div className="arms-grid">
              {siteContent.arms.paths.map((path) => (
                <article className={`arm-card arm-card-${path.style}`} key={path.number}>
                  <div className="arm-card-top"><span className="arm-index">{path.number}</span><span className="arm-status">{path.status}</span></div>
                  <div className="arm-symbol" aria-hidden="true">{path.symbol}</div>
                  <h3>{path.title}</h3>
                  <p>{path.description}</p>
                  <a href={path.href} className="text-link" {...(path.external ? { target: "_blank", rel: "noreferrer" } : {})}>
                    {path.linkText} <span aria-hidden="true">↗</span>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="faq-section section-pad" id="faq">
          <div className="container faq-layout">
            <div className="faq-heading">
              <p className="eyebrow"><span className="eyebrow-rule"></span>{siteContent.faq.kicker}</p>
              <h2>{siteContent.faq.title}</h2>
              <p>{siteContent.faq.description}</p>
              <a className="text-link" href="#contact">{siteContent.faq.cta} <span aria-hidden="true">↗</span></a>
            </div>
            <div className="faq-list">
              {siteContent.faqs.map((faq, index) => (
                <details className="faq-item" key={faq.question} open={index === 0}>
                  <summary><span>{faq.question}</span><span className="faq-plus" aria-hidden="true"></span></summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section section-pad" id="contact">
          <div className="container contact-grid">
            <div className="contact-copy">
              <p className="eyebrow eyebrow-light"><span className="eyebrow-rule"></span>{siteContent.contact.kicker}</p>
              <h2>{siteContent.contact.title}</h2>
              <p>{siteContent.contact.description}</p>
              <div className="contact-promise"><span aria-hidden="true">✳</span><span>{siteContent.contact.promise}</span></div>
            </div>
            <EnquiryForm />
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-main">
          <a className="brand brand-footer" href="#top" aria-label="360 Scholar Research & Learning home">
            <Image src="/360scholar-mark.svg" alt="" width={38} height={38} className="brand-mark" />
            <span className="brand-copy"><strong><span>{siteContent.brand.first}</span><span>{siteContent.brand.second}</span></strong><small>{siteContent.brand.division}</small></span>
          </a>
          <p>{siteContent.footer.tagline}</p>
          <a className="footer-publishing" href="https://www.360scholar.org/" target="_blank" rel="noreferrer">
            {siteContent.footer.publishingLink} <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} {siteContent.footer.copyright}</span>
          <span className="footer-note">{siteContent.footer.note}</span>
        </div>
      </footer>
    </>
  );
}
