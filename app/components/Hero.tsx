import Image from "next/image";
import { site } from "../lib/site";
import AppIcon from "./AppIcon";
import { Arrow } from "./Icons";

const trust = [
  { label: "Fresh\n& Organic", icon: <AppIcon name="leaf" className="h-10 w-10" /> },
  { label: "Direct from\nFarmers", icon: <AppIcon name="farmer" className="h-10 w-10" /> },
  { label: "Delivered to\nYour Home", icon: <AppIcon name="house" className="h-10 w-10" /> },
  { label: "Better for a\nHealthier India", icon: <AppIcon name="heart-leaf" className="h-10 w-10" /> },
];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-cream">
      {/* Banner: crate on the right; text + trust row overlay the sunlit/beige left on md+ */}
      <div className="relative aspect-[4/3] w-full sm:aspect-[16/9] lg:aspect-auto lg:h-[calc(100svh-4rem)] lg:max-h-[820px] lg:min-h-[560px]">
        <Image
          src="/images/hero-banner.webp"
          alt="Fresh vegetables and fruits in a wooden crate with a sunlit farm behind"
          fill
          priority
          sizes="100vw"
          className="kenburns object-cover object-[78%_bottom] lg:object-bottom"
        />
        {/* blend the banner's bottom edge into the page background (no visible seam) */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-24 bg-gradient-to-t from-cream via-cream/80 to-transparent lg:block" />
        <AppIcon name="leaf" className="leaf-float absolute left-[6%] top-[10%] h-8 w-8 opacity-80 [--rot:-20deg] lg:h-10 lg:w-10" />
        <AppIcon name="leaf" className="leaf-float absolute right-[12%] top-[8%] h-7 w-7 opacity-80 [--rot:30deg] [animation-delay:-3s]" />

        <div className="absolute inset-0 mx-auto hidden max-w-6xl flex-col justify-between px-6 pb-[3.5%] pt-[4%] lg:flex">
          <HeroText />
          <TrustRow className="max-w-[72%]" />
        </div>
      </div>

      {/* Mobile text sits below the image on the beige wave */}
      <div className="relative -mt-10 rounded-t-[2.5rem] bg-cream px-4 pb-8 pt-8 shadow-[0_-12px_30px_-12px_rgba(14,90,50,0.35)] sm:px-6 lg:hidden">
        <HeroText />
        <TrustRow className="mt-8" />
      </div>
    </section>
  );
}

function TrustRow({ className = "" }: { className?: string }) {
  return (
    <ul className={`grid grid-cols-2 gap-5 md:grid-cols-4 md:gap-6 ${className}`}>
      {trust.map((t) => (
        <li key={t.label} className="flex items-center gap-3 text-sm font-medium leading-snug text-[#1c2a20]">
          {t.icon}
          <span className="whitespace-pre-line">{t.label}</span>
        </li>
      ))}
    </ul>
  );
}

function HeroText() {
  return (
    <div className="max-w-xl lg:max-w-md xl:max-w-lg">
      <h1 className="hero-in text-[2.4rem] font-bold leading-[1.08] text-primary sm:text-5xl lg:text-[3.4rem]">
        Fresh Vegetables
        <br />
        From Farmers
        <br />
        To Your Home
      </h1>
      <p className="hero-in mt-4 text-base leading-relaxed text-[#1c2a20] [--delay:150ms] sm:text-lg">
        Farm fresh. Chemical-free. Direct from farmers.
        <br />
        Healthy families. Stronger farmers. A greener tomorrow.
      </p>
      <a
        href={site.downloadUrl}
        className="hero-in shine group mt-6 inline-flex min-h-12 items-center gap-2 rounded-full bg-primary px-7 font-semibold text-white shadow-lg shadow-primary/30 transition [--delay:300ms] hover:brightness-125"
      >
        Download App
        <Arrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </a>
    </div>
  );
}
