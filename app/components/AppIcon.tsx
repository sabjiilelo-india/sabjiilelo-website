import Image from "next/image";

export type IconName = "leaf" | "farmer" | "house" | "truck" | "heart" | "heart-leaf" | "phone" | "basket";

// Intrinsic sizes of the optimized files in /public/icons (used to avoid layout shift).
const dims: Record<IconName, [number, number]> = {
  leaf: [320, 226],
  farmer: [280, 320],
  house: [320, 287],
  truck: [320, 279],
  heart: [320, 254],
  "heart-leaf": [320, 253],
  phone: [274, 320],
  basket: [320, 283],
};

export default function AppIcon({ name, className = "h-9 w-9" }: { name: IconName; className?: string }) {
  const [w, h] = dims[name];
  return (
    <Image
      src={`/icons/${name}.webp`}
      alt=""
      width={w}
      height={h}
      sizes="96px"
      className={`object-contain ${className}`}
    />
  );
}
