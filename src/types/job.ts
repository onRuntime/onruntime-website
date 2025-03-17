export interface JobPosting {
  id: string;

  title: string;

  employmentType: string;

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

  salary?: string;

  validThrough?: string;
}
