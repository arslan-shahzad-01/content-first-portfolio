import { useState } from "react";
import { navigationItems } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export const Navigation = ({ activeSection, onSectionChange }: NavigationProps) => {
  return (
    <nav className="flex flex-wrap gap-2 mb-4 sm:mb-8">
      {navigationItems.map((item) => (
        <Button
          key={item.id}
          variant={activeSection === item.id ? "default" : "ghost"}
          className={cn(
            "text-xs sm:text-sm font-medium px-3 sm:px-6 py-2 rounded-full transition-all",
            activeSection === item.id 
              ? "bg-primary text-primary-foreground shadow-lg" 
              : "text-muted-foreground hover:text-foreground hover:bg-secondary"
          )}
          onClick={() => onSectionChange(item.id)}
          asChild
        >
          <a href={`#${item.id}`}>
            {item.label}
          </a>
        </Button>
      ))}
    </nav>
  );
};