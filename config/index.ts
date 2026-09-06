import type { Metadata } from "next";

export const siteConfig: Metadata = {
  title: "Jyothirmai Kalamkuri | AI Engineer | Generative AI, LLMs & RAG",
  description:
    "AI Engineer building production-oriented Generative AI, LLM, RAG, agentic AI, full-stack and cloud solutions using Python, FastAPI, React, AWS and Azure.",
  keywords: [
    "Jyothirmai Kalamkuri",
    "AI Engineer",
    "Generative AI Engineer",
    "LLM Engineer",
    "RAG",
    "Agentic AI",
    "LangGraph",
    "LangChain",
    "CrewAI",
    "MCP",
    "Voice AI",
    "FastAPI",
    "Python",
    "Next.js",
    "React",
    "TypeScript",
    "AWS",
    "Azure",
    "Docker",
    "Full Stack AI",
    "Production AI",
    "Hyderabad AI Engineer",
    "IICL",
  ] as Array<string>,
  authors: {
    name: "Jyothirmai Kalamkuri",
    url: "https://github.com/Jyoart11",
  },
  openGraph: {
    type: "website",
    title: "Jyothirmai Kalamkuri | AI Engineer | Generative AI, LLMs & RAG",
    description:
      "AI Engineer building production-oriented Generative AI, LLM, RAG, agentic AI, full-stack and cloud solutions using Python, FastAPI, React, AWS and Azure.",
    siteName: "Jyothirmai Kalamkuri",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jyothirmai Kalamkuri | AI Engineer | Generative AI, LLMs & RAG",
    description:
      "AI Engineer building production-oriented Generative AI, LLM, RAG, agentic AI, full-stack and cloud solutions.",
  },
  robots: {
    index: true,
    follow: true,
  },
} as const;
