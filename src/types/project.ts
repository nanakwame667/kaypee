export interface Project {
  id: string;
  title: string;
  logo: string;
  description: string;
  role: string;
  bgColor: string;
  textColor: string;
  accentColor: string;
  iconBg: string;
  backgroundIcon?: string;
  size?: 'small' | 'large';
  overview?: string;
  challenge?: string;
  solution?: string;
  impact?: string;
  coverImage?: string;
  images?: string[];
  technologies?: string[];
  responsibilities?: string[];
  timeline?: string;
  teamSize?: number;
  deliverables?: string[];
}