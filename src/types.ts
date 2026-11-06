
export interface ProjectItem {
  title: string;
  desc?: string;
  image: string;
  tags: string[];
  link?: {
    text: string;
    url: string;
  };
}

export interface Experience {
  company: string;
  period: string;
}

export interface Certification {
  title: string;
  category: string;
}

export interface NavItem {
  name: string;
  id: string;
}
