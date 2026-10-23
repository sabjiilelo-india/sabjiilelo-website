import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

export function Leaf(p: P) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden {...p}>
      <path d="M8 38C6 20 18 8 41 7c1 22-9 33-27 33" fill="#4caf3d" />
      <path d="M8 38C16 26 24 19 36 13" stroke="#e9f7e1" strokeWidth="2" strokeLinecap="round" />
      <path d="M8 38c-1-4-1-7 0-10" stroke="#0e5a32" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export function Farmer(p: P) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden {...p}>
      <ellipse cx="24" cy="17" rx="14" ry="4" fill="#d9822b" />
      <path d="M15 17c0-7 4-10 9-10s9 3 9 10z" fill="#f2a53a" />
      <circle cx="24" cy="24" r="7" fill="#e8b48a" />
      <path d="M8 44c0-9 7-14 16-14s16 5 16 14z" fill="#ff8a3d" />
      <path d="M20 30l4 6 4-6" stroke="#fff" strokeWidth="2" />
    </svg>
  );
}

export function House(p: P) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden {...p}>
      <path d="M5 24 24 7l19 17" stroke="#0e5a32" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 22v20h28V22L24 10z" fill="#ff8a3d" />
      <path d="M20 42V30h8v12z" fill="#fff" />
      <path d="M30 14V8h4v10" fill="#0e5a32" />
    </svg>
  );
}

export function Truck(p: P) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden {...p}>
      <rect x="3" y="12" width="26" height="22" rx="3" fill="#0e5a32" />
      <path d="M29 18h9l7 8v8H29z" fill="#0e5a32" />
      <path d="M33 21h4l4 5h-8z" fill="#d9f2e0" />
      <circle cx="12" cy="36" r="5" fill="#1c2a20" />
      <circle cx="12" cy="36" r="2" fill="#fff" />
      <circle cx="36" cy="36" r="5" fill="#1c2a20" />
      <circle cx="36" cy="36" r="2" fill="#fff" />
      <path d="M11 24l4 4 8-8" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Heart(p: P) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden {...p}>
      <path d="M24 42C8 30 5 21 5 15a10 10 0 0 1 19-4 10 10 0 0 1 19 4c0 6-3 15-19 27z" fill="#ff8a3d" />
    </svg>
  );
}

export function Target(p: P) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden {...p}>
      <circle cx="22" cy="26" r="16" />
      <circle cx="22" cy="26" r="10" />
      <circle cx="22" cy="26" r="4" />
      <path d="M22 26 40 8M34 6h8v8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Eye(p: P) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden {...p}>
      <path d="M3 24C9 14 16 10 24 10s15 4 21 14c-6 10-13 14-21 14S9 34 3 24z" />
      <circle cx="24" cy="24" r="7" />
      <circle cx="24" cy="24" r="2.5" fill="currentColor" />
    </svg>
  );
}

export function Phone(p: P) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden {...p}>
      <rect x="13" y="4" width="22" height="40" rx="4" stroke="#0e5a32" strokeWidth="3" />
      <path d="M21 9h6" stroke="#0e5a32" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="24" cy="38" r="2" fill="#0e5a32" />
    </svg>
  );
}

export function Arrow(p: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden {...p}>
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PlayLogo(p: P) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden {...p}>
      <path d="M3 2.5v19L13.5 12z" fill="#00d3ff" />
      <path d="M3 2.5 17 10l-3.5 2z" fill="#00f076" />
      <path d="M3 21.5 17 14l-3.5-2z" fill="#ff3a44" />
      <path d="M17 10l4 2-4 2-3.5-2z" fill="#ffd400" />
    </svg>
  );
}

export function AppleLogo(p: P) {
  return (
    <svg viewBox="0 0 24 24" fill="#fff" aria-hidden {...p}>
      <path d="M16.4 12.7c0-2.4 2-3.5 2-3.6-1.1-1.600-2.800-1.800-3.400-1.800-1.400-.1-2.800.9-3.500.9s-1.800-.8-3-.8c-1.500 0-3 .9-3.800 2.300-1.600 2.800-.4 7 1.200 9.300.8 1.100 1.700 2.400 2.900 2.300 1.200 0 1.600-.7 3-.7s1.800.7 3 .7c1.300 0 2.100-1.100 2.800-2.200.9-1.300 1.300-2.500 1.300-2.600-.1 0-2.500-1-2.500-3.800zM14.200 5.600c.6-.8 1.100-1.800.9-2.900-.9 0-2 .6-2.700 1.400-.6.700-1.100 1.800-1 2.800 1 .1 2.100-.5 2.800-1.300z" />
    </svg>
  );
}

export function Social({ name, ...p }: { name: string } & P) {
  const paths: Record<string, React.ReactNode> = {
    facebook: <path d="M14 8h3V4h-3c-2.800 0-4 1.800-4 4v2H7v4h3v8h4v-8h3l1-4h-4V8z" fill="currentColor" />,
    instagram: (
      <>
        <rect x="4" y="4" width="16" height="16" rx="5" stroke="currentColor" strokeWidth="2" fill="none" />
        <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="2" fill="none" />
        <circle cx="16.800" cy="7.200" r="1.200" fill="currentColor" />
      </>
    ),
    youtube: (
      <>
        <rect x="3" y="6" width="18" height="12" rx="4" fill="currentColor" />
        <path d="M10.500 9.500v5l4.500-2.500z" fill="#0e5a32" />
      </>
    ),
    twitter: (
      <path d="M17.8 3h3L14.2 10.500 22 21h-6.100l-4.800-6.200L5.600 21h-3l7-8L2.200 3h6.200l4.300 5.700L17.800 3zm-1.100 16.200h1.700L7.500 4.700H5.700l11 14.500z" fill="currentColor" />
    ),
    linkedin: (
      <path d="M6 9h3v10H6zM7.500 4.500a1.800 1.800 0 1 1 0 3.600 1.800 1.800 0 0 1 0-3.600zM11 9h3v1.500c.5-1 1.700-1.800 3.200-1.800 3 0 3.800 2 3.800 4.600V19h-3v-5c0-1.200-.2-2.200-1.600-2.200S14 12.800 14 14v5h-3z" fill="currentColor" />
    ),
  };
  return (
    <svg viewBox="0 0 24 24" aria-hidden {...p}>
      {paths[name]}
    </svg>
  );
}
