import { personalInfo } from "@/data/portfolio";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export const MobileHeader = () => {
  return (
    <div className="flex items-center gap-4 p-4 bg-card border-b border-border">
      <Avatar className="w-12 h-12">
        <AvatarImage src={personalInfo.avatar} alt={personalInfo.name} />
        <AvatarFallback className="text-lg bg-primary text-primary-foreground">
          {personalInfo.name.split(" ").map(n => n[0]).join("")}
        </AvatarFallback>
      </Avatar>
      <div>
        <h1 className="font-bold text-foreground">{personalInfo.name}</h1>
        <p className="text-xs text-muted-foreground">{personalInfo.role}</p>
      </div>
      <Badge variant="default" className="ml-auto bg-primary text-primary-foreground animate-pulse text-xs">
        Available
      </Badge>
    </div>
  );
};
