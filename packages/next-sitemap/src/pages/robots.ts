import type { MetadataRoute } from "next";

export interface RobotsConfig extends MetadataRoute.Robots {
  /**
   * Include "Powered by @onruntime/next-sitemap" comment
   * @default true
   */
  poweredBy?: boolean;
}

/**
 * Generate robots.txt content from configuration
 * Compatible with Next.js MetadataRoute.Robots
 */
export function generateRobotsTxt(config: RobotsConfig): string {
  const { poweredBy = true } = config;
  const lines: string[] = [];

  if (poweredBy) {
    lines.push("# Powered by @onruntime/next-sitemap");
    lines.push("");
  }
  const rules = Array.isArray(config.rules) ? config.rules : [config.rules];

  for (const rule of rules) {
    const userAgents = Array.isArray(rule.userAgent) ? rule.userAgent : [rule.userAgent];

    for (const userAgent of userAgents) {
      lines.push(`User-agent: ${userAgent}`);
    }

    if (rule.allow) {
      const allows = Array.isArray(rule.allow) ? rule.allow : [rule.allow];
      for (const allow of allows) {
        lines.push(`Allow: ${allow}`);
      }
    }

    if (rule.disallow) {
      const disallows = Array.isArray(rule.disallow) ? rule.disallow : [rule.disallow];
      for (const disallow of disallows) {
        lines.push(`Disallow: ${disallow}`);
      }
    }

    if (rule.crawlDelay !== undefined) {
      lines.push(`Crawl-delay: ${rule.crawlDelay}`);
    }

    lines.push(""); // Empty line between rules
  }

  if (config.sitemap) {
    const sitemaps = Array.isArray(config.sitemap) ? config.sitemap : [config.sitemap];
    for (const sitemap of sitemaps) {
      lines.push(`Sitemap: ${sitemap}`);
    }
  }

  if (config.host) {
    lines.push(`Host: ${config.host}`);
  }

  return lines.join("\n").trim() + "\n";
}
