import AppIcon from "./AppIcon";
import { Eye, Target } from "./Icons";
import Reveal from "./Reveal";

export default function MissionVision() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-dark-green to-[#032a14] text-white">
      <svg viewBox="0 0 1440 40" preserveAspectRatio="none" aria-hidden className="absolute inset-x-0 top-0 h-6 w-full text-cream sm:h-9">
        <path d="M0 0h1440v8C1100 44 340 44 0 8z" fill="currentColor" />
      </svg>
      <svg viewBox="0 0 1440 40" preserveAspectRatio="none" aria-hidden className="absolute inset-x-0 bottom-0 h-6 w-full text-cream sm:h-9">
        <path d="M0 40h1440V32C1100-4 340-4 0 32z" fill="currentColor" />
      </svg>
      <AppIcon name="leaf" className="leaf-float absolute -left-3 top-4 h-16 w-16 opacity-60 [--rot:-30deg]" />
      <AppIcon name="leaf" className="leaf-float absolute -right-3 bottom-4 h-16 w-16 opacity-60 [--rot:40deg] [animation-delay:-4s]" />
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2 md:gap-0 md:py-20">
        <Reveal from="left" className="text-center md:px-10">
          <Target className="mx-auto h-11 w-11 text-accent" />
          <h2 className="mt-3 text-2xl font-bold">Our Mission</h2>
          <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-white/90">
            To make fresh, healthy and affordable vegetables accessible to every household while
            supporting local farmers.
          </p>
        </Reveal>
        <Reveal from="right" delay={150} className="relative text-center md:border-l md:border-white/20 md:px-10">
          <AppIcon name="leaf" className="absolute -left-4 top-1/2 hidden h-8 w-8 -translate-y-1/2 md:block" />
          <Eye className="mx-auto h-11 w-11 text-accent" />
          <h2 className="mt-3 text-2xl font-bold">Our Vision</h2>
          <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-white/90">
            A healthier India where every family gets chemical-free food and every farmer gets a fair
            income.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
