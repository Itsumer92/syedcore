export interface Project {
  id: string;
  title: string;
  category: 'Websites' | 'SEO & Growth' | 'YouTube & Media' | 'Shopify Stores';
  tagline: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  deliverables?: string[];
  clientCountry?: string;
}

export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  features: string[];
  deliverables: string[];
  timeline: string;
  startingPrice: string;
  category: string;
  toolsUsed: string[];
}

export interface SkillCategory {
  name: string;
  skills: {
    name: string;
    level: number;
    description: string;
    icon?: string;
  }[];
}

export interface Testimonial {
  id: string;
  clientName: string;
  role: string;
  company: string;
  location: string;
  avatar: string;
  comment: string;
  rating: number;
  projectType: string;
}

export interface PhotoSettings {
  url: string;
  zoom: number; // 80 - 160%
  panX: number; // -50 to 50
  panY: number; // -50 to 50
  shape: 'rounded-xl' | 'rounded-3xl' | 'circle' | 'squircle';
  glowColor: 'cyan' | 'indigo' | 'emerald' | 'amber';
  badge: string;
}
