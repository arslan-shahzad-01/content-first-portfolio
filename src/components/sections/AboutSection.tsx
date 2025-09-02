import { personalInfo, fields, strengths } from "@/data/portfolio";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Code, Brain, Sparkles, ChevronRight } from "lucide-react";

export const AboutSection = () => {
  return (
    <section className="space-y-6 lg:space-y-8">
      <div className="space-y-4">
        <h2 className="text-2xl lg:text-3xl font-bold text-foreground">About Me</h2>
        <div className="flex flex-wrap items-center gap-2">
          {fields.map((field, index) => (
            <Badge key={index} variant="default" className="bg-primary/10 text-primary hover:bg-primary/20">
              {field}
            </Badge>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
        {/* Main About Card */}
        <Card className="p-4 lg:p-6 bg-card border-border col-span-1 lg:col-span-2">
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p className="first-letter:text-3xl lg:first-letter:text-4xl first-letter:font-bold first-letter:text-primary first-letter:mr-1">
              {personalInfo.about}
            </p>
            <p className="text-sm lg:text-base">{personalInfo.aboutExtended}</p>
          </div>
        </Card>

        {/* Quick Facts */}
        <Card className="p-6 bg-card border-border">
          <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
            <Brain className="w-5 h-5 text-primary" />
            Areas of Focus
          </h3>
          <ul className="space-y-3">
            {fields.map((field, index) => (
              <li key={index} className="flex items-start gap-2">
                <ChevronRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{field}</span>
              </li>
            ))}
          </ul>
        </Card>

        {/* Key Strengths */}
        <Card className="p-6 bg-card border-border">
          <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            Key Strengths
          </h3>
          <ul className="space-y-3">
            {strengths.map((strength, index) => (
              <li key={index} className="flex items-start gap-2">
                <ChevronRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{strength}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </section>
  );
};