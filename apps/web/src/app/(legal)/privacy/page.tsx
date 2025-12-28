import LegalPage from "@/components/marketing/legal/page"
import { getPageContent } from "@/lib/mdx"
import { constructMetadata } from "@/lib/utils/metadata"
import type { Metadata } from "next"

const contentPath = "legal/privacy"

export async function generateMetadata(): Promise<Metadata> {
  const { frontmatter } = await getPageContent(contentPath)
  return constructMetadata({
    title: `${frontmatter.title}`,
    description: frontmatter.description,
  })
}

const PrivacyPage = async () => {
  const { frontmatter, content } = await getPageContent(contentPath)

  return <LegalPage title={frontmatter.title} description={frontmatter.description} content={content} lastUpdated={frontmatter.lastUpdated} />
}

export default PrivacyPage