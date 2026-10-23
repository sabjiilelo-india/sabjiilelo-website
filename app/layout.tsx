import type { Metadata, Viewport } from "next";
import { Poppins, Caveat } from "next/font/google";
import Header from "./components/Header";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  title: "Sabjii Le Lo – Fresh Vegetables From Farmers To Your Home",
  description:
    "Sabjii Le Lo connects local farmers directly with your home. Fresh vegetables, fair prices for farmers, healthy food for families.",
  openGraph: {
    title: "Sabjii Le Lo – Har Kisan Se Har Ghar Tak",
    description: "Fresh vegetables from farmers to your home.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0e5a32",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${poppins.variable} ${caveat.variable} antialiased`}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
