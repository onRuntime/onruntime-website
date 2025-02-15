import LegalPage from "@/components/marketing/legal/page"
import { getPageContent } from "@/lib/mdx"
import type { Metadata } from "next"

const contentPath = "legal/company"

export async function generateMetadata(): Promise<Metadata> {
  const { frontmatter } = await getPageContent(contentPath)
  return {
    title: `${frontmatter.title} | onRuntime Studio`,
    description: frontmatter.description,
  }
}

const CompanyPage = async () => {
  const { frontmatter, content } = await getPageContent(contentPath)

  return <LegalPage title={frontmatter.title} description={frontmatter.description} content={content} lastUpdated={frontmatter.lastUpdated} />
}

export default CompanyPage
