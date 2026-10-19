/*
 * Site content and promotion settings live here for easy updates before the CMS is selected.
 * Layout and visual design are controlled in app/globals.css.
 */
export const siteContent = {
  seo: {
    title: "Research & Learning Support | 360 Scholar",
    description:
      "Thoughtful, one-to-one academic guidance for every stage of your research journey."
  },
  brand: {
    first: "360",
    second: "Scholar",
    division: "Research & learning"
  },
  theme: {
    ink: "#173a3a",
    brand: "#183a3a",
    teal: "#2f7770",
    accent: "#d5ae66",
    paper: "#f6f4ed",
    white: "#ffffff"
  },
  promo: {
    enabled: false,
    label: "A little something to get started",
    message: "Save 15% on your first research consultation.",
    code: "FIRST15",
    linkText: "Enquire today",
    endDate: ""
  },
  nav: {
    support: "Our support",
    approach: "How it works",
    faq: "FAQs",
    publishing: "Publishing",
    cta: "Talk to an advisor"
  },
  hero: {
    kicker: "360 SCHOLAR · RESEARCH & LEARNING",
    title: "Good research begins with a clear next step.",
    description:
      "Thoughtful, one-to-one guidance for every stage of your academic journey—from shaping a research question to making sense of your findings and refining your writing.",
    primaryCta: "Start a conversation",
    secondaryCta: "Explore our support",
    pointOne: "Guidance that puts you first",
    pointTwo: "Your work stays yours",
    noteTitle: "Clear thinking.",
    noteSubtitle: "Confident progress.",
    imageCaption: "Built around your goals, your pace and your voice.",
    imageAlt:
      "A researcher working thoughtfully at a laptop in a bright university library",
    bottomOne: "Thoughtful academic support",
    bottomTwo: "For every stage of the research journey",
    bottomThree: "Online, wherever you study"
  },
  support: {
    kicker: "How we can help",
    title: "Focused guidance for the work",
    emphasis: "only you can do.",
    description:
      "From an early idea to a final draft, get practical support that helps you move forward with more clarity and confidence.",
    integrityTitle: "Your research. Your authorship.",
    integrityDescription:
      "We coach, guide and review; you remain the author of your ideas and assessed work.",
    integrityLink: "Our approach"
  },
  approach: {
    kicker: "A clearer way forward",
    title: "A good plan makes the next step feel possible.",
    description:
      "Focused sessions turn your questions into a practical path forward, with guidance you can put to work straight away.",
    cta: "Find the right support"
  },
  arms: {
    kicker: "One scholarly community",
    title: "Two connected ways to move knowledge forward.",
    description:
      "Whether you are developing your research or preparing work for publication, 360 Scholar is here for the next step.",
    paths: [
      {
        number: "01",
        status: "Research & learning",
        symbol: "↗",
        title: "Research support",
        description:
          "Build your skills, strengthen your thinking and make steady progress on the work that matters to you.",
        linkText: "Explore support",
        href: "#support",
        style: "active",
        external: false
      },
      {
        number: "02",
        status: "Scholarly publishing",
        symbol: "⌁",
        title: "Publishing platform",
        description:
          "Explore journals, submission guidance and open calls through the 360 Scholar publishing platform.",
        linkText: "Visit 360 Scholar",
        href: "https://www.360scholar.org/",
        style: "publishing",
        external: true
      }
    ]
  },
  faq: {
    kicker: "Good to know",
    title: "A few helpful answers.",
    description:
      "Still have a question? Tell us what you are working on and we will help you find a sensible next step.",
    cta: "Get in touch"
  },
  contact: {
    kicker: "Let's talk about your goals",
    title: "One good conversation can change your direction.",
    description:
      "Share a little about the stage you are at. We will help you identify the kind of support that could make a difference.",
    promise: "No pressure. Just a clear next step.",
    email: "support@360scholar.org"
  },
  form: {
    nameLabel: "Your name",
    namePlaceholder: "How should we address you?",
    emailLabel: "Email address",
    emailPlaceholder: "you@example.com",
    supportLabel: "What would you like help with?",
    supportPlaceholder: "Select an area",
    options: [
      "Research planning",
      "Methods or data analysis",
      "Writing or editing guidance",
      "Thesis or dissertation coaching",
      "Something else"
    ],
    messageLabel: "A little more about your goals",
    optionalLabel: "(optional)",
    messagePlaceholder: "What would you like to make progress on?",
    submit: "Send your enquiry",
    privacyNote:
      "Your email app will open with your enquiry ready to send. This preview does not store form data."
  },
  footer: {
    tagline: "Thoughtful guidance for the next generation of research.",
    publishingLink: "Explore scholarly publishing",
    copyright: "360 Scholar. All rights reserved.",
    note: "Research support that keeps your voice at the centre."
  },
  services: [
    {
      number: "01",
      tag: "START WITH CLARITY",
      title: "Research direction",
      description:
        "Shape a focused topic, a workable research question and a plan that feels manageable.",
      detail: "Topic · questions · scope"
    },
    {
      number: "02",
      tag: "MAKE INFORMED CHOICES",
      title: "Methods & analysis",
      description:
        "Understand your options, work through your approach and build confidence interpreting your data.",
      detail: "Methodology · data · interpretation"
    },
    {
      number: "03",
      tag: "STRENGTHEN YOUR WRITING",
      title: "Academic writing & editing",
      description:
        "Improve structure, clarity, referencing and flow while keeping your own argument and voice.",
      detail: "Structure · style · references"
    },
    {
      number: "04",
      tag: "KEEP YOUR MOMENTUM",
      title: "Thesis & dissertation coaching",
      description:
        "Break a large project into achievable milestones and stay focused through each stage.",
      detail: "Planning · feedback · progress"
    }
  ],
  steps: [
    {
      number: "01",
      title: "Tell us where you are",
      description:
        "Share your goals, questions and any deadlines. We will start by listening."
    },
    {
      number: "02",
      title: "Agree a useful plan",
      description:
        "We will identify a focused session or support plan shaped around your needs."
    },
    {
      number: "03",
      title: "Move forward with clarity",
      description:
        "Leave with practical next steps you can apply to your own research."
    }
  ],
  faqs: [
    {
      question: "Who is this support for?",
      answer:
        "Whether you are shaping a course project, postgraduate dissertation or doctoral research, we can help you identify a focused next step. Share your stage and goals, and we will confirm whether our support is a fit."
    },
    {
      question: "Can you complete my assignment or thesis for me?",
      answer:
        "No. We offer coaching, research guidance and editing support. You remain responsible for the ideas, decisions and assessed work you submit, in line with your institution's academic integrity rules."
    },
    {
      question: "Can I get help with a project that is already underway?",
      answer:
        "Yes. Bring the stage you are at and the questions you need to resolve. Together, we can identify practical next steps."
    },
    {
      question: "How do online sessions work?",
      answer:
        "Sessions are arranged around your goals and availability. Get in touch to talk through the format, timing and level of support you need."
    }
  ]
} as const;
