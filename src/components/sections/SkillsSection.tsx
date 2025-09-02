import { skills, strengths, fields } from "@/data/portfolio";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const SkillsSection = () => {
  return (
    <section className="space-y-6 lg:space-y-8">
      <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 lg:mb-6">Skills & Expertise</h2>
      
      {/* Fields of Expertise */}
      <Card className="p-4 lg:p-6 bg-card border-border">
        <h3 className="text-lg lg:text-xl font-semibold text-foreground mb-3 lg:mb-4">Fields of Expertise</h3>
        <div className="flex flex-wrap gap-2 lg:gap-3">
          {fields.map((field) => (
            <Badge key={field} variant="default" className="px-3 py-1.5 lg:px-4 lg:py-2 text-xs lg:text-sm">
              {field}
            </Badge>
          ))}
        </div>
      </Card>

      {/* Core Strengths */}
      <Card className="p-4 lg:p-6 bg-card border-border">
        <h3 className="text-lg lg:text-xl font-semibold text-foreground mb-3 lg:mb-4">Core Strengths</h3>
        <div className="grid grid-cols-1 gap-3 lg:grid-cols-2 lg:gap-4">
          {strengths.map((strength, index) => (
            <div key={index} className="flex items-center gap-2 lg:gap-3 p-2 lg:p-3 rounded-lg bg-secondary/50">
              <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-primary rounded-full"></div>
              <span className="text-sm lg:text-base text-foreground">{strength}</span>
            </div>
          ))}
        </div>
      </Card>

      {/* Technical Skills */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
        <Card className="p-4 lg:p-6 bg-card border-border">
          <h3 className="text-lg lg:text-xl font-semibold text-foreground mb-3 lg:mb-4">Programming Languages</h3>
          <div className="flex flex-wrap gap-1.5 lg:gap-2">
            {skills.languages.map((lang) => (
              <Badge key={lang} variant="secondary" className="text-xs lg:text-sm">
                {lang}
              </Badge>
            ))}
          </div>
        </Card>

        <Card className="p-4 lg:p-6 bg-card border-border">
          <h3 className="text-lg lg:text-xl font-semibold text-foreground mb-3 lg:mb-4">Frameworks & Libraries</h3>
          <div className="flex flex-wrap gap-2">
            {skills.frameworks_libraries.map((framework) => (
              <Badge key={framework} variant="secondary" className="text-sm">
                {framework}
              </Badge>
            ))}
          </div>
        </Card>

        <Card className="p-6 bg-card border-border">
          <h3 className="text-xl font-semibold text-foreground mb-4">Databases</h3>
          <div className="flex flex-wrap gap-2">
            {skills.databases.map((db) => (
              <Badge key={db} variant="secondary" className="text-sm">
                {db}
              </Badge>
            ))}
          </div>
        </Card>

        <Card className="p-6 bg-card border-border">
          <h3 className="text-xl font-semibold text-foreground mb-4">Tools & Platforms</h3>
          <div className="flex flex-wrap gap-2">
            {skills.tools_platforms.map((tool) => (
              <Badge key={tool} variant="secondary" className="text-sm">
                {tool}
              </Badge>
            ))}
          </div>
        </Card>
      </div>

      {/* Other Skills */}
      <Card className="p-6 bg-card border-border">
        <h3 className="text-xl font-semibold text-foreground mb-4">Other Skills</h3>
        <div className="flex flex-wrap gap-2">
          {skills.other_skills.map((skill) => (
            <Badge key={skill} variant="outline" className="text-sm">
              {skill}
            </Badge>
          ))}
        </div>
      </Card>
    </section>
  );
};
