import { useState, useEffect } from "react";
import { Sidebar } from "@/components/Sidebar";
import { Navigation } from "@/components/Navigation";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { navigationItems } from "@/data/portfolio";
import { ProjectsSection } from "@/components/sections/PortfolioSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ContactSection } from "@/components/sections/ContactSection";

const Index = () => {
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
      <div className="flex max-w-7xl mx-auto p-6 gap-8">
        {/* Sidebar */}
        <div className="flex-shrink-0">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="flex-1 min-w-0">
          <div className="bg-card rounded-xl border border-border p-8 min-h-[calc(100vh-3rem)]">
            <Navigation 
              activeSection={activeSection} 
              onSectionChange={setActiveSection} 
            />
            {renderSection()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
