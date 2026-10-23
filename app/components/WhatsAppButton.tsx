import { site } from "../lib/site";

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hi Sabjii Le Lo, I'd like to know more.")}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_10px_25px_-8px_rgba(37,211,102,0.8)] transition hover:scale-110 sm:bottom-6 sm:right-6"
    >
      <span aria-hidden className="wa-pulse absolute inset-0 rounded-full bg-[#25d366]" />
      <svg viewBox="0 0 32 32" className="relative h-8 w-8" fill="currentColor" aria-hidden>
        <path d="M16.04 3C9.4 3 4 8.4 4 15.04c0 2.12.55 4.18 1.6 6L4 28l7.1-1.86a12 12 0 0 0 4.94 1.06C22.68 27.2 28 21.8 28 15.04 28 8.4 22.68 3 16.04 3zm0 21.9c-1.77 0-3.5-.48-5.02-1.38l-.36-.21-4.2 1.1 1.12-4.1-.24-.38a9.9 9.9 0 0 1-1.5-5.28c0-5.5 4.46-9.96 9.96-9.96 5.5 0 9.96 4.46 9.96 9.96 0 5.5-4.46 9.25-9.72 9.25zm5.46-7.46c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" />
      </svg>
    </a>
  );
}
