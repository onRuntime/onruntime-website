export enum TeamRole {
  CO_FOUNDER = "co-founder",
  LEAD_DEVELOPER = "lead-developer",
  DEVELOPER = "developer",
  DESIGNER = "designer",
  MARKETING = "marketing",
  COMMUNITY_MANAGER = "community-manager",
  PRODUCT_MANAGER = "product-manager",
  STRATEGY_DEVELOPER = "strategy-developer",
};

export type TeamMember = {
  name: string;
  roles: TeamRole[];
  website?: string;
  avatar?: string;
  github?: string;
  linkedin?: string;
};