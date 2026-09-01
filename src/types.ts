export type ProductId =
  | 'website-development'
  | 'hr-payroll-software'
  | 'ird-billing-software'
  | 'mobile-app-development'
  | 'business-email-services';

export interface Feature {
  title: string;
  description: string;
  iconName: string;
}

export interface Product {
  id: ProductId;
  title: string;
  tagline: string;
  shortDescription: string;
  detailedDescription: string;
  features: Feature[];
  techStack: string[];
  benefits: string[];
  complianceBadge?: string;
  stats?: {
    label: string;
    value: string;
  }[];
}

export interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  summary: string;
  requirements: string[];
  responsibilities: string[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}
