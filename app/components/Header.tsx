"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "../lib/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState("/#home");

  // Shadow/shrink on scroll, reading progress, and scroll-spy for home sections.
  useEffect(() => {
    const ids = site.nav.map((n) => n.href.replace("/", "").slice(1));
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 12);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(100, (y / max) * 100) : 0);
      if (pathname !== "/") return;
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 140) current = id;
      }
      if (window.innerHeight + y >= document.documentElement.scrollHeight - 4) current = "contact";
      setActive(`/#${current}`);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [pathname]);

  const isActive = (href: string) => pathname === "/" && active === href;
  const onApp = pathname === "/app";

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-primary/10 bg-white/80 shadow-[0_10px_30px_-18px_rgba(14,90,50,0.45)] backdrop-blur-lg"
          : "bg-cream/90 backdrop-blur"
      }`}
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between px-4 transition-all duration-300 sm:px-6 ${
          scrolled ? "h-16" : "h-20"
        }`}
      >
        <Link href="/" aria-label={`${site.name} – home`} className="group flex items-center" onClick={() => setOpen(false)}>
          <Image
            src="/images/logo-full-dark.webp"
            alt={site.name}
            width={720}
            height={645}
            priority
            className={`w-auto transition-all duration-300 group-hover:scale-105 ${scrolled ? "h-14" : "h-[4.5rem]"}`}
          />
        </Link>

        <nav className="hidden items-center gap-1 text-sm font-medium lg:flex" aria-label="Main">
          {site.nav.map((n) => {
            const on = isActive(n.href);
            return (
              <Link
                key={n.href}
                href={n.href}
                aria-current={on ? "page" : undefined}
                className={`group/link relative px-4 py-2 transition-colors ${
                  on ? "text-primary" : "text-[#1c2a20] hover:text-primary"
                }`}
              >
                {n.label}
                <span
                  className={`absolute inset-x-4 bottom-0 h-0.5 origin-left rounded-full bg-[#4caf3d] transition-transform duration-300 ${
                    on ? "scale-x-100" : "scale-x-0 group-hover/link:scale-x-100"
                  }`}
                />
              </Link>
            );
          })}
          <Link
            href={site.downloadUrl}
            className={`ml-3 inline-flex min-h-9 py-1.5 items-center gap-2 rounded-xl bg-light-green px-4 font-bold text-primary transition hover:bg-[#c7ebd2] ${
              onApp ? "ring-2 ring-[#4caf3d]" : ""
            }`}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M7 18a4 4 0 0 1-.5-7.97A6 6 0 0 1 18 9.5 4.5 4.5 0 0 1 17.5 18" /><path d="M12 11v8m0 0-3-3m3 3 3-3" /></svg>
            Download App
          </Link>
        </nav>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-xl text-primary transition hover:bg-light-green lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile menu: animated height */}
      <div className={`grid transition-all duration-300 lg:hidden ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
        <div className="overflow-hidden">
          <nav className="border-t border-primary/10 bg-white/95 px-4 pb-4 pt-2" aria-label="Mobile">
            <ul className="flex flex-col gap-1">
              {site.nav.map((n) => {
                const on = isActive(n.href);
                return (
                  <li key={n.href}>
                    <Link
                      href={n.href}
                      tabIndex={open ? 0 : -1}
                      onClick={() => setOpen(false)}
                      className={`block rounded-xl px-4 py-3 text-base font-medium ${
                        on ? "font-semibold text-primary underline decoration-[#4caf3d] decoration-2 underline-offset-8" : "text-[#1c2a20]"
                      }`}
                    >
                      {n.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <Link
              href={site.downloadUrl}
              tabIndex={open ? 0 : -1}
              onClick={() => setOpen(false)}
              className="mt-3 flex min-h-11 items-center justify-center gap-2 rounded-xl bg-light-green font-bold text-primary"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M7 18a4 4 0 0 1-.5-7.97A6 6 0 0 1 18 9.5 4.5 4.5 0 0 1 17.5 18" /><path d="M12 11v8m0 0-3-3m3 3 3-3" /></svg>
              Download App
            </Link>
          </nav>
        </div>
      </div>

      {/* Scroll progress */}
      <span
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-0.5 origin-left bg-gradient-to-r from-primary to-[#7ed957] transition-[width] duration-150"
        style={{ width: `${progress}%` }}
      />
    </header>
  );
}
