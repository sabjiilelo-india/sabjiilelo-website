import Image from "next/image";
import { site } from "../lib/site";
import { AppleLogo, PlayLogo } from "./Icons";
import Reveal from "./Reveal";

export default function CTA() {
  return (
    <section id="download" className="relative overflow-hidden bg-cream">
      {/* Mobile: farmer image on top. md+: image is the background, text sits on the right. */}
      <div className="relative h-52 sm:h-64 md:absolute md:inset-0 md:h-auto">
        <Image
          src="/images/farmer-banner.webp"
          alt="Smiling farmer holding a crate of fresh vegetables in a sunlit field"
          fill
          sizes="100vw"
          className="object-cover object-[12%_center] md:object-[20%_center]"
        />
        {/* Fade the top edge into the section above */}
        {/* short fade over the farmer so his face stays clear; longer fade only to his right */}
        <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-cream/90 to-transparent" />
        <div className="absolute inset-x-0 top-0 hidden h-2/5 bg-gradient-to-b from-cream via-cream/60 to-transparent md:block md:[mask-image:linear-gradient(to_right,transparent_26%,black_46%)]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 pb-10 pt-6 sm:px-6 md:grid md:min-h-[300px] md:grid-cols-[1fr_1.4fr] md:items-center md:py-14">
        <div className="hidden md:block" />
        <Reveal className="text-center text-[#0b1a10] [text-shadow:0_0_16px_rgba(255,255,255,0.9),0_0_4px_rgba(255,255,255,0.8)]">
          <h2 className="text-2xl font-bold text-primary sm:text-3xl">Be a Part of a Healthier Tomorrow</h2>
          <p className="mt-3 text-[#1c2a20]/90">
            Download the Sabjii Le Lo app today
            <br className="hidden sm:block" /> and bring farm-fresh goodness to your home.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href={site.playStoreUrl}
              className="badge-bounce flex min-h-12 items-center gap-2.5 rounded-lg bg-black px-4 text-white [text-shadow:none] shadow-lg transition hover:brightness-125"
            >
              <PlayLogo className="h-7 w-7" />
              <span className="text-left leading-tight">
                <span className="block text-[9px] uppercase tracking-wide">Get it on</span>
                <span className="block text-base font-semibold">Google Play</span>
              </span>
            </a>
            <a
              href={site.appStoreUrl}
              className="badge-bounce flex min-h-12 items-center gap-2.5 rounded-lg bg-black px-4 text-white [text-shadow:none] shadow-lg transition [animation-delay:-1.2s] hover:brightness-125"
            >
              <AppleLogo className="h-7 w-7" />
              <span className="text-left leading-tight">
                <span className="block text-[9px]">Download on the</span>
                <span className="block text-base font-semibold">App Store</span>
              </span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
