import { About } from "@/components/main/about";
import { Contact } from "@/components/main/contact";
import { Experience } from "@/components/main/experience";
import { FeaturedProjects } from "@/components/main/featured-projects";
import { FullStackCloud } from "@/components/main/fullstack-cloud";
import { GenAIExpertise } from "@/components/main/genai-expertise";
import { Hero } from "@/components/main/hero";
import { LiveProjects } from "@/components/main/live-projects";
import { TechStrip } from "@/components/main/tech-strip";
import { Workflow } from "@/components/main/workflow";

export default function Home() {
  return (
    <main className="relative w-full">
      <Hero />
      <TechStrip />
      <About />
      <FeaturedProjects />
      <GenAIExpertise />
      <FullStackCloud />
      <Experience />
      <Workflow />
      <LiveProjects />
      <Contact />
    </main>
  );
}
