import Image from "next/image";
import { site } from "../lib/site";
import { Social } from "./Icons";

const iconCls = "h-4 w-4 shrink-0";
const stroke = { fill: "none", stroke: "currentColor", strokeWidth: 2 } as const;

const Mail = () => (
  <svg viewBox="0 0 24 24" className={iconCls} {...stroke} aria-hidden>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);
const Call = () => (
  <svg viewBox="0 0 24 24" className={iconCls} {...stroke} aria-hidden>
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
  </svg>
);
const Pin = () => (
  <svg viewBox="0 0 24 24" className={iconCls} {...stroke} aria-hidden>
    <path d="M12 21s7-6.5 7-12a7 7 0 0 0-14 0c0 5.5 7 12 7 12z" />
    <circle cx="12" cy="9" r="2.5" />
  </svg>
);

export default function Footer() {
  const link = "text-white/85 transition hover:text-white";
  return (
    <footer id="contact" className="bg-dark-green text-white">
      <div className="mx-auto max-w-6xl px-6">
        {/* Main row, as in the mockup: logo | links | social icons */}
        <div className="flex flex-col items-center gap-6 py-8 lg:flex-row lg:justify-between">
          <a href="#home" className="flex items-center gap-2.5">
            <Image src="/images/logo.png" alt="" width={44} height={44} loading="lazy" className="h-11 w-11" />
            <span className="whitespace-nowrap text-xl font-bold">{site.name}</span>
          </a>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap justify-center gap-x-7 gap-y-2 text-sm">
              {site.nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className={link}>
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex gap-3">
            {site.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-primary transition hover:-translate-y-1 hover:bg-light-green"
              >
                <Social name={s.icon} className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <address className="flex flex-col items-center gap-3 border-t border-white/10 py-5 text-sm not-italic text-white/80 md:flex-row md:flex-wrap md:justify-center md:gap-x-10 md:gap-y-3">
          <a href={`mailto:${site.email}`} className={`flex items-center gap-2 ${link}`}>
            <Mail /> {site.email}
          </a>
          <a href={`tel:${site.phone.replace(/\s/g, "")}`} className={`flex items-center gap-2 ${link}`}>
            <Call /> {site.phone}
          </a>
          <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className={`flex items-center gap-2 ${link}`}>
            <Pin /> {site.address}
          </a>
        </address>
      </div>
      <p className="border-t border-white/10 py-4 text-center text-xs text-white/60">
        © 2026 {site.name}. {site.tagline}.
      </p>
    </footer>
  );
}
