export type Page = 'home' | 'services' | 'about' | 'contact';

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
}

export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  details: string[];
  image: string;
  category: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}
