// Portfolio data - Edit this file to update your information across the entire website

export const personalInfo = {
  name: "Muhammad Arslan Shahzad",
  role: "Full Stack Developer | AI Enthusiast | Problem Solver",
  avatar: "/profile.jpeg",
  email: "dev.arslanshahzad@gmail.com",
  phone: "+92 346 6420073",
  location: "Pakistan",
  age: "Student",
  about: "I'm an undergraduate student pursuing BSAI (Bachelor of Science in Artificial Intelligence) at Information Technology University, graduating in 2027. I specialize in Full Stack Development, Artificial Intelligence, and Data Engineering.",
  aboutExtended: "My expertise spans across backend systems using FastAPI and SQL, frontend development with React and CSS, model training & deployment, and data visualization. I have hands-on experience building end-to-end applications and working with real-world data to create meaningful solutions."
};

export const education = {
  degree: "BSAI (Bachelor of Science in Artificial Intelligence)",
  institution: "Information Technology University",
  graduation_year: 2027,
  status: "Undergraduate Student",
  courses: [
    {
      name: "Introduction to Python",
      year: 2024
    },
    {
      name: "Artificial Neural Networks (ANN)",
      year: 2025
    }
  ]
};

export const navigationItems = [
  { id: "about", label: "About", href: "#about" },
  { id: "skills", label: "Skills", href: "#skills" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "education", label: "Education", href: "#education" },
  { id: "contact", label: "Contact", href: "#contact" }
];

export const skills = {
  languages: ["Python", "C++", "JavaScript", "TypeScript"],
  frameworks_libraries: ["FastAPI", "Streamlit", "SQLAlchemy", "Alembic", "Plotly", "React"],
  databases: ["PostgreSQL", "Oracle", "MySQL", "SQLite","MongoDB", "CSV-based ETL pipelines"],
  tools_platforms: ["Git/GitHub", "VS Code", "Docker", "JWT Authentication", "Postman"],
  other_skills: ["Algorithms", "Data Structures", "Problem Solving"]
};

export const strengths = [
  "Backend systems (FastAPI, SQL)",
  "Frontend (React, CSS)", 
  "Model training & deployment",
  "Data visualization"
];

export const fields = [
  "Full Stack Development",
  "Artificial Intelligence", 
  "Data Engineering",
  "Machine Learning",
  "APIs",
  "Databases"
];

export const projects = [
  {
    id: "trip-snatchers",
    name: "Trip Snatchers",
    description: "A holiday price-tracking website that lets users track trips, set price alerts, and view public snatched deals.",
    technologies: ["FastAPI", "PostgreSQL", "SQLAlchemy", "JWT", "React", "CSS"],
    features: ["User accounts", "Holiday tracking", "Price drop notifications", "Snatched deals page"],
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&h=300&fit=crop",
    githubUrl: "https://github.com/dev-arslan-shahzad/trip-snatchers",
    liveUrl: "#",
    category: "full-stack"
  },
  {
    id: "skin-cancer-detection",
    name: "Skin Cancer Detection System",
    description: "Final Year Project focused on detecting skin cancer using machine learning models with a full-stack system.",
    technologies: ["Python", "ML Model Training", "FastAPI", "Frontend Integration"],
    features: ["Backend & Model training", "Documentation", "System integration"],
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
    githubUrl: "https://github.com/dev-arslan-shahzad/skin-cancer-detection",
    category: "ai-ml"
  },
  {
    id: "Hate-Speech-Detector",
    name: "Hate Speech Detector",
    description: "SafeSpeak Sentinel is a comprehensive web application designed to detect and prevent hate speech and harmful content. It combines powerful machine learning models with a user-friendly interface to help create safer online spaces.",
    technologies: ["Python", "ML Model Training", "FastAPI", "React Vite", "Tailwind CSS"],
    features: ["Backend & Model training", "Documentation", "System integration"],
    image: "/hatespeech.png",
    githubUrl: "https://github.com/dev-arslan-shahzad/HateSpeech",
    category: "AI - ML"
  }
];

export const achievements = [
  "Developed end-to-end full stack applications from scratch",
  "Hands-on experience in AI model training & deployment", 
  "Built ETL pipelines & dashboards for real-world data",
  "Strong foundation in algorithms & problem solving"
];

export const interests = {
  hobbies: ["Coding", "Experimenting with AI/ML", "Building apps"],
  passions: ["Full Stack Development", "Machine Learning Research", "Real-world Software Solutions"]
};

export const socialLinks = [
  { platform: "GitHub", url: "https://github.com/dev-arslan-shahzad", icon: "github" },
  { platform: "LinkedIn", url: "https://linkedin.com/in/arslan-shahzad", icon: "linkedin" },
  { platform: "Twitter", url: "https://twitter.com/arslan_dev", icon: "twitter" }
];

export const contactInfo = {
  email: personalInfo.email,
  phone: personalInfo.phone,
  location: personalInfo.location,
  availability: "Available for internships and freelance work"
};