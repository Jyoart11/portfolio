import { ProjectCard } from "@/components/sub/project-card";
import { PROJECTS } from "@/constants";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-20 px-4 md:px-10"
    >
      <h1 className="text-[36px] md:text-[44px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-violet-400 to-cyan-500 py-10 glow-heading font-heading">
        My Projects
      </h1>
      <div className="w-full max-w-[1200px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.title}
            src={project.image}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
};
