"use client";

import Hero from "@/components/Hero";
import { FloatingDock } from "@/components/ui/floating-dock";
import Card from "@/components/Card";
import { ExpEdu } from "@/components/ExpEdu";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";



export default function Home() {
  return (
    <main className="relative bg-bground flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full z-20 pb-20">
        <Hero />
        <Card />
        <ExpEdu />
        <Projects />
        <Footer />
      </div>

      <FloatingDock />
    </main>
  );
}
