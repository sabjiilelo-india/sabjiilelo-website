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
  phone: "+91 73899 45999",
  whatsapp: "917389945999",
  mapsUrl:
    "https://www.google.com/maps/place/23%C2%B011'14.2%22N+79%C2%B055'04.2%22E/@23.1872882,79.9152489,17z/data=!3m1!4b1!4m4!3m3!8m2!3d23.1872882!4d79.9178238?hl=en",
  address: "Jabalpur, Madhya Pradesh, India",
  socials: [
    { label: "Facebook", href: "#", icon: "facebook" },
    { label: "Instagram", href: "#", icon: "instagram" },
    { label: "YouTube", href: "#", icon: "youtube" },
    { label: "Twitter", href: "#", icon: "twitter" },
    { label: "LinkedIn", href: "#", icon: "linkedin" },
  ],
} as const;
