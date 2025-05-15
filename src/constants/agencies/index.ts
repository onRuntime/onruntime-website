// src/constants/agencies/index.ts
import { Agency } from "@/types/agency";
import parisAgency from "./paris";
import rouenAgency from "./rouen";
// import marseilleAgency from "./marseille";
import lyonAgency from "./lyon";
// import toulouseAgency from "./toulouse";
// import niceAgency from "./nice";
// import nantesAgency from "./nantes";
// Import other agencies as they're added

const Agencies: Agency[] = [
  parisAgency,
  rouenAgency,
  // marseilleAgency,
  lyonAgency,
  // toulouseAgency,
  // niceAgency,
  // nantesAgency,
];

export default Agencies;

// Helper functions
export const getAgencyById = (id: string): Agency | undefined => {
  return Agencies.find(agency => agency.id === id);
};

export const getMajorAgencies = (count = 5): Agency[] => {
  // Get the major agencies (you can update the logic as needed)
  return Agencies.slice(0, count);
};