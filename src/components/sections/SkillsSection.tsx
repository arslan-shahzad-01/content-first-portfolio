import { skills, strengths, fields } from "@/data/portfolio";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const SkillsSection = () => {
  return (
    <section className="space-y-8">
      <h2 className="text-3xl font-bold text-foreground mb-6">Skills & Expertise</h2>
      
      {/* Fields of Expertise */}
      <Card className="p-6 bg-card border-border">
        <h3 className="text-xl font-semibold text-foreground mb-4">Fields of Expertise</h3>
        <div className="flex flex-wrap gap-3">
          {fields.map((field) => (
            <Badge key={field} variant="default" className="px-4 py-2 text-sm">
              {field}
            </Badge>
          ))}
        </div>
      </Card>

      {/* Core Strengths */}
      <Card className="p-6 bg-card border-border">
        <h3 className="text-xl font-semibold text-foreground mb-4">Core Strengths</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {strengths.map((strength, index) => (
            <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-foreground">{strength}</span>
            </div>
          ))}
        </div>
      </Card>

      {/* Technical Skills */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6 bg-card border-border">
          <h3 className="text-xl font-semibold text-foreground mb-4">Programming Languages</h3>
          <div className="flex flex-wrap gap-2">
            {skills.languages.map((lang) => (
              <Badge key={lang} variant="secondary" className="text-sm">
                {lang}
              </Badge>
            ))}
          </div>
        </Card>

        <Card className="p-6 bg-card border-border">
          <h3 className="text-xl font-semibold text-foreground mb-4">Frameworks & Libraries</h3>
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
