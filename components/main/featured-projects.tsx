import { FeaturedProjectCard } from "@/components/sub/featured-project-card";
import { SecondaryProjectCard } from "@/components/sub/secondary-project-card";
import { FEATURED_PROJECTS, OTHER_PROJECTS } from "@/constants";

export const FeaturedProjects = () => {
  return (
    <section id="projects" className="section relative">
      <div className="section-orb section-orb-right" aria-hidden />
      <div className="mx-auto max-w-[1240px] px-4 md:px-8">
        <div className="flex flex-col items-start gap-4 md:gap-5 max-w-[820px]">
          <div className="section-eyebrow">
            <span className="section-eyebrow-line" aria-hidden />
            <span className="eyebrow">Featured Work</span>
          </div>
          <h2 className="font-heading text-white text-[32px] md:text-[48px] font-semibold leading-tight tracking-tight">
            <span className="gradient-text">Production AI</span> systems I&apos;ve
            built.
          </h2>
          <p className="text-gray-400 text-[15px] md:text-[17px] leading-relaxed">
            Multi-agent backends, multi-tenant conversational platforms,
            multilingual voice AI, MCP-based agentic infrastructure, and
            full-stack enterprise deployments.
          </p>
        </div>

        <div className="mt-14 flex flex-col gap-6 md:gap-8">
          {FEATURED_PROJECTS.map((p, i) => (
            <FeaturedProjectCard
              key={p.slug}
              index={i}
              slug={p.slug}
              title={p.title}
              tagline={p.tagline}
              role={p.role}
              accent={p.accent}
              icon={p.icon}
              summary={p.summary}
              description={p.description}
              tech={p.tech}
              tags={p.tags}
            />
          ))}
        </div>

        <div className="mt-16 md:mt-20">
          <div className="mb-8 flex items-baseline justify-between gap-4 flex-wrap">
            <div>
              <div className="section-eyebrow">
                <span className="section-eyebrow-line" aria-hidden />
                <span className="eyebrow">More Projects</span>
              </div>
              <h3 className="mt-2 font-heading text-white text-[22px] md:text-[28px] font-semibold tracking-tight">
                Voice AI, MCP & Full-Stack
              </h3>
            </div>
            <div className="h-px flex-1 min-w-[100px] bg-white/[0.06]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {OTHER_PROJECTS.map((p, i) => (
              <SecondaryProjectCard
                key={p.slug}
                index={i}
                slug={p.slug}
                title={p.title}
                tagline={p.tagline}
                summary={p.summary}
                highlights={p.highlights}
                tech={p.tech}
                tags={p.tags}
                href={"href" in p ? p.href : undefined}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
