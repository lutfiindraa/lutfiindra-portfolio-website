"use client";

import { HomeSection } from "@/components/sections/Home";
import { AboutSection } from "@/components/sections/About";
import { ProjectsSection } from "@/components/sections/Projects";
import { ContactSection } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="flex flex-col gap-0 pb-20">
      <HomeSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />

      <footer className="py-10 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Lutfi Indra Nur Praditya. All rights reserved.</p>
      </footer>
    </div>
  );
}
