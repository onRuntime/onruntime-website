
import { Agency } from "@/types/agency";
import parisAgency from "./paris";
import rouenAgency from "./rouen";
import lyonAgency from "./lyon";
import marseilleAgency from "./marseille";
import toulouseAgency from "./toulouse";
import niceAgency from "./nice";
import nantesAgency from "./nantes";
import strasbourgAgency from "./strasbourg";
import montpellierAgency from "./montpellier";

const Agencies: Agency[] = [
  parisAgency,
  rouenAgency,
  marseilleAgency,
  niceAgency,
  nantesAgency,
  strasbourgAgency,
  montpellierAgency,
  lyonAgency,
  toulouseAgency
];

export default Agencies;

export const getAgencyById = (id: string): Agency | undefined => {
  return Agencies.find(agency => agency.id === id);
};

export const getMajorAgencies = (count = 5): Agency[] => {
  
  return Agencies.slice(0, count);
};