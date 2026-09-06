import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";
import { HiOutlineMail } from "react-icons/hi";

export const CONTACT = {
  email: "kalamkurijyothirmai@gmail.com",
  phone: "+91 73963 55894",
  phoneHref: "tel:+917396355894",
  github: "https://github.com/Jyoart11",
  linkedin:
    "https://www.linkedin.com/in/kalamkuri-jyothirmai-01678526a",
  location: "Hyderabad, India",
  resume: "/resume.pdf",
} as const;

export const NAV_LINKS = [
  { title: "About", link: "#about" },
  { title: "Projects", link: "#projects" },
  { title: "GenAI", link: "#genai" },
  { title: "Stack", link: "#stack" },
  { title: "Experience", link: "#experience" },
  { title: "Contact", link: "#contact" },
] as const;

export const SOCIALS = [
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: CONTACT.github,
  },
  {
    name: "LinkedIn",
    icon: RxLinkedinLogo,
    link: CONTACT.linkedin,
  },
  {
    name: "Email",
    icon: HiOutlineMail,
    link: `mailto:${CONTACT.email}`,
  },
] as const;

// Trust / technology strip on homepage
export const TECH_STRIP = [
  "Generative AI",
  "LLMs",
  "RAG",
  "Agentic AI",
  "Python",
  "FastAPI",
  "React",
  "Next.js",
  "AWS",
  "Azure",
  "Docker",
] as const;

// About / Engineering Approach areas
// icon slug is resolved in the component to a react-icons component
export const APPROACH = [
  {
    id: "01",
    title: "AI Engineering",
    desc: "LLMs, RAG, agents, prompt engineering, evaluation.",
    icon: "cpu",
    accent: "from-purple-500/25 to-fuchsia-500/10",
  },
  {
    id: "02",
    title: "Backend Engineering",
    desc: "Python, FastAPI, REST APIs, databases.",
    icon: "server",
    accent: "from-indigo-500/25 to-purple-500/10",
  },
  {
    id: "03",
    title: "Full Stack",
    desc: "React, Next.js, TypeScript, responsive interfaces.",
    icon: "code",
    accent: "from-cyan-500/25 to-indigo-500/10",
  },
  {
    id: "04",
    title: "Cloud & Production",
    desc: "AWS, Azure, Docker, CI/CD, monitoring.",
    icon: "cloud",
    accent: "from-emerald-500/25 to-cyan-500/10",
  },
] as const;

// Recruiter quick-facts under hero
export const QUICK_FACTS = [
  { label: "Currently", value: "AI Engineer at IICL" },
  { label: "Type", value: "Full-time" },
  { label: "Experience", value: "2+ years" },
  { label: "Location", value: "Hyderabad, India" },
  { label: "Availability", value: "Immediate joiner" },
] as const;

// Certifications
export const CERTIFICATIONS = [
  {
    title: "AWS Academy Graduate — Cloud Architecting",
    issuer: "Amazon Web Services",
    note: "Infrastructure on AWS & cloud best practices",
  },
  {
    title: "AWS Academy Graduate — Data Analytics",
    issuer: "Amazon Web Services",
    note: "December 2023",
  },
  {
    title: "AWS Academy Graduate — Cloud Foundations",
    issuer: "Amazon Web Services",
    note: "October 2022",
  },
] as const;

// Education
export const EDUCATION = [
  {
    degree: "B.Tech, Electronics & Communication Engineering",
    school: "Sreenidhi Institute of Science and Technology",
    period: "2020 – 2024",
  },
] as const;

// Featured projects
export const FEATURED_PROJECTS = [
  {
    slug: "veropath",
    title: "VeroPath",
    tagline: "Multi-Agent ESG Compliance AI Platform",
    role: "AI Engineer / AI Backend Engineer",
    accent: "from-purple-500/40 via-fuchsia-500/20 to-transparent",
    icon: "agents",
    summary:
      "Production-oriented multi-agent AI backend for ESG compliance reporting aligned with UAE FDL#11 regulatory requirements.",
    description:
      "Built the AI backend from the ground up using Python and FastAPI, taking ownership across architecture, implementation, testing, deployment, and production readiness. The platform uses CrewAI and Gemini 2.5 Flash to orchestrate specialized AI agents for data analysis, regulatory compliance checking, and report generation. Implemented RAG-based regulatory grounding, tenant-isolated retrieval, versioned prompts, citation grounding, quality gates, audit logging, response caching, cost monitoring, provider fallback mechanisms, emissions estimation, anomaly detection, sustainability advisory, and human sign-off controls. Containerized the service with Docker and deployed it through Azure Container Apps with Azure DevOps CI/CD.",
    tech: [
      "Python",
      "FastAPI",
      "CrewAI",
      "Gemini 2.5 Flash",
      "RAG",
      "Vector Search",
      "Supabase",
      "Docker",
      "Azure",
      "Azure DevOps",
    ],
    tags: ["Multi-Agent", "RAG", "LLM", "Production AI", "Cloud"],
  },
  {
    slug: "ivaak",
    title: "iVaak AI",
    tagline: "Multi-Tenant AI Concierge Platform",
    role: "Full-Stack / AI Engineer",
    accent: "from-cyan-500/40 via-indigo-500/20 to-transparent",
    icon: "voice",
    summary:
      "Production multi-tenant AI concierge platform for real-estate developers combining conversational AI, RAG, voice AI, lead capture, outbound calling, and WhatsApp engagement.",
    description:
      "Worked across the full-stack and AI integration layers of a multi-tenant AI platform built for real-estate developers. The platform provides white-labelled conversational AI experiences through web chat and voice interactions. My work includes React/Next.js interfaces, reusable components, brand-specific configurations, AI/API integrations, conversational workflows, real-time voice interaction, lead capture, RAG-based knowledge grounding, and third-party service integrations. The platform integrates LLMs, voice AI, Twilio, WhatsApp, PostgreSQL/Supabase, Docker, and AWS infrastructure.",
    tech: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Python",
      "LLMs",
      "RAG",
      "Gemini",
      "Sarvam",
      "ElevenLabs",
      "Twilio",
      "PostgreSQL",
      "Supabase",
      "Docker",
      "AWS",
    ],
    tags: ["Multi-Tenant", "Full Stack", "Voice AI", "RAG", "Production"],
  },
] as const;

// Secondary projects
export const OTHER_PROJECTS = [
  {
    slug: "praneeth-ixora",
    title: "Praneeth Ixora",
    tagline: "Multilingual Voice AI Agent",
    summary:
      "Production multilingual Voice AI solution supporting English, Telugu, and Hindi conversational interactions.",
    highlights: [
      "Voice AI",
      "LLM integration",
      "Prompt engineering",
      "Persona classification",
      "Guardrails",
      "Versioned prompts",
      "Dynamic prompt configuration",
      "Sarvam",
      "Twilio",
      "Production testing",
    ],
    tech: [
      "Python",
      "Gemini",
      "Sarvam",
      "Twilio",
      "Voice AI",
      "Prompt Engineering",
      "REST APIs",
      "Docker",
    ],
    tags: ["Voice AI", "LLMs", "Multilingual"],
  },
  {
    slug: "mcp-platform",
    title: "Multi-Layer AI Platform & MCP Server",
    tagline: "Agentic Workflows, Tools & Retrieval",
    summary:
      "Modular AI platform combining RAG, vector retrieval, agentic workflows, tool calling, and a custom MCP server.",
    highlights: [
      "MCP server built from scratch",
      "LangGraph",
      "CrewAI",
      "RAG",
      "Document ingestion",
      "Chunking",
      "Embeddings",
      "Vector search",
      "Hybrid retrieval",
      "Reranking",
      "Tool calling",
      "Agent workflows",
    ],
    tech: [
      "Python",
      "MCP",
      "LangGraph",
      "LangChain",
      "CrewAI",
      "FAISS",
      "Weaviate",
      "pgvector",
      "Chroma",
    ],
    tags: ["Agentic AI", "MCP", "RAG", "Architecture"],
  },
  {
    slug: "iicl",
    title: "IICL",
    tagline: "Enterprise AI Solutions Platform",
    href: "https://iicl.in",
    summary:
      "End-to-end enterprise website implementation combining frontend engineering, APIs, AI-powered interaction, responsive UI, SEO, Docker, CI/CD, and cloud deployment.",
    highlights: [
      "Frontend architecture",
      "Responsive UI",
      "Reusable components",
      "Dynamic routing",
      "HTML",
      "CSS / SCSS",
      "JavaScript",
      "TypeScript",
      "REST APIs",
      "Enquiry workflows",
      "Form validation",
      "Input sanitization",
      "AI chat",
      "Voice AI",
      "SEO",
      "Docker",
      "CI/CD",
      "Cloud deployment",
    ],
    tech: [
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "REST APIs",
      "Docker",
      "CI/CD",
    ],
    tags: ["Full Stack", "Frontend", "APIs", "Cloud"],
  },
] as const;

// GenAI expertise layered architecture
export const GENAI_LAYERS = [
  {
    title: "LLM Applications",
    desc: "Building applications around OpenAI, Claude, Gemini and Llama.",
  },
  {
    title: "Prompt Engineering",
    desc: "Versioned prompts, persona design, dynamic prompt configuration, guardrails.",
  },
  {
    title: "RAG",
    desc: "Document ingestion, chunking, embeddings, retrieval, reranking and citation grounding.",
  },
  {
    title: "Vector Search",
    desc: "FAISS, Weaviate, pgvector and Chroma for hybrid and semantic retrieval.",
  },
  {
    title: "Agentic Workflows",
    desc: "LangGraph and CrewAI workflows with specialized agents and tool execution.",
  },
  {
    title: "Tools / MCP",
    desc: "Building MCP-based interfaces to expose capabilities and tools to AI systems.",
  },
  {
    title: "Evaluation",
    desc: "Quality gates, AI evaluation loops, safety checks and human sign-off controls.",
  },
  {
    title: "Production",
    desc: "Caching, fallbacks, logging, monitoring, cost tracking and human approval workflows.",
  },
] as const;

// AI + Full Stack + Cloud three-column stack
export const STACK_COLUMNS = [
  {
    label: "AI",
    items: ["LLMs", "RAG", "Agents", "Voice AI", "Prompt Engineering"],
  },
  {
    label: "Application",
    items: ["Python", "FastAPI", "React", "Next.js", "REST APIs", "PostgreSQL"],
  },
  {
    label: "Infrastructure",
    items: ["AWS", "Azure", "Docker", "CI/CD", "Nginx", "Cloud Deployment"],
  },
] as const;

// Request-flow visualization
export const FLOW_STEPS = [
  "User",
  "Frontend",
  "API",
  "AI / Agent",
  "RAG / Database",
  "Cloud Infrastructure",
] as const;

// Experience timeline
export const EXPERIENCE = [
  {
    role: "AI Engineer",
    company: "IICL",
    employmentType: "Full-time",
    period: "September 2024 – Present",
    location: "Hyderabad, India",
    description:
      "Building production-oriented Generative AI and LLM applications across banking, ITSM, ESG compliance and conversational AI use cases.",
    responsibilities: [
      "LLM integrations",
      "RAG systems",
      "Multi-agent workflows",
      "Python / FastAPI services",
      "REST APIs",
      "Vector databases",
      "Cloud deployment",
      "Docker",
      "CI/CD",
      "Monitoring",
      "AI evaluation",
      "Production troubleshooting",
      "Requirement analysis",
      "Technical solution design",
    ],
  },
] as const;

// Engineering workflow — "How I Build"
export const WORKFLOW = [
  {
    id: "01",
    title: "Understand",
    desc: "Requirements → Business workflow → User journey",
  },
  {
    id: "02",
    title: "Design",
    desc: "Architecture → APIs → Data → AI workflow",
  },
  {
    id: "03",
    title: "Build",
    desc: "Python → FastAPI → LLM → RAG → Frontend",
  },
  {
    id: "04",
    title: "Validate",
    desc: "Testing → Evaluation → Quality gates",
  },
  {
    id: "05",
    title: "Deploy",
    desc: "Docker → AWS / Azure → CI/CD",
  },
  {
    id: "06",
    title: "Operate",
    desc: "Monitoring → Logging → Cost → Reliability",
  },
] as const;

// Live deployments
export const LIVE_LINKS = {
  iicl: {
    label: "IICL",
    href: "https://iicl.in",
  },
  ivaak: [
    { label: "sas.ivaak.ai", href: "https://sas.ivaak.ai" },
    { label: "candeur.ivaak.ai", href: "https://candeur.ivaak.ai" },
    { label: "ncc.ivaak.ai", href: "https://ncc.ivaak.ai" },
    { label: "sattva.ivaak.ai", href: "https://sattva.ivaak.ai" },
    { label: "raghava.ivaak.ai", href: "https://raghava.ivaak.ai" },
    { label: "vamsiram.ivaak.ai", href: "https://vamsiram.ivaak.ai" },
    { label: "kmv.ivaak.ai", href: "https://kmv.ivaak.ai" },
    { label: "janapriya.ivaak.ai", href: "https://janapriya.ivaak.ai" },
    { label: "keerthi.ivaak.ai", href: "https://keerthi.ivaak.ai" },
  ],
} as const;

// Footer columns
export const FOOTER_DATA = [
  {
    title: "Links",
    data: [
      { name: "GitHub", icon: RxGithubLogo, link: CONTACT.github },
      { name: "LinkedIn", icon: RxLinkedinLogo, link: CONTACT.linkedin },
    ],
  },
  {
    title: "Contact",
    data: [
      {
        name: "Email Me",
        icon: HiOutlineMail,
        link: `mailto:${CONTACT.email}`,
      },
    ],
  },
] as const;

export const LINKS = {
  sourceCode: CONTACT.github,
};
