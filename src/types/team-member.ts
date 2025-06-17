export enum TeamRole {
  CO_FOUNDER = "co-founder",
  LEAD_DEVELOPER = "lead-developer",
  LEAD_DESIGNER = "lead-designer",
  DEVELOPER = "developer",
  TRAINEE_DEVELOPER = "trainee-developer",
  DESIGNER = "designer",
  MARKETING = "marketing",
  COMMUNITY_MANAGER = "community-manager",
  PRODUCT_MANAGER = "product-manager",
  STRATEGY_DEVELOPER = "strategy-developer",
};

export const roleToDisplay: Record<TeamRole, string> = {
  [TeamRole.CO_FOUNDER]: "Co-Fondateur",
  [TeamRole.DEVELOPER]: "Développeur",
  [TeamRole.TRAINEE_DEVELOPER]: "Développeur Stagiaire",
  [TeamRole.LEAD_DEVELOPER]: "Lead Développeur",
  [TeamRole.LEAD_DESIGNER]: "Lead Designer",
  [TeamRole.DESIGNER]: "Designer",
  [TeamRole.MARKETING]: "Marketing",
  [TeamRole.COMMUNITY_MANAGER]: "Community Manager",
  [TeamRole.PRODUCT_MANAGER]: "Product Manager",
  [TeamRole.STRATEGY_DEVELOPER]: "Strategy Developer"
};

export type TeamMember = {
  name: string;
  roles: TeamRole[];
  website?: string;
  avatar?: string;
  github?: string;
  linkedin?: string;
};