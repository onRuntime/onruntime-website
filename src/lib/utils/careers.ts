/**
 * Utilitaires pour la gestion des carrières et des jobs
 */

/**
 * Formate le type d'emploi en français
 */
export function formatEmploymentType(type: string | null | undefined): string {
  if (!type) return "Temps plein";

  const typeMap: Record<string, string> = {
    FULL_TIME: "Temps plein",
    PART_TIME: "Temps partiel",
    CONTRACT: "Contrat",
    TEMPORARY: "Temporaire",
    INTERNSHIP: "Stage",
    APPRENTICESHIP: "Apprentissage",
  };

  return typeMap[type] || type;
}

/**
 * Formate le salaire en euros français
 */
export function formatSalary(
  min?: number,
  max?: number,
  currency?: string,
): string | null {
  if (!min && !max) return null;

  const currencySymbol = currency === "EUR" ? "€" : currency || "";

  if (min && max) {
    return `${min.toLocaleString("fr-FR")} - ${max.toLocaleString(
      "fr-FR",
    )} ${currencySymbol}`;
  } else if (min) {
    return `À partir de ${min.toLocaleString("fr-FR")} ${currencySymbol}`;
  } else if (max) {
    return `Jusqu'à ${max.toLocaleString("fr-FR")} ${currencySymbol}`;
  }

  return null;
}

/**
 * Extrait les tags/compétences d'un job
 */
export function extractTags(jobData: { skills?: { name: string }[] }): string[] {
  const tags: string[] = [];

  if (jobData.skills && Array.isArray(jobData.skills)) {
    jobData.skills.forEach((skill) => {
      if (skill.name) {
        tags.push(skill.name);
      }
    });
  }

  return tags;
}