import { personalInfo } from "@/data/portfolio";

export const AboutSection = () => {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold text-foreground mb-6">About Me</h2>
      
      <div className="space-y-4 text-muted-foreground leading-relaxed">
        <p>{personalInfo.about}</p>
        <p>{personalInfo.aboutExtended}</p>
      </div>
    </section>
  );
};