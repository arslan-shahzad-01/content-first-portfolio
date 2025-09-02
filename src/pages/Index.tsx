import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { Navigation } from "@/components/Navigation";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { ContactSection } from "@/components/sections/ContactSection";

const Index = () => {
  const [activeSection, setActiveSection] = useState("about");

  const renderSection = () => {
    switch (activeSection) {
      case "about":
        return <AboutSection />;
      case "services":
        return <ServicesSection />;
      case "portfolio":
        return <PortfolioSection />;
      case "blog":
        return (
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground mb-6">Blog</h2>
            <p className="text-muted-foreground">Blog section coming soon...</p>
          </section>
        );
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
