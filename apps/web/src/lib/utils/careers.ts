/**
 * Utilities for careers and jobs management
 */

/**
 * Formats salary with locale-aware number formatting
 */
export function formatSalary(
  min?: number,
  max?: number,
  currency?: string,
): { min?: number; max?: number; currency: string } | null {
  if (!min && !max) return null;

  return {
    min,
    max,
    currency: currency || "EUR",
  };
}

/**
 * Extracts tags/skills from a job
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
