import Image from "next/image";

// Decorative strip above About: the brand truck drives across the page on a looping road.
export default function TruckRoad() {
  return (
    <div aria-hidden className="relative h-28 overflow-hidden bg-cream sm:h-36 md:h-40">
      <div className="truck-drive absolute bottom-3 left-0 w-36 sm:w-48 md:w-56">
        <div className="truck-bounce">
          <Image
            src="/icons/brand-truck.webp"
            alt=""
            width={640}
            height={431}
            sizes="224px"
            className="h-auto w-full drop-shadow-[0_10px_8px_rgba(14,90,50,0.25)]"
          />
        </div>
      </div>
      {/* road */}
      <div className="absolute inset-x-0 bottom-0 h-3 bg-primary/15" />
      <div className="road-dash absolute inset-x-0 bottom-[5px] h-0.5" />
    </div>
  );
}
