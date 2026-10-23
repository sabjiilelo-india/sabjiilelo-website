import Image from "next/image";
import { site } from "../lib/site";
import AppIcon from "./AppIcon";

// CSS-only intro: plays on load, then fades itself out.
export default function Splash() {
  return (
    <div className="splash" aria-hidden>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,#17803f_0%,#0e5a32_45%,#064420_80%,#032a14_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(126,217,87,0.28),transparent_60%)]" />

      <AppIcon name="leaf" className="leaf-float absolute left-[8%] top-[14%] h-12 w-12 opacity-90 [--rot:-20deg]" />
      <AppIcon name="leaf" className="leaf-float absolute right-[10%] top-[20%] h-10 w-10 opacity-90 [--rot:30deg] [animation-delay:-3s]" />
      <AppIcon name="leaf" className="leaf-float absolute bottom-[30%] left-[14%] h-9 w-9 opacity-80 [--rot:10deg] [animation-delay:-5s]" />
      <AppIcon name="leaf" className="leaf-float absolute bottom-[34%] right-[16%] h-12 w-12 opacity-90 [--rot:-35deg] [animation-delay:-2s]" />

      <div className="relative flex h-32 w-32 items-center justify-center">
        <span className="splash-ring h-32 w-32" />
        <span className="splash-ring h-32 w-32 [animation-delay:0.7s]" />
        <Image src="/images/logo.png" alt="" width={128} height={128} priority className="splash-logo relative h-28 w-28 drop-shadow-[0_8px_20px_rgba(0,0,0,0.35)]" />
      </div>
      <p className="splash-word relative text-4xl font-bold sm:text-5xl">
        {site.name.split("").map((c, i) => (
          <span key={i} style={{ animationDelay: `${0.6 + i * 0.06}s` }} className={i >= 7 ? "text-[#9be36f]" : ""}>
            {c === " " ? "\u00A0" : c}
          </span>
        ))}
      </p>
      <p className="splash-tag relative text-sm uppercase tracking-[0.2em] text-white/90">{site.tagline}</p>
      <div className="splash-bar relative mt-4" />

      {/* truck drives along the bottom while loading */}
      <div className="splash-truck absolute bottom-[22px] left-0 w-28 sm:w-40">
        <Image src="/icons/brand-truck.webp" alt="" width={640} height={431} className="h-auto w-full drop-shadow-[0_10px_10px_rgba(0,0,0,0.35)]" />
      </div>
      <div className="absolute inset-x-0 bottom-5 h-3 bg-black/25" />
      <div className="road-dash absolute inset-x-0 bottom-[25px] h-0.5" />
    </div>
  );
}
