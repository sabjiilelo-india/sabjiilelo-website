import AppIcon from "./AppIcon";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const steps = [
  { title: "Order on App", text: "Choose fresh vegetables in just a few clicks", icon: <AppIcon name="phone" className="h-12 w-12" />, ring: "bg-light-green" },
  { title: "We Source", text: "Directly from local farmers", icon: <AppIcon name="farmer" className="h-12 w-12" />, ring: "bg-light-green" },
  { title: "We Deliver", text: "Fresh vegetables at your doorstep", icon: <AppIcon name="truck" className="h-12 w-12" />, ring: "bg-light-green" },
  { title: "You Enjoy", text: "Healthy and tasty meals with your family", icon: <AppIcon name="house" className="h-12 w-12" />, ring: "bg-beige" },
];

// Three chevrons that light up one after another, pointing in the flow direction.
function Chevrons({ step, className = "" }: { step: number; className?: string }) {
  return (
    <span aria-hidden className={`flex items-center text-primary ${className}`} style={{ "--step": step } as React.CSSProperties}>
      {[0, 1, 2].map((i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          className="flow-chev -mx-1 h-6 w-6"
          style={{ "--i": i } as React.CSSProperties}
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m9 6 6 6-6 6" />
        </svg>
      ))}
    </span>
  );
}

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="bg-gradient-to-b from-cream via-[#eef6e6] to-cream px-4 py-14 sm:px-6 md:py-20"
    >
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="rounded-[2rem] bg-white/80 p-6 shadow-[0_30px_60px_-30px_rgba(14,90,50,0.35)] ring-1 ring-primary/10 backdrop-blur sm:p-8 md:p-12">
            <SectionHeading eyebrow="Simple steps" title="How It" accent="Works" align="center" />
            <p className="mx-auto mt-3 max-w-md text-center text-sm text-[#1c2a20]/70">
              From the farm to your table in four simple steps.
            </p>

            {/* Mobile: vertical timeline. md+: four columns joined by a line with moving arrows. */}
            <div className="relative mt-10">
              <div
                aria-hidden
                className="absolute left-[12.5%] right-[12.5%] top-10 hidden h-0 -translate-y-1/2 border-t-2 border-dashed border-primary/20 md:block"
              />
              {["left-1/4", "left-1/2", "left-3/4"].map((pos, n) => (
                <Chevrons
                  key={pos}
                  step={n}
                  className={`absolute top-10 hidden -translate-x-1/2 -translate-y-1/2 rounded-full bg-white px-1 md:flex ${pos}`}
                />
              ))}


              <ol className="relative flex flex-col md:grid md:grid-cols-4 md:gap-6">
                {steps.map((s, i) => {
                  const last = i === steps.length - 1;
                  return (
                    <li key={s.title} className="relative">
                      {!last && (
                        <span
                          aria-hidden
                          className="absolute left-10 top-20 h-[calc(100%-5rem)] w-0 -translate-x-px border-l-2 border-dashed border-primary/25 md:hidden"
                        >
                          <Chevrons step={i} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90 bg-white px-1" />
                        </span>
                      )}
                      <Reveal
                        delay={i * 150}
                        className={`group flex items-start gap-5 ${last ? "pb-0" : "pb-14"} md:flex-col md:items-center md:gap-0 md:pb-0 md:text-center`}
                      >
                        <div
                          className={`pop flex h-20 w-20 shrink-0 items-center justify-center rounded-full shadow-[0_12px_24px_-10px_rgba(14,90,50,0.5)] ring-4 ring-white transition duration-300 group-hover:-translate-y-1 ${s.ring}`}
                        >
                          <span className="wiggle">{s.icon}</span>
                        </div>
                        <div className="pt-1 md:pt-4">
                          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-sm font-bold text-white shadow-md md:mx-auto">
                            {i + 1}
                          </span>
                          <h3 className="mt-2 text-lg font-semibold text-[#0b1a10]">{s.title}</h3>
                          <p className="mt-1 max-w-56 text-sm leading-relaxed text-[#1c2a20]/75 md:mx-auto md:max-w-44">
                            {s.text}
                          </p>
                        </div>
                      </Reveal>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
