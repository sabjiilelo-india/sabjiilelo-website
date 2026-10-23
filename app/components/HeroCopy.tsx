"use client";

import { useEffect, useState } from "react";
import { site } from "../lib/site";
import { Arrow } from "./Icons";

const slides = [
  { lang: "en", title: "Bringing Fresh Vegetables from Farmers to Your Home." },
  { lang: "hi", title: "Taazgi Ka Vaada, Apno Se Bhi Zyada." },
  { lang: "en", title: "Farm Fresh, Family Blessed." },
  { lang: "hi", title: "Aapki Rasoi Ka Taaza Saathi." },
  { lang: "en", title: "Freshness Grown with Care, Delivered with Love." },
  { lang: "hi", title: "Har Kisan Se, Har Ghar Tak." },
];

const INTERVAL = 5000;

// Rotating hero copy. Index comes from the clock so the desktop and mobile copies stay in sync.
export default function HeroCopy() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const tick = () => setI(Math.floor(Date.now() / INTERVAL) % slides.length);
    const id = setInterval(tick, 500);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="max-w-xl lg:max-w-lg xl:max-w-xl">
      <div className="grid min-h-[8.5rem] sm:min-h-[10.5rem] lg:min-h-[11.5rem] xl:min-h-[13rem]">
        {slides.map((s, n) => (
          <div
            key={n}
            aria-hidden={n !== i}
            lang={s.lang}
            className={`col-start-1 row-start-1 transition-all duration-700 ease-out ${
              n === i ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
            }`}
          >
            <p
              role="heading"
              aria-level={2}
              className="text-[2.2rem] font-bold leading-[1.12] text-primary sm:text-5xl lg:text-[2.9rem] xl:text-[3.3rem]"
            >
              {s.title}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center gap-5">
        <a
          href={site.downloadUrl}
          className="hero-in shine group inline-flex min-h-12 items-center gap-2 rounded-full bg-primary px-7 font-semibold text-white shadow-lg shadow-primary/30 transition [--delay:300ms] hover:brightness-125"
        >
          Download App
          <Arrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
}
