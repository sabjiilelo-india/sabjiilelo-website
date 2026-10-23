import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AppIcon, { type IconName } from "../components/AppIcon";
import { site } from "../lib/site";

export const metadata: Metadata = {
  title: "Coming Soon – Sabjii Le Lo",
  description: "The Sabjii Le Lo app is coming soon to Google Play and the App Store.",
};

const floaters: IconName[] = ["leaf", "basket", "leaf", "farmer", "heart-leaf", "leaf", "house", "truck", "leaf", "basket"];

export default function ComingSoon() {
  return (
    <main className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden px-4 py-14 text-center">
      {/* sunlit farm photo with a fresh green wash */}
      <Image src="/images/hero-banner.webp" alt="" fill priority sizes="100vw" className="kenburns object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/55 to-dark-green/90" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(190,240,150,0.45),transparent_62%)]" />

      {floaters.map((name, i) => (
        <span
          key={i}
          aria-hidden
          className="rise"
          style={{ left: `${4 + i * 10}%`, "--dur": `${11 + (i % 4) * 3}s`, "--delay": `${-i * 1.9}s` } as React.CSSProperties}
        >
          <AppIcon name={name} className="h-10 w-10 sm:h-14 sm:w-14" />
        </span>
      ))}

      <div className="relative z-10 w-full max-w-xl rounded-[2rem] bg-white/15 p-7 text-white shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)] ring-1 ring-white/30 backdrop-blur-md sm:p-10">
        <Image src="/images/logo.png" alt={site.name} width={112} height={112} priority className="hero-in mx-auto h-24 w-24 drop-shadow-[0_8px_16px_rgba(0,0,0,0.3)] sm:h-28 sm:w-28" />
        <p className="hero-in mt-3 text-sm uppercase tracking-[0.25em] text-white/90 [--delay:100ms]">{site.name}</p>
        <h1 className="shimmer hero-in mt-2 text-5xl font-bold leading-tight [--delay:200ms] sm:text-6xl">Coming Soon</h1>
        <p className="hero-in mt-4 leading-relaxed text-white/95 [--delay:350ms] sm:text-lg">
          We&apos;re getting our app ready for Google Play and the App Store. Fresh vegetables, straight from farmers to your
          home — launching very soon!
        </p>

        <div className="hero-in mx-auto mt-7 h-2 w-64 max-w-full overflow-hidden rounded-full bg-white/25 [--delay:500ms]">
          <div className="h-full w-3/4 animate-pulse rounded-full bg-[#9be36f]" />
        </div>
        <p className="mt-2 text-xs text-white/80">Almost ready…</p>

        <Link
          href="/"
          className="hero-in shine mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-white px-7 font-semibold text-primary shadow-lg transition [--delay:650ms] hover:scale-105"
        >
          <AppIcon name="leaf" className="h-6 w-6" /> Back to Home
        </Link>
      </div>
    </main>
  );
}
