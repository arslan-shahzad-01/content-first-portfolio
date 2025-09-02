import { navigationItems } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { Home, User, Code, GraduationCap, Send } from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap = {
  about: User,
  skills: Code,
  projects: Home,
  education: GraduationCap,
  contact: Send,
};

interface MobileNavProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export const MobileNav = ({ activeSection, onSectionChange }: MobileNavProps) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border px-4 pb-safe pt-2 z-50">
      <div className="flex justify-around items-center max-w-md mx-auto">
        {navigationItems.map((item) => {
          const IconComponent = iconMap[item.id as keyof typeof iconMap];
          return (
            <Button
              key={item.id}
              variant="ghost"
              size="sm"
              className={cn(
                "flex flex-col items-center gap-1 h-auto py-2 px-2",
                "relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5",
                "after:bg-primary after:scale-x-0 after:transition-transform",
                activeSection === item.id && "text-primary after:scale-x-100"
              )}
              onClick={() => onSectionChange(item.id)}
              asChild
            >
              <a href={`#${item.id}`}>
                <IconComponent className="w-5 h-5" />
                <span className="text-xs">{item.label}</span>
              </a>
            </Button>
          );
        })}
      </div>
    </nav>
  );
};
