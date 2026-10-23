import Image from "next/image";
import AppIcon from "./AppIcon";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const features = [
  { label: "100% Fresh\nVegetables", icon: <AppIcon name="basket" className="h-14 w-14" />, tint: "from-light-green" },
  { label: "Direct from\nLocal Farmers", icon: <AppIcon name="farmer" className="h-14 w-14" />, tint: "from-beige" },
  { label: "Fast & Reliable\nHome Delivery", icon: <AppIcon name="truck" className="h-14 w-14" />, tint: "from-light-green" },
  { label: "Healthy Food\nHappier Families", icon: <AppIcon name="heart" className="h-14 w-14" />, tint: "from-beige" },
];

export default function About() {
  return (
    <section id="about" className="relative bg-cream px-4 py-8 sm:px-6 md:py-12">
      <div className="mx-auto max-w-5xl">
        {/* Intro card: text + mint quote panel in one contained surface */}
        <Reveal>
          <div className="grid items-center gap-8 rounded-[2rem] bg-gradient-to-br from-white via-white to-light-green/50 p-6 shadow-[0_30px_60px_-30px_rgba(14,90,50,0.35)] ring-1 ring-primary/10 lg:grid-cols-[1.15fr_1fr] lg:gap-10 lg:p-10">
            <div>
              <SectionHeading eyebrow="Who we are" title="About" accent="Sabjii Le Lo" />
              <p className="mt-5 leading-relaxed text-[#1c2a20]/90">
                We connect local farmers directly with your home, bringing you fresh, high-quality, and
                chemical-free vegetables every day. By cutting middlemen, we ensure fair prices for
                farmers and healthy, affordable food for families.
              </p>
              <a
                href="#how-it-works"
                className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary"
              >
                See how it works
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>

            <div className="relative mx-auto w-full max-w-xs drop-shadow-[0_18px_24px_rgba(14,90,50,0.18)] sm:max-w-sm lg:max-w-none">
              <Image src="/images/mint-panel-clear.webp" alt="" width={1530} height={889} sizes="(min-width: 768px) 380px, 320px" className="h-auto w-full" />
              <div className="absolute inset-x-0 top-[46%] text-center">
                <p className="font-script text-4xl font-bold leading-none text-primary sm:text-5xl">Good Food,</p>
                <p className="mt-1.5 font-script text-3xl leading-none text-primary/80 sm:text-4xl">Brighter Tomorrow</p>
              </div>
            </div>
          </div>
        </Reveal>

        <ul id="why-us" className="mt-5 grid scroll-mt-20 grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {features.map((f, i) => (
            <li key={f.label}>
              <Reveal delay={i * 100} className="h-full">
                <div
                  className={`group flex h-full flex-col items-center justify-center gap-2 rounded-2xl bg-gradient-to-b ${f.tint} to-white px-2 py-4 text-center shadow-[0_14px_30px_-18px_rgba(14,90,50,0.45)] ring-1 ring-primary/10 transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_22px_36px_-18px_rgba(14,90,50,0.55)]`}
                >
                  <span className="wiggle flex h-[5.5rem] w-[5.5rem] items-center justify-center rounded-full bg-white shadow-md ring-1 ring-primary/10">
                    {f.icon}
                  </span>
                  <span className="whitespace-pre-line text-sm font-semibold leading-snug text-[#0b1a10]">{f.label}</span>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
