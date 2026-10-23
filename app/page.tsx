import About from "./components/About";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import MissionVision from "./components/MissionVision";
import TruckRoad from "./components/TruckRoad";
import Splash from "./components/Splash";

export default function Home() {
  return (
    <>
      <Splash />
      <main>
        <Hero />
        <TruckRoad />
        <About />
        <MissionVision />
        <HowItWorks />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
