import Image from "next/image";
import AppIcon from "./AppIcon";
import HeroCopy from "./HeroCopy";

const trust = [
  { label: "Fresh\n& Organic", icon: <AppIcon name="leaf" className="h-10 w-10" /> },
  { label: "Direct from\nFarmers", icon: <AppIcon name="farmer" className="h-10 w-10" /> },
  { label: "Delivered to\nYour Home", icon: <AppIcon name="house" className="h-10 w-10" /> },
  { label: "Better for a\nHealthier India", icon: <AppIcon name="heart-leaf" className="h-10 w-10" /> },
];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-cream">
      <h1 className="sr-only">Sabjii Le Lo – Fresh Vegetables From Farmers To Your Home</h1>
      {/* Banner: crate on the right; text + trust row overlay the sunlit/beige left on md+ */}
      <div className="relative aspect-[4/3] w-full sm:aspect-[16/9] lg:aspect-auto lg:h-[calc(100svh-5rem)] lg:max-h-[820px] lg:min-h-[560px]">
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
          <HeroCopy />
          <TrustRow className="max-w-[72%]" />
        </div>
      </div>

      {/* Mobile text sits below the image on the beige wave */}
      <div className="relative -mt-10 bg-cream px-4 pb-8 pt-6 sm:px-6 lg:hidden">
        {/* wave top edge: flows like the green wave on the banner, no rounded corner */}
        <svg
          aria-hidden
          viewBox="0 0 400 48"
          preserveAspectRatio="none"
          className="absolute inset-x-0 -top-[47px] h-12 w-full text-cream"
        >
          <path d="M0 48V30C70 4 130 2 200 22s130 28 200 0V48z" fill="currentColor" />
        </svg>
        <HeroCopy />
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
