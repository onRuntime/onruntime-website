export enum TeamRole {
  PRESIDENT = "president",
  VICE_PRESIDENT = "vice-president",
  DEVELOPER = "developer",
  DESIGNER = "designer",
};

export type TeamMember = {
  id: string;
  name: string;
  roles: TeamRole[];
  imageUrl: string;
};