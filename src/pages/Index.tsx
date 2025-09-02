import { useState, useEffect } from "react";
import { Sidebar } from "@/components/Sidebar";
import { Navigation } from "@/components/Navigation";
import { MobileHeader } from "@/components/MobileHeader";
import { MobileNav } from "@/components/MobileNav";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { navigationItems } from "@/data/portfolio";
import { ProjectsSection } from "@/components/sections/PortfolioSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Index() {
  const [activeSection, setActiveSection] = useState(() => {
    // Get initial section from URL hash or default to "about"
    const hash = window.location.hash.slice(1);
    return navigationItems.some(item => item.id === hash) ? hash : "about";
  });

  useEffect(() => {
    // Update hash when section changes
    window.location.hash = activeSection;

    // Listen for hash changes (back/forward navigation)
    const handleHashChange = () => {
      const newHash = window.location.hash.slice(1);
      if (navigationItems.some(item => item.id === newHash)) {
        setActiveSection(newHash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [activeSection]);

  const renderSection = () => {
    switch (activeSection) {
      case "about":
        return <AboutSection />;
      case "skills":
        return <SkillsSection />;
      case "projects":
        return <ProjectsSection />;
      case "education":
        return <EducationSection />;
      case "contact":
        return <ContactSection />;
      default:
        return <AboutSection />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="lg:hidden flex flex-col min-h-screen">
        <MobileHeader />
        <main className="flex-1 px-3 pt-4 pb-28">
          {renderSection()}
        </main>
        <MobileNav
          activeSection={activeSection}
          onSectionChange={setActiveSection}
        />
      </div>
      <div className="hidden lg:block">
        <div className="max-w-7xl mx-auto p-6">
          <div className="flex gap-8">
            <aside className="w-auto flex-shrink-0">
              <Sidebar />
            </aside>
            <main className="flex-1 min-w-0">
              <div className="bg-card rounded-xl border border-border p-8">
                <Navigation 
                  activeSection={activeSection} 
                  onSectionChange={setActiveSection} 
                />
                {renderSection()}
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
