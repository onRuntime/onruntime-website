
import { Agency } from "@/types/agency";
import parisAgency from "./paris";
import rouenAgency from "./rouen";

import lyonAgency from "./lyon";

const Agencies: Agency[] = [
  parisAgency,
  rouenAgency,
  
  lyonAgency,

];

export default Agencies;

export const getAgencyById = (id: string): Agency | undefined => {
  return Agencies.find(agency => agency.id === id);
};

export const getMajorAgencies = (count = 5): Agency[] => {
  
  return Agencies.slice(0, count);
};