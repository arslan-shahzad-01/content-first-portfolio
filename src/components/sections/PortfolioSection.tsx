import { projects } from "@/data/portfolio";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Star } from "lucide-react";

export const ProjectsSection = () => {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold text-foreground mb-6">Featured Projects</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project) => (
          <Card key={project.id} className="overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 group">
            <div className="aspect-video bg-muted overflow-hidden">
              <img 
                src={project.image} 
                alt={project.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            <div className="p-6 space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
              
              {/* Technologies */}
              <div>
                <h4 className="text-sm font-medium text-foreground mb-2">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Features */}
              {project.features && (
                <div>
                  <h4 className="text-sm font-medium text-foreground mb-2">Key Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature) => (
                      <Badge key={feature} variant="outline" className="text-xs">
                        <Star className="w-2 h-2 mr-1" />
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Links */}
              <div className="flex gap-2 pt-2">
                {project.liveUrl && project.liveUrl !== "#" && (
                  <Button size="sm" variant="outline" asChild className="flex-1">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Live Demo
                    </a>
                  </Button>
                )}
                {project.githubUrl && (
                  <Button size="sm" variant="outline" asChild className="flex-1">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-3 h-3 mr-1" />
                      View Code
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};