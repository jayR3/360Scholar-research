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
    enabled: true,
    label: "1:1 advice sessions",
    freeUntil: "2026-12-01T00:00:00Z",
    freeDurationMinutes: 15,
    freeMessage: "Free {duration}-minute one-to-one advice sessions are available through {date}.",
    freeLinkText: "Request your free session",
    hourlyRateGBP: 10,
    paidMessage:
      "From {date}, one-to-one advice sessions start at £{rate} per hour. If you find no value in a paid conversation, we promise an immediate 50% refund.",
    paidLinkText: "Request a session"
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
      "One-to-one academic coaching for ambitious students in every field. Turn your brief and rubric into a sharper plan, strengthen your analysis and submit work that shows what you can do—from coursework to dissertation. We also help you understand AI-use rules, use sources accurately, catch spelling errors and move beyond description into critical analysis.",
    primaryCta: "Get a tailored plan",
    secondaryCta: "Explore our support",
    ctaHint: "Share your subject, goal and deadline. We’ll help you plan the next best step.",
    pointOne: "10+ years supporting academic progress",
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
    emphasis: "that stays yours.",
    description:
      "From interpreting briefs and moving beyond description to checking spelling, using sources accurately and understanding your institution’s rules on AI and attribution, we help you strengthen the work you author.",
    integrityTitle: "Academic integrity comes first.",
    integrityDescription:
      "We help you understand and follow your institution’s rules on AI tools, collaboration, attribution and editing. You remain the author of every idea and assessed submission.",
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
      "Tell us what you’re studying and where you’re stuck—source use, AI rules, spelling or critical analysis. We’ll suggest a practical next step for your own work.",
    promise: "Over a decade of support. Your progress and academic integrity come first.",
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
      "Thesis or dissertation coaching",
      "1:1 advice session request"
    ],
    messageLabel: "A little more about your goals",
    optionalLabel: "(optional)",
    messagePlaceholder: "What would you like to make progress on?",
    submit: "Get my tailored plan",
    privacyNote:
      "Your enquiry form does not create an account or store details on this site. It prepares an email that is sent only if you choose. Chat is provided by Tidio; see the privacy notice below. Session requests are confirmed by email, not booked automatically.",
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
        "Break down your brief and rubric, map your work to the marking criteria and plan a clear argument with accurate source use.",
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
        "Move beyond description into critical analysis. Improve structure, clarity, spelling and citation accuracy while keeping your argument and voice your own.",
      detail: "Analysis · spelling · references"
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
      title: "Get a clear recommendation",
      description:
        "We’ll suggest a focused session or support option for your goals. You choose whether to proceed."
    },
    {
      number: "03",
      title: "Leave with clear next steps",
      description:
        "Take away practical actions you can apply to your own research or assessment."
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
        "Request a free 15-minute one-to-one advice session through 30 November 2026. After that, sessions start at £10 per hour. We’ll confirm an available time by email. If you find no value in a paid conversation, we promise an immediate 50% refund."
    },
    {
      question: "I’m worried about AI or plagiarism offences. Can you help?",
      answer:
        "Yes. We can help you understand your institution’s AI and source-use rules, cite and paraphrase carefully, and strengthen your own analysis. We cannot promise a detector outcome or disguise copied or prohibited AI-generated work."
    },
    {
      question: "Can you guarantee I will pass or get a particular grade?",
      answer:
        "No one can guarantee a mark: your institution assesses your work. We can help you understand the criteria, improve your approach and catch avoidable issues, while you remain the author of what you submit."
    }
  ]
} as const;

