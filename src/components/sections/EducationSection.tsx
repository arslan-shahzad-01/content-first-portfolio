import { education, achievements, interests } from "@/data/portfolio";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Trophy, Heart } from "lucide-react";

export const EducationSection = () => {
  return (
    <section className="space-y-8">
      <h2 className="text-3xl font-bold text-foreground mb-6">Education & Achievements</h2>
      
      {/* Education */}
      <Card className="p-6 bg-card border-border">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
            <GraduationCap className="w-6 h-6 text-primary" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-foreground mb-2">{education.degree}</h3>
            <p className="text-muted-foreground mb-1">{education.institution}</p>
            <div className="flex flex-wrap gap-2 mb-2">
              <Badge variant="outline" className="text-sm">
                {education.status}
              </Badge>
              <Badge variant="secondary" className="text-sm">
                Expected Graduation: {education.graduation_year}
              </Badge>
            </div>
          </div>
        </div>
      </Card>

      {/* Achievements */}
      <Card className="p-6 bg-card border-border">
        <div className="flex items-center gap-3 mb-4">
          <Trophy className="w-6 h-6 text-primary" />
          <h3 className="text-xl font-semibold text-foreground">Key Achievements</h3>
        </div>
        <div className="space-y-3">
          {achievements.map((achievement, index) => (
            <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-secondary/30">
              <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
              <p className="text-foreground text-sm leading-relaxed">{achievement}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* Interests */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6 bg-card border-border">
          <div className="flex items-center gap-3 mb-4">
            <Heart className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-semibold text-foreground">Hobbies</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {interests.hobbies.map((hobby) => (
              <Badge key={hobby} variant="secondary" className="text-sm">
                {hobby}
              </Badge>
            ))}
          </div>
        </Card>

        <Card className="p-6 bg-card border-border">
          <div className="flex items-center gap-3 mb-4">
            <Heart className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-semibold text-foreground">Passions</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {interests.passions.map((passion) => (
              <Badge key={passion} variant="secondary" className="text-sm">
                {passion}
              </Badge>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};