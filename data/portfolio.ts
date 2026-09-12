export const profile = {
  name: "Tariq Ali",
  role: "Full-Stack Software Engineer",
  headline:
    "I build reliable, scalable web products with React, Next.js, TypeScript, Node.js and AWS.",
  intro:
    "Full-Stack Software Engineer with 8+ years of experience delivering SaaS, ticketing, e-commerce, fintech, healthcare, CMS and AI-enabled products for international teams. I work across product engineering, architecture, APIs, cloud services, testing and technical leadership.",
  location: "Lahore, Pakistan",
  availability: "Available immediately for remote roles; open to relocation with sponsorship",
  email: "tariqali99.ta@gmail.com",
  phoneDisplay: "+92 310 4832079",
  whatsapp: "https://wa.me/923104832079",
  gmail:
    "https://mail.google.com/mail/?view=cm&fs=1&to=tariqali99.ta@gmail.com&su=Opportunity%20for%20Tariq%20Ali",
  linkedin: "https://www.linkedin.com/in/tariq-ali-116678156/",
  github: "https://github.com/Tariqali13",
  resume: "/Tariq-Ali-Resume.pdf",
};

export const stats = [
  { value: "8+", label: "Years in software engineering" },
  { value: "10", label: "Engineers led on a product team" },
  { value: "80%", label: "Approx. Vonza platform development led" },
  { value: "Global", label: "Remote client & team experience" },
];

export const skillGroups = [
  {
    title: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Redux",
      "Zustand",
      "React Query",
      "HTML5",
      "CSS3",
      "Material UI",
    ],
  },
  {
    title: "Backend & APIs",
    items: [
      "Node.js",
      "Nest.js",
      "Express.js",
      "REST APIs",
      "GraphQL",
      "Apollo",
      "Microservices",
      "Authentication",
      "Stripe",
      "PayPal",
    ],
  },
  {
    title: "Cloud & Data",
    items: [
      "AWS S3",
      "AWS Lambda",
      "EC2",
      "CloudFront",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Redis",
      "Docker",
    ],
  },
  {
    title: "Quality & Delivery",
    items: [
      "Jest",
      "React Testing Library",
      "Enzyme",
      "Nightwatch",
      "CI/CD",
      "GitHub Actions",
      "GitLab CI",
      "Agile",
      "Code Review",
      "Prometheus",
      "Grafana",
      "WCAG Accessibility",
    ],
  },
  { title: "AI-assisted Development", items: ["Codex", "Claude"] },
];

export const projects = [
  {
    slug: "paciolan",
    name: "Paciolan",
    eyebrow: "Enterprise ticketing",
    summary:
      "Production engineering for a large-scale event-ticketing ecosystem, spanning customer-facing experiences, APIs, service integrations and automated testing.",
    impact: [
      "Built installment payment schedules across cart, order and checkout, with a production rollout to seven Division-I athletic programs.",
      "Shipped all-included pricing used during onsales of approximately 3,000 tickets in 15 minutes, with 4,000+ users queued and no reported issues.",
      "Migrated order confirmation to GraphQL and delivered add-on purchasing, accessibility improvements and automated regression coverage.",
    ],
    tech: ["React", "Next.js", "TypeScript", "Node.js", "GraphQL", "AWS", "Nightwatch", "Prometheus", "Grafana"],
    featured: true,
  },
  {
    slug: "vonza",
    name: "Vonza",
    eyebrow: "All-in-one SaaS",
    summary:
      "A multi-module platform for online courses, stores, websites, memberships, funnels and marketing - built while working closely with company leadership.",
    impact: [
      "Led a team of up to 10 engineers.",
      "Owned architecture and a substantial portion of the production platform.",
      "Built high-impact capabilities including subdomain routing, website building, payments and security middleware.",
    ],
    tech: ["React", "Next.js", "Node.js", "MongoDB", "AWS", "Stripe"],
    featured: true,
  },
  {
    slug: "photobank",
    name: "Photobank / Face Search",
    eyebrow: "AI-enabled media platform",
    summary:
      "End-to-end image platform using cloud services to organize photography, generate thumbnails and enable face-based image discovery.",
    impact: [
      "Delivered the application in a two-month timeframe.",
      "Integrated AWS Rekognition for face-search across S3-hosted image galleries.",
      "Built Lambda processing for thumbnails and photographer-specific watermarks.",
    ],
    tech: ["Next.js", "Node.js", "AWS S3", "AWS Lambda", "AWS Rekognition", "Stripe"],
    featured: true,
  },
  {
    slug: "shopdesk",
    name: "Shopdesk",
    eyebrow: "Inventory & point of sale",
    summary:
      "Inventory and sales software with product management, offline workflows, barcode support and complex sales calculations.",
    impact: [
      "Led development of core inventory and sales workflows.",
      "Refactored existing modules for improved maintainability and performance.",
      "Worked with engineering leadership on offline sales and barcode capabilities.",
    ],
    tech: ["React", "Node.js", "SQL", "Offline-first", "Barcode"],
    featured: true,
  },
  {
    slug: "baseline",
    name: "Baseline",
    eyebrow: "Trading-style product",
    summary:
      "A shares-style marketplace built around artists, external music data and scheduled back-end processing.",
    impact: [
      "Integrated external artist data from music platforms.",
      "Built Node.js scheduling utilities for frequently refreshed values.",
      "Presented progress directly to clients and led engineers across parallel projects.",
    ],
    tech: ["React", "Next.js", "Node.js", "MongoDB", "AWS", "Stripe"],
    featured: false,
  },
  {
    slug: "freelance-platforms",
    name: "International Client Platforms",
    eyebrow: "Independent full-stack work",
    summary:
      "CMS, booking, real-estate and business-management applications delivered end to end for international clients.",
    impact: [
      "Owned discovery, architecture, development, deployment and ongoing support.",
      "Built booking, content, hiring, course and real-estate management workflows.",
      "Maintained long-term client communication through demos and iterative delivery.",
    ],
    tech: ["React", "Next.js", "Node.js", "CMS", "Payments", "Third-party APIs"],
    featured: false,
  },
];

export const experience = [
  {
    role: "Full-Stack Software Engineer",
    company: "Paciolan (via FullStack Labs)",
    location: "Remote / United States",
    dates: "May 2022 - Sep 2026",
    bullets: [
      "Built RSD Payment Schedules across cart, order, checkout and confirmation for season-ticket donations; launched to seven Division-I athletic programs and executed the production feature-flag rollout.",
      "Delivered all-included pricing across event pages, seat maps and mini-cart, used during onsales of approximately 3,000 tickets in 15 minutes with 4,000+ users queued and no reported issues.",
      "Migrated order confirmation from direct REST calls to GraphQL, authored fundraising resolvers and built add-on purchasing with validation, fee breakdowns and email handling.",
      "Resolved payment defects involving timezones, installment amounts and donation allocation. Added Prometheus metrics and Grafana alerts, upgraded Node.js 20 to 24, and remediated an SSRF/input-injection vector.",
      "Delivered WCAG/ADA accessibility fixes and GA4 purchase analytics; integrated Nightwatch/Selenium regression tests into deployment pipelines.",
      "Worked across 20+ repositories, extracted shared payment utilities, consolidated translations across four frontends, and coordinated production deployments and cross-team code reviews.",
    ],
    tech: ["React", "Next.js", "TypeScript", "Node.js", "AWS", "GraphQL", "Jest"],
  },
  {
    role: "Frontend Engineer - Contract",
    company: "Supercoder / Learning Crew",
    location: "Remote / South Korea",
    dates: "Jan 2026 - March 2026",
    bullets: [
      "Introduced React Query patterns and improved front-end architecture for a React-based product.",
      "Supported Swagger-oriented API documentation and engineering handoff through codebase cleanup and documentation.",
    ],
    tech: ["React", "React Query", "Swagger", "REST APIs"],
  },
  {
    role: "Frontend Developer - Contract",
    company: "Supercoder / Hooaah",
    location: "Remote / South Korea",
    dates: "Nov 2023 - Jul 2024",
    bullets: [
      "Built and enhanced reusable React modules and integrated back-end functionality into product experiences.",
      "Improved component reuse and code organization for continued feature development.",
    ],
    tech: ["React", "JavaScript", "REST APIs"],
  },
  {
    role: "Full-Stack Engineer",
    company: "Fiverr - Independent Client Work",
    location: "Remote",
    dates: "Dec 2018 - Apr 2023",
    bullets: [
      "Delivered end-to-end applications for international clients, covering architecture, development, deployment, CMS, integrations and support.",
      "Built photography, solar/electrical business and real-estate platforms with booking, content and administration workflows.",
    ],
    tech: ["React", "Next.js", "Node.js", "CMS", "Payments"],
  },
  {
    role: "Full-Stack Engineer",
    company: "ShopDev",
    location: "Lahore, Pakistan",
    dates: "Oct 2021 - Apr 2022",
    bullets: [
      "Led Shopdesk inventory and sales workflows including calculations, barcode functionality and offline sales.",
      "Built customized React extensions for Amyris and integrated them with Shopify-based applications.",
    ],
    tech: ["React", "Node.js", "SQL", "Shopify"],
  },
  {
    role: "Senior Full-Stack Engineer",
    company: "Renesis Tech",
    location: "Lahore, Pakistan",
    dates: "Jul 2021 - Aug 2021",
    bullets: [
      "Delivered Photobank end to end using React/Next.js, Node.js and AWS.",
      "Implemented Rekognition face search, Lambda-based image processing and a reusable Stripe microservice.",
    ],
    tech: ["Next.js", "Node.js", "AWS", "Rekognition", "Stripe"],
  },
  {
    role: "Senior Full-Stack Engineer / Team Lead",
    company: "Innovation Insight",
    location: "Lahore, Pakistan",
    dates: "Oct 2019 - Jul 2021",
    bullets: [
      "Led major development of Vonza and a team of up to 10 engineers.",
      "Worked directly with the CEO/CTO on architecture, subdomain routing, a website builder, payments, security and scalability.",
      "Built core features for YayMaker including chat, Google Maps and supporting services.",
    ],
    tech: ["React", "Next.js", "Node.js", "AWS", "Stripe", "Google Maps"],
  },
  {
    role: "Senior Full-Stack Engineer",
    company: "RSglowtech",
    location: "Lahore, Pakistan",
    dates: "Dec 2020 - May 2021",
    bullets: [
      "Led teams of 6–8 across healthcare and trading-style products.",
      "Integrated third-party music/data APIs and built scheduled Node.js processing utilities.",
    ],
    tech: ["React", "Next.js", "Node.js", "MongoDB", "APIs"],
  },
  {
    role: "Full-Stack Engineer",
    company: "Vvork Cloud Technologies",
    location: "Lahore, Pakistan",
    dates: "Jan 2018 - Dec 2018",
    bullets: [
      "Developed a student-management portal, delivered new features and resolved complex defects.",
      "Collaborated with solution architects to align technical architecture with business requirements.",
    ],
    tech: ["JavaScript", "React", "Node.js"],
  },
];

export const education = {
  degree: "Bachelor of Science in Computer Science",
  school: "NCBA&E",
  location: "Lahore, Pakistan",
  year: "2022",
};

export const certifications = [
  "Microsoft Exam 480 - Programming in HTML5 with JavaScript and CSS3 (2019)",
  "Full-Stack Engineering - Mangtas (2023)",
  "English Speaking - Emmersion (2023)",
];
