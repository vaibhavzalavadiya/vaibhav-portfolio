export interface PersonalInfo {
  name: string;
  title: string;
  description: string;
  experience: string;
  projects: string;
  contact: {
    email: string;
    phone: string;
    location: string;
  };
  social: {
    linkedin: string;
    github: string;
    twitter: string;
    instagram: string;
  };
}

export interface Skill {
  name: string;
  level: number;
  icon: string;
  color: string;
  category: string;
  description: string;
}

export interface Tool {
  name: string;
  icon: string;
  color: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  icon: string;
  color: string;
  liveDemo: string;
  github: string;
  image: string;
}

export interface Strength {
  name: string;
  icon: string;
}