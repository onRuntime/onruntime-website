export interface JobPosting {
  id: string;

  title: string;

  employmentType?: string | null;

  workplaceType?: string | null; // HYBRID, REMOTE, ON_SITE

  department: string;

  location: string;

  datePosted: string;

  applyUrl?: string;

  seniority?: string;

  remote?: boolean | string;

  tags?: string[];

  shortDescription?: string;

  description?: string;

  requirements?: string;

  benefits?: string;

  salary?: {
    min?: number;
    max?: number;
    currency: string;
  } | null;

  validThrough?: string;
}
