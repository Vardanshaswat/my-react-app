// ============================================================
// EDIT THIS FILE with your real profile details.
// The layout, colors, and animations live elsewhere — swap text here.
// ============================================================

const profile = {
  name: 'Your Name',
  firstName: 'Your',
  role: 'Full-Stack Developer',
  years: 3,
  location: 'City, Country',
  availability: 'Open to full-time roles',
  email: 'you@email.com',
  phone: '+00 00000 00000',
  resumeUrl: '#resume', // replace with a Google Drive / PDF link
  social: {
    github: 'https://github.com/Vardanshaswat',
    linkedin: 'https://linkedin.com/in/your-handle',
    twitter: '',
  },
  headline:
    'I design and ship product-grade web apps — from the database to the interface recruiters actually click.',
  summary:
    'Full-stack engineer with 3 years of experience delivering production features across React, Node.js, and cloud-backed APIs. Comfortable owning a slice of a product: modeling data, building services, and crafting interfaces that stay fast under real usage. Replace this paragraph with your story, the domains you have worked in, and the kind of team you want next.',
  focus: [
    'Product-minded frontend',
    'Reliable Node APIs',
    'SQL & data modeling',
    'Ship, measure, iterate',
  ],
  stats: [
    { value: '3 yrs', label: 'Building for production' },
    { value: '12+', label: 'Shipped features / systems' },
    { value: '4', label: 'End-to-end products' },
  ],
  aboutExtra:
    'I like work where the frontend is not a skin on a black box. I want to understand the API contract, the failure modes, and how the thing is deployed. That is how I keep quality high without slowing the team down. Add a sentence about collaboration, mentoring, or a domain you care about (fintech, health, developer tools, etc.).',
};

const experience = [
  {
    company: 'Company Name',
    role: 'Full-Stack Developer',
    period: '2024 — Present',
    location: 'Remote / City',
    points: [
      'Owned a customer-facing flow from API design through React UI, cutting a key task from several clicks to one.',
      'Hardened error handling and loading states so production incidents dropped and support tickets followed.',
      'Partnered with design and QA on weekly releases; wrote the docs the next engineer actually used.',
    ],
  },
  {
    company: 'Previous Company',
    role: 'Software Engineer',
    period: '2023 — 2024',
    location: 'City',
    points: [
      'Built REST services in Node.js with PostgreSQL, plus the React screens that consumed them.',
      'Introduced reusable UI patterns that kept new features visually consistent without extra design cycles.',
      'Improved CI checks and environment config so deploys were boring — in a good way.',
    ],
  },
  {
    company: 'First Role / Internship',
    role: 'Junior Developer',
    period: '2022 — 2023',
    location: 'City',
    points: [
      'Shipped bug fixes and small features across the stack while learning how production systems fail.',
      'Wrote tests for the paths users actually hit, not only the happy path in local.',
    ],
  },
];

const projects = [
  {
    name: 'Northstar Console',
    year: '2025',
    tag: 'SaaS dashboard',
    blurb:
      'An operations dashboard for a fictional B2B product: live metrics, role-based views, and a filterable activity log. Built to show how I structure real admin UIs, not marketing pages.',
    outcome: 'Sub-second filter UX on 10k dummy rows · role-aware nav',
    stack: ['React', 'Node.js', 'PostgreSQL', 'Redis'],
    live: '#',
    source: 'https://github.com/Vardanshaswat',
    accent: '#c9a227',
  },
  {
    name: 'Ledgerline',
    year: '2024',
    tag: 'API + web app',
    blurb:
      'A money-movement style app with auth, transaction history, and idempotent transfers. Highlights backend correctness: constraints, audit trails, and clear API errors the UI can trust.',
    outcome: 'Idempotent transfers · JWT auth · audit log',
    stack: ['React', 'Express', 'PostgreSQL', 'JWT'],
    live: '#',
    source: 'https://github.com/Vardanshaswat',
    accent: '#3d8b7a',
  },
  {
    name: 'Relaykit',
    year: '2024',
    tag: 'Developer tool',
    blurb:
      'A small internal tool vibe: webhook inspector and request replay. Shows product sense for engineers — timelines, payloads, and one-click retry — the kind of thing teams actually bookmark.',
    outcome: 'Replay failed events · searchable payload log',
    stack: ['TypeScript', 'Node.js', 'React', 'Docker'],
    live: '#',
    source: 'https://github.com/Vardanshaswat',
    accent: '#c45c26',
  },
];

const skillGroups = [
  {
    title: 'Frontend',
    items: ['React', 'JavaScript (ES202x)', 'TypeScript', 'HTML / CSS', 'Responsive UI'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express', 'REST APIs', 'Auth (JWT / sessions)', 'PostgreSQL'],
  },
  {
    title: 'Data & quality',
    items: ['SQL modeling', 'Redis', 'Unit / integration tests', 'Git workflows'],
  },
  {
    title: 'Cloud & delivery',
    items: ['Docker', 'CI/CD basics', 'Linux', 'AWS (core services)', 'Vercel / GitHub Pages'],
  },
];

export { profile, experience, projects, skillGroups };
