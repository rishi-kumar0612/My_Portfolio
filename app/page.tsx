"use client";

import Hero from "@/components/Hero";
//import { FloatingNav } from "@/components/ui/FloatingNav";
//import { FaHome } from "react-icons/fa";
//import Grid from "@/components/Grid";
import { FloatingDock } from "@/components/ui/floating-dock";
import { links } from "@/data/icon";
//import { WobbleCard } from "@/components/ui/wobble-card";
import Card from "@/components/Card";
import { ExpEdu } from "@/components/ExpEdu";
// page.tsx

import Projects from "@/components/Projects";

//import { Timeline } from "@/components/ui/timeline";


export default function Home() {
  return (
    <main className = "relative bg-bground flex justified-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className = " max-w-7xl- w-full z-20" >
        {/*{<FloatingNav navItems={[
          {name: 'Home', link:'/', icon: <FaHome/>}
        ]}/>}*/}
        <Hero/>
        {/*<Grid/>*/}
        <Card/>
        <ExpEdu/>
        <Projects />
      </div>
      
        <FloatingDock items={links}/>
      
    </main>
  );
}
