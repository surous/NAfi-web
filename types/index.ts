export interface Testimonial {
  _id: string;
  clientName: string;
  role: string;
  company: string;
  quote: string;
  rating: number; // 1-5
  avatar?: {
    asset: {
      _ref: string;
      _type: string;
    };
  } | string;
}

export interface Service {
  _id: string;
  title: string;
  slug: {
    current: string;
  } | string;
  description: string;
  icon: string;
  features: string[];
  category: string;
}

export interface TeamMember {
  _id: string;
  name: string;
  role: string;
  bio: string;
  photo?: {
    asset: {
      _ref: string;
      _type: string;
    };
  } | string;
  linkedinUrl?: string;
}

export interface ContactFormData {
  name: string;
  company?: string;
  email: string;
  phone?: string;
  service: string;
  message: string;
}
