"use client";

import { useEffect, useState } from "react";
import { site } from "../lib/site";
import { Arrow } from "./Icons";

const slides = [
  {
    lang: "en",
    title: ["Fresh Vegetables", "From Farmers", "To Your Home"],
    text: ["Farm fresh. Chemical-free. Direct from farmers.", "Healthy families. Stronger farmers. A greener tomorrow."],
  },
  {
    lang: "en",
    title: ["Healthy Homes,", "Happy Farmers,", "Fresh Every Day"],
    text: ["Fair income for every farmer.", "Fresh and simple, delivered to your door."],
  },
  {
    lang: "hi",
    title: ["Taazi Sabzi,", "Seedhe Aapke", "Ghar Tak"],
    text: ["Seedhe kisan se, bina kisi beech ke.", "Swasth parivar, mazboot kisan, hara-bhara kal."],
  },
  {
    lang: "hi",
    title: ["Kisan Se", "Ghar Tak,", "Har Din Taaza"],
    text: ["Khet ki taazgi, ab aapki rasoi tak.", "Sabjii Le Lo, har ghar ki pehli pasand."],
  },
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
    <div className="max-w-xl lg:max-w-md xl:max-w-lg">
      <div className="grid">
        {slides.map((s, n) => (
          <div
            key={n}
            aria-hidden={n !== i}
            lang={s.lang}
            className={`col-start-1 row-start-1 transition-all duration-700 ease-out ${
              n === i ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
            }`}
          >
            <p role="heading" aria-level={2} className="text-[2.4rem] font-bold leading-[1.08] text-primary sm:text-5xl lg:text-[3.4rem]">
              {s.title.map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
            </p>
            <p className="mt-4 text-base leading-relaxed text-[#1c2a20] sm:text-lg">
              {s.text.map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
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
