/*
 * Site content and promotion settings live here for easy updates before the CMS is selected.
 * Layout and visual design are controlled in app/globals.css.
 */
export const siteContent = {
  seo: {
    title: "Academic Coaching for Ambitious Students | 360 Scholar",
    description:
      "One-to-one academic coaching, research guidance and focused feedback for students with ambitious goals across every discipline."
  },
  brand: {
    first: "360",
    second: "Scholar",
    division: "Research & learning"
  },
  theme: {
    ink: "#0b1f3a",
    brand: "#0b1f3a",
    teal: "#0e8a8a",
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
    cta: "Get started"
  },
  hero: {
    kicker: "ACADEMIC COACHING · EVERY DISCIPLINE",
    title: "Aim higher. Submit your strongest work.",
    description:
      "One-to-one academic coaching for ambitious students in every field. Turn your brief and rubric into a sharper plan, strengthen your analysis and submit work that shows what you can do—from coursework to dissertation.",
    primaryCta: "Get a tailored plan",
    secondaryCta: "Explore our support",
    ctaHint: "Share your subject, goal and deadline. We’ll help you plan the next best step.",
    pointOne: "Support across all disciplines",
    pointTwo: "Your work. Your achievement.",
    noteTitle: "Aiming higher.",
    noteSubtitle: "A clear plan for stronger work.",
    imageCaption: "Built around your goals, your pace and your voice.",
    imageAlt:
      "A researcher working thoughtfully at a laptop in a bright university library",
    bottomOne: "All subjects, all study levels",
    bottomTwo: "Guidance built around your rubric",
    bottomThree: "Your strongest work stays yours"
  },
  support: {
    kicker: "How we can help",
    title: "Focused guidance for the work",
    emphasis: "only you can do.",
    description:
      "Whether you’re tackling coursework, planning research or refining a dissertation, get focused coaching to understand expectations and improve your own work.",
    integrityTitle: "Ambitious goals. Your authorship.",
    integrityDescription:
      "We coach, guide and review; you remain the author of every idea and assessed submission.",
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
    title: "A stronger result starts with a clearer next step.",
    description:
      "Tell us your subject, goal and deadline. We’ll recommend focused coaching and feedback for your brief and rubric, whatever you’re studying.",
    promise: "A clear plan. Your work stays yours.",
    email: "support@360scholar.org"
  },
  form: {
    nameLabel: "Your name",
    namePlaceholder: "How should we address you?",
    emailLabel: "Email address",
    emailPlaceholder: "you@example.com",
    supportLabel: "What would you like help with?",
    supportPlaceholder: "Not sure yet",
    options: [
      "Coursework & assessment planning",
      "Research planning",
      "Methods or data analysis",
      "Academic writing feedback",
      "Thesis or dissertation coaching"
    ],
    messageLabel: "A little more about your goals",
    optionalLabel: "(optional)",
    messagePlaceholder: "What would you like to make progress on?",
    submit: "Get my tailored plan",
    privacyNote:
      "This opens your email app with your enquiry ready to send. The site does not store your details.",
    directEmailLabel: "Prefer email? Write to us directly."
  },
  footer: {
    tagline: "Ambitious goals. Clearer next steps.",
    publishingLink: "Explore scholarly publishing",
    copyright: "360 Scholar. All rights reserved.",
    note: "Research support that keeps your voice at the centre."
  },
  services: [
    {
      number: "01",
      tag: "START WITH YOUR BRIEF",
      title: "Coursework & assessment strategy",
      description:
        "Break down your brief and rubric, map a clear approach and focus your effort on the strongest parts of your argument.",
      detail: "Brief · criteria · plan"
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
      title: "Academic writing feedback",
      description:
        "Refine structure, clarity, referencing and flow through feedback that keeps your argument and voice your own.",
      detail: "Structure · style · references"
    },
    {
      number: "04",
      tag: "KEEP YOUR MOMENTUM",
      title: "Thesis & dissertation coaching",
      description:
        "Set achievable milestones, strengthen each chapter and build confidence from proposal to final draft—all while you remain the author.",
      detail: "Planning · chapter feedback · progress"
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
