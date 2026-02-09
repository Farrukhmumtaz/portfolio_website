
export interface Skill {
  name: string;
  level: number;
}

export interface Framework {
  name: string;
  rating: number;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  achievements: string[];
}
