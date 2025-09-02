// Portfolio data - Edit this file to update your information across the entire website

export const personalInfo = {
  name: "Richard Hanrick",
  role: "Web Developer",
  avatar: "/lovable-uploads/55b60f7e-d4ed-4e10-bbc2-04cd669c7df0.png",
  email: "richard@example.com",
  phone: "+1 (234) 567-8900",
  location: "New York, USA",
  age: "23 June, 1982",
  about: "Hi, I'm a Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media. I enjoy turning complex problems into simple, beautiful and intuitive designs.",
  aboutExtended: "My job is to build your website so that it is functional and user-friendly but at the same time attractive. Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand."
};

export const navigationItems = [
  { id: "about", label: "About", href: "#about" },
  { id: "services", label: "My Services", href: "#services" },
  { id: "portfolio", label: "Portfolio", href: "#portfolio" },
  { id: "blog", label: "Blog", href: "#blog" },
  { id: "contact", label: "Contact", href: "#contact" }
];

export const services = [
  {
    id: "web-design",
    title: "Web Design",
    description: "The most modern and high-quality design made at a professional level.",
    icon: "🎨"
  },
  {
    id: "web-development",
    title: "Web Development",
    description: "High-quality development of sites at the professional level.",
    icon: "💻"
  },
  {
    id: "mobile-apps",
    title: "Mobile Apps",
    description: "Professional development of applications for iOS and Android.",
    icon: "📱"
  },
  {
    id: "photography",
    title: "Photography",
    description: "I make high-quality photos of any category at a professional level.",
    icon: "📷"
  }
];

export const projects = [
  {
    id: "project-1",
    title: "E-commerce Platform",
    description: "Modern e-commerce solution with React and Node.js",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/project",
    category: "web-development"
  },
  {
    id: "project-2",
    title: "Brand Identity Design",
    description: "Complete brand identity package for tech startup",
    image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=400&h=300&fit=crop",
    technologies: ["Figma", "Illustrator", "Photoshop"],
    liveUrl: "https://example.com",
    category: "web-design"
  },
  {
    id: "project-3",
    title: "Mobile Banking App",
    description: "Secure mobile banking application with biometric authentication",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
    technologies: ["React Native", "Firebase", "TypeScript"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/project",
    category: "mobile-apps"
  }
];

export const socialLinks = [
  { platform: "GitHub", url: "https://github.com/username", icon: "github" },
  { platform: "LinkedIn", url: "https://linkedin.com/in/username", icon: "linkedin" },
  { platform: "Twitter", url: "https://twitter.com/username", icon: "twitter" },
  { platform: "Dribbble", url: "https://dribbble.com/username", icon: "dribbble" }
];

export const contactInfo = {
  email: personalInfo.email,
  phone: personalInfo.phone,
  location: personalInfo.location,
  availability: "Available for freelance work"
};