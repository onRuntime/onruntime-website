/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    const id = params.id;

    const apiKey = process.env.JOIN_API_KEY;

    if (!apiKey) {
      console.error("JOIN_API_KEY is not defined in environment variables");
      const mockJob = getMockJobById(id);
      if (!mockJob) {
        return NextResponse.json({ error: "Job not found" }, { status: 404 });
      }
      return NextResponse.json({ job: mockJob });
    }

    const response = await fetch(`https://api.join.com/v2/jobs/${id}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        Accept: "application/json",
      },
    });

    if (response.status === 404) {
      return NextResponse.json({ error: "Job not found" }, { status: 404 });
    }

    if (!response.ok) {
      throw new Error(`Join API responded with status: ${response.status}`);
    }

    const jobData = await response.json();
    const job = {
      id: jobData.id,
      title: jobData.title,
      department: jobData.department?.name || "Non spécifié",
      location: jobData.location?.name || "Remote",
      employmentType:
        formatEmploymentType(jobData.employmentType) || "Temps plein",
      datePosted: jobData.publishedAt || new Date().toISOString(),
      applyUrl:
        jobData.applyUrl ||
        `https://join.com/companies/onruntime/jobs/${jobData.id}`,
      seniority: jobData.seniority?.name || null,
      remote: jobData.remote || false,
      shortDescription: jobData.shortDescription || "",
      description: jobData.description || "",
      requirements: jobData.requirements || "",
      benefits: jobData.benefits || "",
      salary:
        formatSalary(
          jobData.salaryMin,
          jobData.salaryMax,
          jobData.salaryCurrency,
        ) || null,
      validThrough: jobData.validThrough || null,
      tags: extractTags(jobData),
    };

    return NextResponse.json({ job });
  } catch (error) {
    console.error("Error fetching job from Join API:", error);

    const mockJob = getMockJobById(params.id);
    if (!mockJob) {
      return NextResponse.json({ error: "Job not found" }, { status: 404 });
    }
    return NextResponse.json({ job: mockJob });
  }
}

function formatEmploymentType(type: string | null | undefined): string {
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

function formatSalary(
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

function extractTags(jobData: any): string[] {
  const tags: string[] = [];

  if (jobData.skills && Array.isArray(jobData.skills)) {
    jobData.skills.forEach((skill: any) => {
      if (skill.name) {
        tags.push(skill.name);
      }
    });
  }

  return tags;
}

function getMockJobById(id: string) {
  const mockJobs = {
    "1": {
      id: "1",
      title: "Développeur Frontend React",
      department: "Développement",
      location: "Rouen, France",
      employmentType: "Temps plein",
      datePosted: "2025-03-01T10:00:00Z",
      applyUrl: "https://example.com/jobs/1",
      seniority: "Confirmé",
      remote: true,
      shortDescription:
        "Nous recherchons un développeur frontend React passionné pour rejoindre notre équipe et contribuer à des projets innovants.",
      description: `
        <p>onRuntime Studio recherche un développeur frontend passionné et créatif pour rejoindre notre équipe en pleine croissance. Vous travaillerez sur des projets web et mobile innovants, en utilisant les dernières technologies frontend.</p>
        
        <h3>Vos responsabilités :</h3>
        <ul>
          <li>Développer des interfaces utilisateur performantes et réactives avec React et Next.js</li>
          <li>Collaborer avec notre équipe de designers pour transformer les maquettes en interfaces utilisateur fonctionnelles</li>
          <li>Optimiser les applications pour une performance maximale</li>
          <li>Participer à la conception technique des projets</li>
          <li>Assurer la qualité du code par des tests appropriés</li>
          <li>Rester à jour sur les dernières tendances et technologies frontend</li>
        </ul>
      `,
      requirements: `
        <h3>Ce que nous recherchons :</h3>
        <ul>
          <li>3+ ans d'expérience en développement frontend avec React</li>
          <li>Excellente maîtrise de JavaScript/TypeScript</li>
          <li>Expérience avec Next.js et les concepts de SSR/SSG</li>
          <li>Bonne connaissance de HTML/CSS/SASS</li>
          <li>Expérience avec les outils modernes de développement web (Webpack, ESLint, etc.)</li>
          <li>Compréhension des principes de responsive design</li>
          <li>Capacité à travailler en équipe et à communiquer efficacement</li>
          <li>Anglais professionnel (écrit et parlé)</li>
        </ul>
        
        <h3>Bonus appréciés :</h3>
        <ul>
          <li>Expérience avec React Native</li>
          <li>Connaissance des principes d'accessibilité web</li>
          <li>Expérience avec les tests automatisés (Jest, React Testing Library)</li>
          <li>Contributions à des projets open source</li>
        </ul>
      `,
      benefits: `
        <h3>Ce que nous offrons :</h3>
        <ul>
          <li>Un environnement de travail stimulant et collaboratif</li>
          <li>Des projets variés et intéressants</li>
          <li>Une organisation de travail flexible avec possibilité de télétravail</li>
          <li>Des opportunités de formation et de développement professionnel</li>
          <li>Une équipe passionnée et dynamique</li>
          <li>Des événements d'équipe réguliers</li>
        </ul>
      `,
      salary: "45 000 - 60 000 €",
      tags: ["React", "TypeScript", "Next.js", "CSS", "HTML"],
    },
    "2": {
      id: "2",
      title: "Designer UI/UX",
      department: "Design",
      location: "Paris, France",
      employmentType: "Temps plein",
      datePosted: "2025-03-05T10:00:00Z",
      applyUrl: "https://example.com/jobs/2",
      seniority: "Senior",
      remote: "Partiel",
      shortDescription:
        "Créez des interfaces utilisateur intuitives et esthétiques pour nos projets web et mobile.",
      description: `
        <p>Nous recherchons un designer UI/UX talentueux pour rejoindre notre équipe créative. Vous serez responsable de la conception d'interfaces utilisateur intuitives et esthétiques pour nos projets web et mobile.</p>
        
        <h3>Vos responsabilités :</h3>
        <ul>
          <li>Créer des interfaces utilisateur modernes et engageantes</li>
          <li>Concevoir des expériences utilisateur fluides et intuitives</li>
          <li>Développer des systèmes de design cohérents et réutilisables</li>
          <li>Collaborer étroitement avec l'équipe de développement</li>
          <li>Réaliser des recherches utilisateurs et des tests d'utilisabilité</li>
          <li>Créer des prototypes interactifs</li>
        </ul>
      `,
      requirements: `
        <h3>Ce que nous recherchons :</h3>
        <ul>
          <li>5+ ans d'expérience en design UI/UX</li>
          <li>Portefolio démontrant vos compétences en design d'interfaces</li>
          <li>Maîtrise de Figma et de la suite Adobe</li>
          <li>Connaissance des principes de design responsive</li>
          <li>Compréhension des contraintes techniques du développement web et mobile</li>
          <li>Excellentes compétences en communication</li>
        </ul>
        
        <h3>Bonus appréciés :</h3>
        <ul>
          <li>Expérience en animation et microinteractions</li>
          <li>Connaissance des principes d'accessibilité</li>
          <li>Expérience en design de systèmes</li>
        </ul>
      `,
      benefits: `
        <h3>Ce que nous offrons :</h3>
        <ul>
          <li>Un environnement de travail créatif et stimulant</li>
          <li>Des projets variés et passionnants</li>
          <li>Une flexibilité de travail avec possibilité de télétravail partiel</li>
          <li>Des opportunités de formation et de développement professionnel</li>
          <li>Une équipe talentueuse et collaborative</li>
        </ul>
      `,
      salary: "50 000 - 70 000 €",
      tags: ["Figma", "UI", "UX", "Design System", "Responsive"],
    },
    "3": {
      id: "3",
      title: "Développeur Backend Node.js",
      department: "Développement",
      location: "Remote",
      employmentType: "Temps plein",
      datePosted: "2025-03-10T10:00:00Z",
      applyUrl: "https://example.com/jobs/3",
      seniority: "Junior",
      remote: true,
      shortDescription:
        "Rejoignez notre équipe pour développer des APIs robustes et évolutives avec Node.js.",
      description: `
        <p>Nous recherchons un développeur backend Node.js pour rejoindre notre équipe technique. Vous serez responsable du développement et de la maintenance d'APIs RESTful performantes et sécurisées.</p>
        
        <h3>Vos responsabilités :</h3>
        <ul>
          <li>Concevoir et développer des APIs RESTful avec Node.js et Express</li>
          <li>Contribuer à l'architecture backend de nos projets</li>
          <li>Mettre en place et optimiser les bases de données (SQL et NoSQL)</li>
          <li>Assurer la qualité du code par des tests appropriés</li>
          <li>Documenter le code et les APIs</li>
          <li>Collaborer avec l'équipe frontend pour assurer une intégration fluide</li>
        </ul>
      `,
      requirements: `
        <h3>Ce que nous recherchons :</h3>
        <ul>
          <li>1-3 ans d'expérience en développement backend avec Node.js</li>
          <li>Connaissance de frameworks comme Express ou NestJS</li>
          <li>Expérience avec les bases de données SQL et NoSQL</li>
          <li>Bonne compréhension des principes RESTful et GraphQL</li>
          <li>Connaissance des bonnes pratiques de sécurité web</li>
          <li>Capacité à travailler en équipe et en autonomie</li>
        </ul>
        
        <h3>Bonus appréciés :</h3>
        <ul>
          <li>Expérience avec Docker et Kubernetes</li>
          <li>Connaissance des architectures microservices</li>
          <li>Expérience avec des systèmes de CI/CD</li>
        </ul>
      `,
      benefits: `
        <h3>Ce que nous offrons :</h3>
        <ul>
          <li>Un environnement de travail 100% remote</li>
          <li>Des horaires flexibles</li>
          <li>Des projets techniques stimulants</li>
          <li>Un parcours d'évolution personnalisé</li>
          <li>Une culture d'entreprise axée sur l'apprentissage continu</li>
          <li>Des sessions de pair programming et de code review</li>
        </ul>
      `,
      salary: "40 000 - 55 000 €",
      tags: ["Node.js", "Express", "MongoDB", "API", "Backend"],
    },
  };

  return mockJobs[id as keyof typeof mockJobs] || null;
}
