import { createClient } from "@sanity/client";
import { Testimonial, Service, TeamMember } from "@/types";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const apiVersion = "2023-05-03";

export const sanityClient = createClient({
  projectId: projectId || "mock-project-id",
  dataset,
  apiVersion,
  useCdn: true,
});

// Fallback static data
export const fallbackTestimonials: Testimonial[] = [
  {
    _id: "testimonial-1",
    clientName: "School Administrator",
    role: "Administrator",
    company: "Private School, Ethiopia",
    quote: "Nafi Solutions transformed our school's operations through a modern management platform. Administrative tasks became significantly easier and our staff could focus on what matters most — the students.",
    rating: 5,
  },
  {
    _id: "testimonial-2",
    clientName: "Hotel Manager",
    role: "Manager",
    company: "Hospitality Group, Addis Ababa",
    quote: "Their hotel reservation system increased our online bookings and dramatically improved our guest experience. The team was professional and responsive throughout.",
    rating: 5,
  },
  {
    _id: "testimonial-3",
    clientName: "Business Owner",
    role: "Owner",
    company: "Enterprise Client, Ethiopia",
    quote: "Professional, highly skilled, and genuinely invested in our success. They understood our needs and delivered a product that exceeded every expectation.",
    rating: 5,
  },
];

export const fallbackServices: Service[] = [
  {
    _id: "service-1",
    title: "Custom Website Development",
    slug: "custom-website-development",
    description: "Professional, responsive, and scalable websites designed to strengthen your digital presence and convert visitors into clients.",
    icon: "Globe",
    features: [
      "Corporate websites",
      "School portals",
      "Hotel booking systems",
      "Real estate platforms",
      "E-commerce solutions",
      "Content management systems",
    ],
    category: "Web",
  },
  {
    _id: "service-2",
    title: "Mobile App Development",
    slug: "mobile-app-development",
    description: "Powerful Android and iOS applications designed to improve customer engagement and business efficiency.",
    icon: "Smartphone",
    features: [
      "Native & cross-platform apps",
      "Customer portals",
      "Booking systems",
      "Educational apps",
      "Business management apps",
    ],
    category: "Mobile",
  },
  {
    _id: "service-3",
    title: "Enterprise Software Solutions",
    slug: "enterprise-software-solutions",
    description: "Custom software systems tailored to your organizational workflows, replacing manual processes with intelligent automation.",
    icon: "Database",
    features: [
      "Student Information Systems",
      "Hotel Management Systems",
      "Property Management Platforms",
      "Inventory Systems",
      "CRM Systems",
    ],
    category: "Enterprise",
  },
  {
    _id: "service-4",
    title: "Cloud Solutions",
    slug: "cloud-solutions",
    description: "Modern cloud infrastructure that gives your business the reliability, security, and scalability it needs to grow.",
    icon: "Cloud",
    features: [
      "Cloud migration",
      "Data management",
      "Backup & disaster recovery",
      "Infrastructure optimization",
    ],
    category: "Cloud",
  },
  {
    _id: "service-5",
    title: "AI & Intelligent Automation",
    slug: "ai-intelligent-automation",
    description: "Leverage modern AI technologies to improve decision-making, automate repetitive tasks, and gain competitive advantage.",
    icon: "Bot",
    features: [
      "AI-powered chatbots",
      "Data analytics dashboards",
      "Predictive reporting",
      "Process automation",
    ],
    category: "AI",
  },
  {
    _id: "service-6",
    title: "IT Consulting",
    slug: "it-consulting",
    description: "Expert guidance to help your organization choose, implement, and manage the right technologies for long-term growth.",
    icon: "HeadphonesIcon",
    features: [
      "Technology strategy",
      "System audits",
      "Digital transformation roadmaps",
      "Vendor selection",
    ],
    category: "Consulting",
  },
];

export const fallbackTeam: TeamMember[] = [
  {
    _id: "team-1",
    name: "Abdi Getaneh",
    role: "CEO & UIX Designer",
    bio: "Visionary leader focused on business innovation and digital transformation across Ethiopia.",
    linkedinUrl: "https://www.linkedin.com/in/abdi-getaneh-843085356",
  },
  {
    _id: "team-2",
    name: "Folikiya Nigussei",
    role: "Lead Software Engineer & Security Analyst",
    bio: "Responsible for architecture, development, and technology strategy across all projects.",
    linkedinUrl: "https://www.linkedin.com/in/folikia-nigussie",
  },
  {
    _id: "team-3",
    name: "Israel Dinka",
    role: "Cloud Practitioner & AI Developer",
    bio: "Specializes in cloud infrastructure and AI-powered solutions that drive operational efficiency.",
    linkedinUrl: "https://www.linkedin.com/in/israel-erena",
  },

];

// Helper functions that safely fallback if Sanity is not connected or fails
export async function getTestimonials(): Promise<Testimonial[]> {
  if (!projectId) return fallbackTestimonials;
  try {
    const query = `*[_type == "testimonial"]{_id, clientName, role, company, quote, rating, "avatar": avatar.asset->url}`;
    const result = await sanityClient.fetch(query);
    return result.length > 0 ? result : fallbackTestimonials;
  } catch (error) {
    console.warn("Failed to fetch testimonials from Sanity, falling back to local data:", error);
    return fallbackTestimonials;
  }
}

export async function getServices(): Promise<Service[]> {
  if (!projectId) return fallbackServices;
  try {
    const query = `*[_type == "service"]{_id, title, slug, description, icon, features, category}`;
    const result = await sanityClient.fetch(query);
    return result.length > 0 ? result : fallbackServices;
  } catch (error) {
    console.warn("Failed to fetch services from Sanity, falling back to local data:", error);
    return fallbackServices;
  }
}

export async function getTeamMembers(): Promise<TeamMember[]> {
  if (!projectId) return fallbackTeam;
  try {
    const query = `*[_type == "teamMember"]{_id, name, role, bio, "photo": photo.asset->url, linkedinUrl}`;
    const result = await sanityClient.fetch(query);
    return result.length > 0 ? result : fallbackTeam;
  } catch (error) {
    console.warn("Failed to fetch team members from Sanity, falling back to local data:", error);
    return fallbackTeam;
  }
}
