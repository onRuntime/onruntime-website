import LegalPage from "@/components/marketing/legal/page"
import { getPageContent } from "@/lib/mdx"
import { constructMetadata } from "@/lib/utils/metadata.server"
import type { Metadata } from "next"

const contentPath = "legal/company"

type PageProps = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  const { frontmatter } = await getPageContent(contentPath, locale)
  return constructMetadata({
    title: `${frontmatter.title}`,
    description: frontmatter.description,
  })
}

const CompanyPage = async ({ params }: PageProps) => {
  const { locale } = await params
  const { frontmatter, content } = await getPageContent(contentPath, locale)

  return <LegalPage title={frontmatter.title} description={frontmatter.description} content={content} lastUpdated={frontmatter.lastUpdated} />
}

export default CompanyPage
