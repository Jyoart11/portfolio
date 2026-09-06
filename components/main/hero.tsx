import { HeroContent } from "@/components/sub/hero-content";

export const Hero = () => {
  return (
    <section
      id="about"
      className="relative flex flex-col w-full min-h-[calc(100vh-65px)] items-center justify-center overflow-hidden"
    >
      <div className="hero-glow" aria-hidden />
      <div className="grid-backdrop" aria-hidden />
      <HeroContent />
    </section>
  );
};
