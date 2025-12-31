import React from "react";
import { Button } from "@/components/ui/button";
import DotPattern from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";
import { Mail } from "lucide-react";
import { Link } from "@onruntime/translations/next";
import Routes from "@/constants/routes";
import { getTranslation } from "@/lib/translations.server";

interface LegalPageProps {
  title: string;
  description: string;
  content: React.ReactElement;
  lastUpdated: string;
}

const LegalPage: React.FC<LegalPageProps> = async ({
  title,
  description,
  content,
  lastUpdated,
}) => {
  const { t } = await getTranslation("components/marketing/legal/page");

  return (
    <main className="min-h-screen pt-32 pb-16">
      <div className="px-4 md:px-0 max-w-3xl mx-auto">
        <div className="relative max-w-2xl mx-auto flex flex-col items-center gap-6 text-center mb-16">
          <h1 className="font-semibold text-4xl md:text-5xl text-foreground">
            {title}
          </h1>

          <p className="text-muted-foreground">{description}</p>

          <DotPattern
            width={30}
            height={30}
            className={cn(
              "z-[-1]",
              "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
            )}
          />
        </div>

        <p
          className="text-sm text-muted-foreground italic mb-8"
          suppressHydrationWarning
        >
          {t("last-updated")} {new Date(lastUpdated).toLocaleDateString()}
        </p>

        <div className="prose prose-neutral dark:prose-invert max-w-none">
          {content}
        </div>

        <div className="mt-16 p-6 border rounded-lg bg-card">
          <h2 className="text-xl font-semibold text-foreground mb-4">
            {t("question.title")}
          </h2>
          <p className="text-muted-foreground mb-6">
            {t("question.description")}
          </p>

          <Link href="mailto:admin@onruntime.com">
            <Button className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              {t("question.cta")}
            </Button>
          </Link>
        </div>

        <nav className="mt-8 flex flex-wrap gap-4 text-sm text-muted-foreground">
          <Link
            href={Routes.legals.company}
            className="hover:text-foreground transition-colors"
          >
            {t("nav.company")}
          </Link>
          <Link
            href={Routes.legals.privacy}
            className="hover:text-foreground transition-colors"
          >
            {t("nav.privacy")}
          </Link>
          <Link
            href={Routes.legals.terms}
            className="hover:text-foreground transition-colors"
          >
            {t("nav.terms")}
          </Link>
        </nav>
      </div>
    </main>
  );
};

export default LegalPage;
