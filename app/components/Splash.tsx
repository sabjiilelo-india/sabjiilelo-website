import Image from "next/image";
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

      <div className="relative flex items-center justify-center">
        <Image src="/images/logo-full.webp" alt="" width={720} height={645} priority className="splash-logo relative h-auto w-64 drop-shadow-[0_8px_20px_rgba(0,0,0,0.35)] sm:w-80" />
      </div>
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
