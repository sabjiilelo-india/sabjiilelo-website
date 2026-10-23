// Single place to edit nav links, store URLs and contact details.
export const site = {
  name: "Sabjii Le Lo",
  tagline: "Har Kisan Se Har Ghar Tak",
  nav: [
    { label: "Home", href: "/#home" },
    { label: "About", href: "/#about" },
    { label: "How It Works", href: "/#how-it-works" },
    { label: "Why Us", href: "/#why-us" },
    { label: "Contact", href: "/#contact" },
  ],
  // TODO: replace with the real store URLs
  downloadUrl: "/app",
  playStoreUrl: "/coming-soon",
  appStoreUrl: "/coming-soon",
  // TODO: replace with verified business details
  email: "support@sabjiilelo.com",
  phone: "+91 98765 43210",
  address: "Jabalpur, Madhya Pradesh, India",
  socials: [
    { label: "Facebook", href: "#", icon: "facebook" },
    { label: "Instagram", href: "#", icon: "instagram" },
    { label: "YouTube", href: "#", icon: "youtube" },
    { label: "Twitter", href: "#", icon: "twitter" },
    { label: "LinkedIn", href: "#", icon: "linkedin" },
  ],
} as const;
