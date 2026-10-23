import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "../components/Reveal";
import { AppleLogo, Leaf, PlayLogo } from "../components/Icons";
import { site } from "../lib/site";

export const metadata: Metadata = {
  title: "Get the App – Sabjii Le Lo",
  description: "Order fresh vegetables and fruits from local farmers with the Sabjii Le Lo app.",
};

const points = [
  "Order fresh vegetables & fruits in a few taps",
  "Buy directly from local farmers",
  "Fast home delivery to your doorstep",
  "Access exclusive deals & offers",
  "Earn rewards & discounts on every order",
];

export default function AppPage() {
  return (
    <main className="flex min-h-[calc(100vh-4rem)] flex-col bg-gradient-to-b from-cream via-[#eef6e6] to-cream">
      {/* Two equal columns, image left / content right, content vertically centred */}
      <section className="mx-auto grid w-full max-w-[1760px] flex-1 items-center gap-8 px-5 pb-10 pt-6 sm:px-8 lg:grid-cols-2 lg:gap-10 lg:px-[5%] lg:pb-8 lg:pt-6">
        <Reveal from="left">
          <div className="overflow-hidden rounded-3xl shadow-[0_30px_60px_-25px_rgba(14,90,50,0.55)] ring-1 ring-primary/10">
            <Image
              src="/images/app-preview.webp"
              alt="Sabjii Le Lo app showing fresh vegetables, fruits, offers and delivery"
              width={1536}
              height={1024}
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="h-auto w-full"
            />
          </div>
        </Reveal>

        <Reveal from="right" delay={120}>
          <span className="inline-flex items-center gap-2 rounded-full bg-light-green px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
            <Leaf className="h-4 w-4" /> Consumer mobile app
          </span>
          <h1 className="mt-5 text-3xl font-bold leading-[1.12] text-[#0b1a10] sm:text-4xl lg:text-[clamp(1.8rem,2.9vw,3.4rem)]">
            Fresh From Farmers
            <br />
            <span className="bg-gradient-to-r from-primary to-[#4caf3d] bg-clip-text text-transparent lg:whitespace-nowrap">
              Through The Sabjii Le Lo App
            </span>
          </h1>
          <p className="mt-5 max-w-xl leading-relaxed text-[#1c2a20]/70 lg:text-lg">
            The Sabjii Le Lo app connects your home with local farmers and everyday fresh produce, right at your
            fingertips.
          </p>

          <ul className="mt-6 space-y-3.5">
            {points.map((p, i) => (
              <li
                key={p}
                className="hero-in flex items-center gap-3 text-[#0b1a10] lg:text-lg"
                style={{ "--delay": `${300 + i * 90}ms` } as React.CSSProperties}
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-light-green text-primary">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="m5 12 5 5 9-10" />
                  </svg>
                </span>
                {p}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href={site.playStoreUrl}
              className="badge-bounce flex min-h-14 items-center gap-3 rounded-2xl bg-black px-6 text-white transition hover:brightness-125"
            >
              <PlayLogo className="h-8 w-8" />
              <span className="text-left leading-tight">
                <span className="block text-[10px] uppercase tracking-wide">Get it on</span>
                <span className="block text-lg font-semibold">Google Play</span>
              </span>
            </Link>
            <Link
              href={site.appStoreUrl}
              className="badge-bounce flex min-h-14 items-center gap-3 rounded-2xl bg-black px-6 text-white transition [animation-delay:-1.2s] hover:brightness-125"
            >
              <AppleLogo className="h-8 w-8" />
              <span className="text-left leading-tight">
                <span className="block text-[10px]">Download on the</span>
                <span className="block text-lg font-semibold">App Store</span>
              </span>
            </Link>
          </div>

          <p className="mt-6 flex items-center gap-2 text-sm font-semibold text-primary lg:text-base">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="M12 3 5 6v6c0 4.5 3 8 7 9 4-1 7-4.5 7-9V6z" />
            </svg>
            Fresh. Direct. From farmers to your home.
          </p>
        </Reveal>
      </section>
    </main>
  );
}
