import { TECH_STRIP } from "@/constants";

export const TechStrip = () => {
  const items = [...TECH_STRIP, ...TECH_STRIP];
  return (
    <section
      aria-label="Core technologies"
      className="relative py-10 md:py-14 border-y border-white/[0.04]"
    >
      <div className="mx-auto max-w-[1240px] px-4 md:px-8">
        <div className="text-center mb-6">
          <span className="eyebrow">Core Technologies</span>
        </div>
        <div className="marquee-mask overflow-hidden">
          <div className="marquee-track">
            {items.map((label, i) => (
              <span key={`${label}-${i}`} className="tech-strip-item">
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
