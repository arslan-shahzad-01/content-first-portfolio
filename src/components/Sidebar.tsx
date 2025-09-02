import { personalInfo, socialLinks, education } from "@/data/portfolio";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Calendar, Github, Linkedin, Twitter, GraduationCap } from "lucide-react";

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  dribbble: Mail // Using Mail as fallback for dribbble
};

export const Sidebar = () => {
  return (
    <Card className="w-80 h-fit p-6 bg-sidebar border-sidebar-border">
      <div className="flex flex-col items-center text-center space-y-6">
        {/* Profile Picture */}
        <Avatar className="w-28 h-28">
          <AvatarImage src={personalInfo.avatar} alt={personalInfo.name} />
          <AvatarFallback className="text-2xl bg-primary text-primary-foreground">
            {personalInfo.name.split(" ").map(n => n[0]).join("")}
          </AvatarFallback>
        </Avatar>

        {/* Name and Role */}
        <div>
          <h1 className="text-2xl font-bold text-sidebar-foreground mb-2">
            {personalInfo.name}
          </h1>
          <p className="text-muted-foreground bg-secondary px-4 py-2 rounded-full text-sm">
            {personalInfo.role}
          </p>
        </div>

        {/* Contact Information */}
        <div className="w-full space-y-4">
          <div className="flex items-center gap-3 p-2">
            <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
              <Mail className="w-5 h-5 text-primary" />
            </div>
            <div className="text-left">
              <p className="text-xs text-muted-foreground uppercase tracking-wide">Email</p>
              <p className="text-sm text-sidebar-foreground">{personalInfo.email}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2">
            <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
              <Phone className="w-5 h-5 text-primary" />
            </div>
            <div className="text-left">
              <p className="text-xs text-muted-foreground uppercase tracking-wide">Phone</p>
              <p className="text-sm text-sidebar-foreground">{personalInfo.phone}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2">
            <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-primary" />
            </div>
            <div className="text-left">
              <p className="text-xs text-muted-foreground uppercase tracking-wide">Education</p>
              <p className="text-sm text-sidebar-foreground">{education.status}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2">
            <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
              <Calendar className="w-5 h-5 text-primary" />
            </div>
            <div className="text-left">
              <p className="text-xs text-muted-foreground uppercase tracking-wide">Graduation</p>
              <p className="text-sm text-sidebar-foreground">{education.graduation_year}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2">
            <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <div className="text-left">
              <p className="text-xs text-muted-foreground uppercase tracking-wide">Location</p>
              <p className="text-sm text-sidebar-foreground">{personalInfo.location}</p>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex gap-2 pt-4">
          {socialLinks.map((link) => {
            const IconComponent = iconMap[link.icon as keyof typeof iconMap] || Mail;
            return (
              <Button
                key={link.platform}
                variant="ghost"
                size="sm"
                className="w-10 h-10 p-0 hover:bg-primary hover:text-primary-foreground"
                asChild
              >
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  <IconComponent className="w-4 h-4" />
                </a>
              </Button>
            );
          })}
        </div>
      </div>
    </Card>
  );
};