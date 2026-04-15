import { SkillDataProvider } from "@/components/sub/skill-data-provider";
import { SkillText } from "@/components/sub/skill-text";

import {
  BACKEND_SKILL,
  FRONTEND_SKILL,
  FULLSTACK_SKILL,
  OTHER_SKILL,
  SKILL_DATA,
} from "@/constants";

const SkillCategory = ({
  title,
  skills,
}: {
  title: string;
  skills: ReadonlyArray<{
    skill_name: string;
    image: string;
    width: number;
    height: number;
  }>;
}) => (
  <div className="flex flex-col items-center gap-4 w-full">
    <h3 className="skill-category-label">{title}</h3>
    <div className="flex flex-row justify-center flex-wrap gap-3 items-center max-w-[800px]">
      {skills.map((skill, i) => (
        <SkillDataProvider
          key={skill.skill_name}
          src={skill.image}
          name={skill.skill_name}
          width={skill.width}
          height={skill.height}
          index={i}
        />
      ))}
    </div>
  </div>
);

export const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20 px-4"
    >
      <SkillText />

      <div className="flex flex-col gap-12 mt-8 w-full items-center">
        <SkillCategory title="GenAI & LLMs" skills={SKILL_DATA} />
        <SkillCategory title="RAG & Vector DBs" skills={FRONTEND_SKILL} />
        <SkillCategory title="Agentic AI & Voice AI" skills={BACKEND_SKILL} />
        <SkillCategory title="Backend & Deep Learning" skills={FULLSTACK_SKILL} />
        <SkillCategory title="Deployment & DevOps" skills={OTHER_SKILL} />
      </div>

      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
          >
            <source src="/videos/skills-bg.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </section>
  );
};
