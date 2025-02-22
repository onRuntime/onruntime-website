import { LucideIcon } from "lucide-react";

export enum ServiceCategory {
  DESIGN = "design",
  INTEGRATION = "integration",
  FRONTEND = "frontend",
  BACKEND = "backend",
}

export interface SubService {
  id: string;
  name: string;
  description: string;
  route: string;
  icon?: LucideIcon;
}

export interface Service {
  id: ServiceCategory;
  name: string;
  description: string;
  icon: LucideIcon;
  subServices: SubService[];
}