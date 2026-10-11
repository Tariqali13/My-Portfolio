export const profile = {
  name: "Tariq Ali",
  role: "Senior Full-Stack Software Engineer",
  headline: "I build the parts of a product that have to work under pressure.",
  intro:
    "8+ years building SaaS, ticketing, e-commerce, healthcare and AI products for teams in the US, Europe and Asia. Most recently: checkout, payments and onsale features for a ticketing platform used by Division I athletic programs.",
  location: "Lahore, Pakistan",
  availability: "Available now: remote or relocation",
  email: "tariqali99.ta@gmail.com",
  phoneDisplay: "+92 310 4832079",
  whatsapp: "https://wa.me/923104832079",
  gmail:
    "https://mail.google.com/mail/?view=cm&fs=1&to=tariqali99.ta@gmail.com&su=Opportunity%20for%20Tariq%20Ali",
  linkedin: "https://www.linkedin.com/in/tariq-ali-116678156/",
  github: "https://github.com/Tariqali13",
  resume: "/Tariq-Ali-Resume.pdf",
};

/** Fields printed on the hero ticket. */
export const ticketFields = [
  { label: "Experience", value: "8+ years" },
  { label: "Led", value: "Teams of up to 10" },
  { label: "Based in", value: "Lahore, Pakistan" },
  { label: "Works", value: "Remote or relocation" },
];

export type Shot = {
  src: string;
  alt: string;
  /** Show a narrow screenshot at this width (px), centred, instead of stretching it to fill the frame. */
  width?: number;
  /** Fill colour around a narrow screenshot, matched to the page's own background. */
  background?: string;
};

export type LiveProject = {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  points: string[];
  results?: { value: string; label: string }[];
  tech: string[];
  demo: string;
  demoHost: string;
  code: string;
  shot: Shot;
};

/** Open-source projects with public code and a running demo. */
export const liveProjects: LiveProject[] = [
  {
    slug: "onsale",
    name: "Onsale",
    tagline: "A ticket onsale engine for when thousands of people want the same seats",
    summary:
      "A virtual waiting room, all-or-nothing seat holds and idempotent checkout, rebuilt in the open from the problems I worked on in production ticketing.",
    points: [
      "Redis + Lua waiting room admits buyers in arrival order at a fixed rate, so the seat map and payments only see as many shoppers as they can serve.",
      "Picking four seats holds all four or none in one atomic step; holds expire on their own.",
      "Checkout is idempotent: a double-click or dropped connection replays the first result instead of charging twice. A Postgres constraint makes selling a seat twice impossible.",
    ],
    results: [
      { value: "696/696", label: "seats sold in ~20 s to 2,000 simulated buyers" },
      { value: "0", label: "seats sold twice, audited in Postgres after every run" },
      { value: "0", label: "unexpected errors in 24,251 requests" },
    ],
    tech: ["TypeScript", "Fastify", "Redis + Lua", "PostgreSQL", "React", "k6", "Prometheus", "Grafana"],
    demo: "https://onsalerender.netlify.app",
    demoHost: "onsalerender.netlify.app",
    code: "https://github.com/Tariqali13/onsale",
    shot: { src: "/work/onsale-seat-map.webp", alt: "Onsale seat map with four seats held and a five-minute hold timer" },
  },
  {
    slug: "voicebrief",
    name: "VoiceBrief",
    tagline: "Meeting notes you can check, with every item linked to where it was said",
    summary:
      "Record a meeting and get decisions, action items and open questions. Ask questions across all your meetings and get answers with a citation for every claim.",
    points: [
      "Every note carries evidence: the model cites transcript lines, and a grounding pass drops anything that cites lines that don't exist or names an owner who never spoke.",
      "Hybrid retrieval (keyword + vector, fused by rank) answers questions only from cited excerpts, or says plainly that something wasn't discussed.",
      "Transcripts are treated as data, not instructions, and an evaluation harness scores the pipeline against hand-labelled meetings.",
    ],
    tech: ["Next.js 16", "TypeScript", "Whisper", "LLM structured output", "Embeddings / RAG", "pgvector"],
    demo: "https://voicebrief.onrender.com",
    demoHost: "voicebrief.onrender.com",
    code: "https://github.com/Tariqali13/voicebrief",
    shot: { src: "/work/voicebrief-meeting.webp", alt: "VoiceBrief meeting notes beside a ruled transcript with the cited line highlighted" },
  },
  {
    slug: "mediavault",
    name: "MediaVault",
    tagline: "A shared media library for creative teams, built as a real multi-tenant SaaS",
    summary:
      "Teams upload pictures, video and PDFs straight to storage, find them by title or tag, collect selects and send clients expiring links.",
    points: [
      "Each team's data is isolated by Postgres row-level security, so a careless query returns nothing rather than another team's files.",
      "Uploads go straight from the browser to object storage with signed policies; a background worker checks each file really is what it claims and renders thumbnails.",
      "One role and permission table is shared by the API and the UI, and a test spells out every role and action pair.",
    ],
    tech: ["TypeScript", "Node.js", "PostgreSQL RLS", "S3 / MinIO", "Background jobs", "React"],
    demo: "https://media-vault-tariqali.netlify.app",
    demoHost: "media-vault-tariqali.netlify.app",
    code: "https://github.com/Tariqali13/MediaVault",
    shot: { src: "/work/mediavault-library.webp", alt: "MediaVault library showing a justified gallery of a studio's pictures" },
  },
];

export type ClientProject = {
  slug: string;
  name: string;
  kind: string;
  role: string;
  summary: string;
  points: string[];
  tech: string[];
  link?: { href: string; label: string };
  /** Full-page screenshot, scrolled inside a browser frame. */
  page?: Shot;
};

/** Production and client work. Code is private; screenshots and descriptions only. */
export const clientWork: ClientProject[] = [
  {
    slug: "paciolan",
    name: "Paciolan",
    kind: "Enterprise ticketing",
    role: "Full-stack engineer, FullStack Labs, 2022–2026",
    summary:
      "Checkout, payments and onsale features for a ticketing platform behind the box offices of US college athletics and live events.",
    points: [
      "Built payment schedules for season-ticket donations across cart, order, checkout and confirmation; launched to seven Division I athletic programs behind a feature flag I rolled out.",
      "Shipped all-included ticket, donation and fee pricing across event pages, seat maps and mini-cart, used in onsales of ~3,000 tickets in 15 minutes with 4,000+ people queued and no reported issues.",
      "Moved order confirmation from REST to GraphQL, added Prometheus metrics and Grafana alerts, upgraded Node.js 20 to 24, and closed an SSRF/input-injection hole.",
    ],
    tech: ["React", "Next.js", "TypeScript", "Node.js", "GraphQL", "AWS", "Nightwatch", "Prometheus", "Grafana"],
    link: { href: "https://www.paciolan.com", label: "paciolan.com" },
    page: { src: "/work/paciolan-full.webp", alt: "Paciolan home page: integrated ticketing, fundraising and marketing for college athletics, performing arts and arenas" },
  },
  {
    slug: "vonza",
    name: "Vonza",
    kind: "All-in-one creator platform",
    role: "Senior engineer and team lead, Innovation Insight, 2019–2021",
    summary:
      "Website builder, funnels, scheduling, online courses and e-commerce in one platform for creators and small businesses.",
    points: [
      "Designed the architecture from scratch and wrote roughly 80% of the first production platform.",
      "Led up to 10 engineers and worked with the CEO and CTO on subdomain routing, payments and scaling.",
      "Added payment logging and recovery, reCAPTCHA and security middleware.",
    ],
    tech: ["React", "Next.js", "Node.js", "MongoDB", "AWS", "Stripe"],
    link: { href: "https://www.vonza.com", label: "vonza.com" },
    page: { src: "/work/vonza-full.webp", alt: "Vonza marketing site: the easiest way for creators to monetize their business" },
  },
  {
    slug: "yaymaker",
    name: "YayMaker",
    kind: "Events marketplace",
    role: "Senior engineer, Innovation Insight",
    summary: "Corporate, private and public event booking from the team behind Paint Nite.",
    points: [
      "Built real-time chat and Google Maps features and the services behind them.",
      "Contributed to an online fitness streaming product with music during video calls.",
    ],
    tech: ["React", "Node.js", "Real-time chat", "Google Maps"],
    link: { href: "https://www.yaymaker.com", label: "yaymaker.com" },
    page: { src: "/work/yay-full.webp", alt: "YayMaker home page: simple and stress-free event planning" },
  },
  {
    slug: "alisa",
    name: "Alisa Schenk Photography",
    kind: "Photography and doula business",
    role: "Freelance, end to end",
    summary: "Portfolio, online booking, contact workflows and a blog for a birth photographer and doula.",
    points: ["Designed, built, deployed and supported the site, including the booking and content tools the owner uses herself."],
    tech: ["React", "CMS", "Booking", "Netlify"],
    link: { href: "https://alisaschenkbirth.com", label: "alisaschenkbirth.com" },
    page: { src: "/work/alisa-full.webp", alt: "Alisa Schenk Photography home page with a carousel of family photos" },
  },
  {
    slug: "hs-electric",
    name: "H&S Electric & Solar",
    kind: "Electrical and solar contractor",
    role: "Freelance, end to end",
    summary: "Marketing site plus the internal tools the company runs on: employees, hiring, training courses and content.",
    points: ["Built employee, hiring, course and content management behind a staff login."],
    tech: ["React", "Node.js", "CMS"],
    page: { src: "/work/hd-full.webp", alt: "H&S Electric and Solar home page with a residential solar installation" },
  },
  {
    slug: "tiffany",
    name: "Tiffany Hinkson Photography",
    kind: "Family photography",
    role: "Freelance, end to end",
    summary: "Portfolio, pricing and booking for a family photographer.",
    points: ["Built the portfolio, pricing and booking pages and handed over content editing to the owner."],
    tech: ["React", "CMS"],
    page: { src: "/work/tiffany-full.webp", alt: "Tiffany Hinkson Photography home page" },
  },
  {
    slug: "photobank",
    name: "Photobank",
    kind: "Face search for event photos",
    role: "Senior engineer, Renesis Tech, 2021",
    summary:
      "Runners and riders upload a selfie and find every photo of themselves across an event's galleries.",
    points: [
      "Delivered the product end to end in two months.",
      "AWS Rekognition face search across S3 galleries; Lambda thumbnails with per-photographer watermarks.",
      "Designed a reusable Stripe payments microservice used across company projects.",
    ],
    tech: ["Next.js", "Node.js", "AWS Rekognition", "S3", "Lambda", "Stripe"],
    // The product has since been retired; this is the original screenshot.
    page: {
      src: "/work/photobank-full.webp",
      alt: "Photobank home page: find photos that match your face, with galleries from recent events",
      width: 300,
      background: "#080e2e",
    },
  },
];

export const skillGroups = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Redux", "Zustand", "React Query", "Tailwind CSS", "Material UI", "Accessibility (WCAG)"],
  },
  {
    title: "Backend and APIs",
    items: ["Node.js", "NestJS", "Express", "Fastify", "GraphQL / Apollo", "REST", "Microservices", "Auth", "Stripe", "PayPal"],
  },
  {
    title: "Data and cloud",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "AWS S3", "Lambda", "EC2", "CloudFront", "Rekognition", "Docker"],
  },
  {
    title: "Quality and delivery",
    items: ["Jest", "Vitest", "React Testing Library", "Nightwatch", "Selenium", "k6", "GitHub Actions", "GitLab CI", "Prometheus", "Grafana"],
  },
  {
    title: "AI",
    items: ["OpenAI and Claude APIs", "Structured output", "RAG / embeddings", "Evaluation harnesses", "Claude Code", "Codex", "Cursor"],
  },
];

export const experience = [
  {
    role: "Full-Stack Software Engineer",
    company: "FullStack Labs (client: Paciolan)",
    location: "Remote, United States",
    dates: "May 2022 – Oct 2026",
    bullets: [
      "Built payment schedules for season-ticket donations across cart, order, checkout and confirmation; launched to seven Division I athletic programs and ran the production feature-flag rollout.",
      "Shipped all-included ticket, donation and fee pricing across event pages, seat maps and mini-cart, used during onsales of about 3,000 tickets in 15 minutes with 4,000+ users queued and no reported issues.",
      "Migrated order confirmation to GraphQL, wrote fundraising resolvers, and delivered add-on purchasing with quantity validation, item comments, fee breakdowns and confirmation emails.",
      "Fixed installment-date, payment-amount and donation-allocation defects; added Prometheus metrics and Grafana alerts, upgraded Node.js 20 to 24, and remediated an SSRF/input-injection vector.",
      "Delivered WCAG/ADA accessibility fixes and GA4 purchase analytics; built Nightwatch/Selenium regression tests in CI/CD.",
      "Worked across 20+ repositories, extracted shared payment utilities, consolidated translations across four frontends, and coordinated production deployments and code reviews.",
      "Created reusable Claude skills for project setup, merge requests, code integration, repository research and implementation planning.",
    ],
    tech: ["React", "Next.js", "TypeScript", "Node.js", "GraphQL", "AWS", "Jest", "Nightwatch"],
  },
  {
    role: "Frontend Engineer (part-time contract)",
    company: "Supercoder / Learning Crew",
    location: "Remote, South Korea",
    dates: "Jan 2026 – Mar 2026",
    bullets: [
      "Introduced React Query patterns and standardized API integration; contributed to frontend architecture, Swagger API documentation, cleanup and engineering handoff.",
    ],
    tech: ["React", "React Query", "Swagger"],
  },
  {
    role: "Frontend Developer (part-time contract)",
    company: "Supercoder / Hooaah",
    location: "Remote, South Korea",
    dates: "Nov 2023 – Aug 2024",
    bullets: ["Built reusable React modules, integrated backend functionality, and turned product and design requirements into features."],
    tech: ["React", "JavaScript", "REST"],
  },
  {
    role: "Full-Stack Engineer (freelance)",
    company: "Fiverr, independent client work",
    location: "Remote",
    dates: "Dec 2018 – Apr 2023",
    bullets: [
      "Delivered web applications from discovery and architecture through deployment, CMS, integrations and ongoing support.",
      "Built Alisa Schenk Photography (portfolio, booking, blog) and employee, hiring, course and content tools for H&S Electric & Solar; developed a CMS-driven real-estate platform for MoonsCreekProperties.",
    ],
    tech: ["React", "Next.js", "Node.js", "CMS", "Payments"],
  },
  {
    role: "Full-Stack Engineer",
    company: "ShopDev",
    location: "Lahore, Pakistan",
    dates: "Oct 2021 – Apr 2022",
    bullets: [
      "Led Shopdesk inventory and sales workflows: product management, sales calculations, barcodes and offline sales.",
      "Built customized React extensions integrated with Shopify applications for Amyris.",
    ],
    tech: ["React", "Node.js", "SQL", "Shopify"],
  },
  {
    role: "Senior Full-Stack Engineer",
    company: "Renesis Tech",
    location: "Lahore, Pakistan",
    dates: "Jul 2021 – Aug 2021",
    bullets: [
      "Delivered Photobank end to end in two months: Rekognition face search across S3 galleries and Lambda thumbnails with photographer watermarks.",
      "Designed a reusable Stripe microservice used across company projects.",
    ],
    tech: ["Next.js", "Node.js", "AWS", "Rekognition", "Stripe"],
  },
  {
    role: "Senior Full-Stack Engineer / Team Lead",
    company: "Innovation Insight",
    location: "Lahore, Pakistan",
    dates: "Oct 2019 – Jul 2021",
    bullets: [
      "Built Vonza's architecture from scratch and its core modules: website builder, funnels, scheduling, online courses and e-commerce.",
      "Led up to 10 engineers and worked with the CEO and CTO on subdomain routing, payments, security middleware and scale.",
      "Built YayMaker real-time chat and Google Maps features; contributed to an online fitness streaming product.",
    ],
    tech: ["React", "Next.js", "Node.js", "MongoDB", "AWS", "Stripe"],
  },
  {
    role: "Senior Full-Stack Engineer (part-time contract)",
    company: "RSglowtech",
    location: "Lahore, Pakistan",
    dates: "Dec 2020 – May 2021",
    bullets: [
      "Led teams of 6–8 on a healthcare appointment and patient-tracking system and Baseline, a platform for trading artist shares.",
      "Integrated music and data APIs and built scheduled Node.js processing jobs; presented weekly demos to clients.",
    ],
    tech: ["React", "Next.js", "Node.js", "MongoDB"],
  },
  {
    role: "Full-Stack Engineer",
    company: "Vvork Cloud Technologies",
    location: "Lahore, Pakistan",
    dates: "Jan 2018 – Dec 2018",
    bullets: ["Built student-management portal features and worked with solution architects to match architecture to business needs."],
    tech: ["JavaScript", "React", "Node.js"],
  },
];

export const education = {
  degree: "BS Computer Science",
  school: "NCBA&E",
  location: "Lahore, Pakistan",
  year: "2022",
};

export const certifications = [
  "Microsoft Exam 480: Programming in HTML5 with JavaScript and CSS3 (2019)",
  "Full-Stack Engineering, Mangtas",
  "English Speaking, Emmersion",
];
