import {
  RxGithubLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import { HiOutlineMail } from "react-icons/hi";

export const SKILL_DATA = [
  { skill_name: "GPT-4o", image: "", width: 80, height: 80 },
  { skill_name: "Claude", image: "", width: 80, height: 80 },
  { skill_name: "Gemini", image: "", width: 80, height: 80 },
  { skill_name: "LangChain", image: "", width: 80, height: 80 },
  { skill_name: "LlamaIndex", image: "", width: 80, height: 80 },
  { skill_name: "Prompt Engineering", image: "", width: 80, height: 80 },
  { skill_name: "Fine-tuning", image: "", width: 80, height: 80 },
] as const;

export const FRONTEND_SKILL = [
  { skill_name: "ChromaDB", image: "", width: 80, height: 80 },
  { skill_name: "FAISS", image: "", width: 80, height: 80 },
  { skill_name: "pgvector", image: "", width: 80, height: 80 },
  { skill_name: "SentenceTransformers", image: "", width: 80, height: 80 },
  { skill_name: "Semantic Chunking", image: "", width: 80, height: 80 },
] as const;

export const BACKEND_SKILL = [
  { skill_name: "Multi-Agent Orchestration", image: "", width: 80, height: 80 },
  { skill_name: "Tool Calling", image: "", width: 80, height: 80 },
  { skill_name: "Async Architecture", image: "", width: 80, height: 80 },
  { skill_name: "ElevenLabs", image: "", width: 80, height: 80 },
  { skill_name: "Twilio", image: "", width: 80, height: 80 },
  { skill_name: "Multilingual STT/TTS", image: "", width: 80, height: 80 },
] as const;

export const FULLSTACK_SKILL = [
  { skill_name: "Python", image: "", width: 80, height: 80 },
  { skill_name: "FastAPI", image: "", width: 80, height: 80 },
  { skill_name: "REST APIs", image: "", width: 80, height: 80 },
  { skill_name: "Async Endpoints", image: "", width: 80, height: 80 },
  { skill_name: "HuggingFace", image: "", width: 80, height: 80 },
  { skill_name: "YOLO", image: "", width: 80, height: 80 },
  { skill_name: "Transformers", image: "", width: 80, height: 80 },
  { skill_name: "scikit-learn", image: "", width: 80, height: 80 },
] as const;

export const OTHER_SKILL = [
  { skill_name: "AWS EC2", image: "", width: 80, height: 80 },
  { skill_name: "Docker", image: "docker.png", width: 70, height: 70 },
  { skill_name: "Kubernetes", image: "", width: 80, height: 80 },
  { skill_name: "MLflow", image: "", width: 80, height: 80 },
  { skill_name: "Git", image: "", width: 80, height: 80 },
] as const;

export const SOCIALS = [
  {
    name: "LinkedIn",
    icon: RxLinkedinLogo,
    link: "https://www.linkedin.com/in/kalamkuri-jyothirmai-01678526a",
  },
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: "https://github.com/Jyoart11",
  },
] as const;

export const PROJECTS = [
  {
    title: "Multilingual AI Voice Caller Platform",
    description:
      "RAG-based voice agent automating customer campaigns across 3+ languages. Sub-2s response time. Eliminated manual outreach for routine interactions entirely. Built with LangChain, ElevenLabs, Twilio, FastAPI & AWS EC2.",
    image: "/projects/project-1.png",
    link: "https://github.com/Jyoart11",
  },
  {
    title: "Multimodal Retrieval System",
    description:
      "First unified OCR + image embedding pipeline at IICL. Combines text and visual document intelligence into a single enterprise search system — no more switching between tools. Built with Python, YOLO, OCR, ChromaDB & SentenceTransformers.",
    image: "/projects/project-2.png",
    link: "https://github.com/Jyoart11",
  },
  {
    title: "AI Multi-Agent Platform",
    description:
      "Multi-agent orchestration across Banking, Education, and Sales — KYC processing, loan approvals, admissions RAG, and sales nurturing on async event-driven architecture. Built with FastAPI, Celery, Redis, FAISS & ReactFlow.",
    image: "/projects/project-3.png",
    link: "https://github.com/Jyoart11",
  },
  {
    title: "Icognito — AI Chatbot Builder",
    description:
      "Self-serve platform with 6-format ingestion (PDF, URL, DOCX, CSV, images, multilingual text). Lets non-technical teams deploy custom AI assistants independently — no engineering involvement needed. Built with LangChain, FastAPI, ChromaDB, Docker & AWS EC2.",
    image: "/projects/project-4.svg",
    link: "https://github.com/Jyoart11",
  },
  {
    title: "RAG Q&A Engine",
    description:
      "Semantic chunking + SentenceTransformer embeddings + vector retrieval with built-in evaluation loop. Core knowledge retrieval engine powering all IICL AI products. Built with SentenceTransformers, ChromaDB, LangChain & FastAPI.",
    image: "/projects/project-5.svg",
    link: "https://github.com/Jyoart11",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Links",
    data: [
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/Jyoart11",
      },
      {
        name: "LinkedIn",
        icon: RxLinkedinLogo,
        link: "https://www.linkedin.com/in/kalamkuri-jyothirmai-01678526a",
      },
    ],
  },
  {
    title: "Contact",
    data: [
      {
        name: "Email Me",
        icon: HiOutlineMail,
        link: "mailto:kalamkurijyothirmai@gmail.com",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/Jyoart11",
};
