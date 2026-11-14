import Image from "next/image";
import { EnquiryForm } from "../components/enquiry-form";
import { HeroPromiseStrip } from "../components/hero-promise-strip";
import { PromoBanner } from "../components/promo-banner";
import { SiteHeader } from "../components/site-header";
import { SupportFinder } from "../components/support-finder";
import { TestimonialForm } from "../components/testimonial-form";
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
          <HeroPromiseStrip items={[siteContent.hero.bottomOne, siteContent.hero.bottomTwo, siteContent.hero.bottomThree]} />
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

            <SupportFinder />

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
            <div className="support-catalog" aria-labelledby="catalog-title">
              <div className="catalog-intro">
                <span className="catalog-label">A broad starting point</span>
                <h3 id="catalog-title">Support by subject and study level</h3>
                <p>Tell us your exact programme and question. We’ll confirm whether the right subject expertise is available before you book.</p>
              </div>
              <div className="subject-groups">
                {siteContent.subjects.map((group) => (
                  <div className="subject-group" key={group.name}>
                    <h4>{group.name}</h4>
                    <p>{group.areas.join(" · ")}</p>
                  </div>
                ))}
              </div>
              <div className="study-levels">
                <strong>Study levels</strong>
                <p>{siteContent.studyLevels.join(" · ")}</p>
              </div>
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
            <aside className="coaching-example" aria-labelledby="example-title">
              <div className="example-heading">
                <span className="catalog-label">An illustrative example</span>
                <span className="example-stamp">COACHING, NOT A SUBMISSION</span>
              </div>
              <h3 id="example-title">Turning “critically evaluate” into a workable plan</h3>
              <div className="example-flow">
                <div><span>01 · Clarify</span><p>Identify what the question asks you to judge and which criteria matter.</p></div>
                <div><span>02 · Compare</span><p>Bring together evidence that supports different interpretations and note its limits.</p></div>
                <div><span>03 · Build your view</span><p>Choose a reasoned position, then write the argument in your own words and cite your sources.</p></div>
              </div>
              <p className="example-note">This generic example shows the kind of thinking a coaching session can support. It is not a client sample or text to submit.</p>
            </aside>
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

        <section className="pricing-section section-pad" id="pricing">
          <div className="container pricing-layout">
            <div className="pricing-copy">
              <p className="eyebrow"><span className="eyebrow-rule"></span>{siteContent.pricing.kicker}</p>
              <h2>{siteContent.pricing.title}</h2>
              <p>{siteContent.pricing.description}</p>
              <p className="pricing-quote-note">{siteContent.pricing.quoteNote}</p>
              <a className="text-link" href="#contact">Ask for a tailored quote <span aria-hidden="true">↗</span></a>
            </div>
            <div className="price-card">
              <div className="price-card-top"><span>ONE-TO-ONE ADVICE</span><span className="price-mark" aria-hidden="true">✳</span></div>
              <h3>{siteContent.pricing.freeOffer}</h3>
              <p className="price-timing">Available through {siteContent.pricing.freeThrough}</p>
              <div className="price-divider"></div>
              <p className="price-from">From {siteContent.pricing.paidFrom}</p>
              <p className="price-amount"><strong>{siteContent.pricing.rate}</strong><span>{siteContent.pricing.rateUnit}</span></p>
              <p className="refund-promise">{siteContent.pricing.refund}</p>
              <a className="button button-primary" href="#contact">Request a session <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </section>

        <section className="people-section section-pad" id="people">
          <div className="container people-layout">
            <div>
              <p className="eyebrow"><span className="eyebrow-rule"></span>People before promises</p>
              <h2>Know who you’ll speak with and what happens next.</h2>
              <p>First, your enquiry is handled by our sales manager. Before a paid academic session, ask us to confirm who would support you, their relevant subject experience, the agreed scope and the price. We’ll check the fit before you decide.</p>
              <a className="text-link" href="#contact">Ask about subject fit <span aria-hidden="true">↗</span></a>
            </div>
            <article className="manager-card">
              <span className="manager-initials" aria-hidden="true">MA</span>
              <span className="manager-role">YOUR FIRST POINT OF CONTACT</span>
              <h3>Micheal Alabi</h3>
              <p>Sales Manager</p>
              <a href="https://wa.me/447535655738" target="_blank" rel="noreferrer">Message Micheal on WhatsApp <span aria-hidden="true">↗</span></a>
              <small>Subject-specialist fit is confirmed for each enquiry; no academic credentials are implied by this contact role.</small>
            </article>
          </div>
        </section>

        <section className="feedback-section section-pad" id="feedback">
          <div className="container feedback-layout">
            <div className="feedback-copy">
              <p className="eyebrow"><span className="eyebrow-rule"></span>Student feedback</p>
              <h2>Tell us what helped.</h2>
              <p>Share a written review, rate the person who supported you and tell us your study area. Feedback opens as a WhatsApp draft for you to review and send.</p>
              <div className="feedback-note">
                <strong>Your choice matters.</strong>
                <span>We never publish a review automatically. You can leave publication permission unticked, and we’ll ask before using identifying details.</span>
              </div>
              <p className="video-note"><strong>Prefer video?</strong> Open WhatsApp from the form, then attach your video before sending. Please keep names, student IDs and assessment documents out of the recording.</p>
            </div>
            <TestimonialForm />
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
              <div className="contact-manager">
                <span>Speak with</span>
                <strong>Micheal Alabi <small>· Sales Manager</small></strong>
                <a href="https://wa.me/447535655738" target="_blank" rel="noreferrer">WhatsApp 360 Scholar <span aria-hidden="true">↗</span></a>
                <a className="contact-feedback-link" href="#feedback">Already worked with us? Rate your support <span aria-hidden="true">↗</span></a>
              </div>
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
        <div className="container footer-chat-privacy">
          Live chat is provided by Tidio. Information you share in chat and related interaction data may be processed by Tidio.{" "}
          <a href="https://www.tidio.com/privacy-policy/" target="_blank" rel="noreferrer">Read Tidio&apos;s privacy policy</a>.
        </div>
      </footer>
    </>
  );
}
