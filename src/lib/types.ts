export type Discipline =
  | "cutting"
  | "reining"
  | "reined-cow-horse"
  | "team-penning"
  | "team-sorting";

export type BudgetRange =
  | "under-10k"
  | "10k-25k"
  | "25k-50k"
  | "50k-100k"
  | "100k-plus";

export type BuyerTimeline =
  | "now"
  | "1-3-months"
  | "6-plus-months"
  | "browsing";

export interface PedigreeNode {
  name: string;
  registration?: string;
  achievements?: string;
}

export interface Pedigree {
  sire: PedigreeNode & {
    sire?: PedigreeNode;
    dam?: PedigreeNode;
  };
  dam: PedigreeNode & {
    sire?: PedigreeNode;
    dam?: PedigreeNode;
  };
}

export interface Horse {
  slug: string;
  name: string;
  barnName: string;
  price: number;
  breed: string;
  registration?: string;
  color: string;
  gender: "stallion" | "gelding" | "mare";
  age: number;
  height: string;
  discipline: Discipline[];
  location: string;
  description: string;
  brokerTake: string;
  heroImage: string;
  images: string[];
  videos: { title: string; url: string }[];
  pedigree: Pedigree;
  lte?: string; // lifetime earnings
  achievements: string[];
  training: string;
  trainer: string;
  vetNotes: string;
  status: "available" | "pending" | "sold";
  featured: boolean;
  listedDate: string;
}

export interface InquiryFormData {
  name: string;
  email: string;
  phone: string;
  discipline: Discipline;
  budget: BudgetRange;
  timeline: BuyerTimeline;
  message: string;
  horseSlug: string;
}

export interface SubscribeFormData {
  email: string;
  name: string;
  discipline: Discipline;
  budget: BudgetRange;
  timeline: BuyerTimeline;
  zipCode: string;
}

export const DISCIPLINE_LABELS: Record<Discipline, string> = {
  cutting: "Cutting",
  reining: "Reining",
  "reined-cow-horse": "Reined Cow Horse",
  "team-penning": "Team Penning",
  "team-sorting": "Team Sorting",
};

export const BUDGET_LABELS: Record<BudgetRange, string> = {
  "under-10k": "Under $10,000",
  "10k-25k": "$10,000 - $25,000",
  "25k-50k": "$25,000 - $50,000",
  "50k-100k": "$50,000 - $100,000",
  "100k-plus": "$100,000+",
};

export const TIMELINE_LABELS: Record<BuyerTimeline, string> = {
  now: "Buying Now",
  "1-3-months": "1-3 Months",
  "6-plus-months": "6+ Months",
  browsing: "Just Browsing",
};
