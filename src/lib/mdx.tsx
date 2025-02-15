import fs from "fs"
import path from "path"
import { compileMDX } from "next-mdx-remote/rsc"
import { CustomMDX } from "@/components/custom-mdx"
import type React from "react"

const contentDirectory = path.join(process.cwd(), "src", "content")

interface PageContent {
  frontmatter: {
    title: string
    description: string
    lastUpdated: string
    [key: string]: unknown
  }
  content: React.ReactElement
}

export async function getPageContent(filename: string): Promise<PageContent> {
  const filePath = path.join(contentDirectory, `${filename}.mdx`)

  try {
    if (!fs.existsSync(filePath)) {
      throw new Error(`File not found: ${filePath}`)
    }

    const fileContents = fs.readFileSync(filePath, "utf8")
    const { frontmatter, content } = await compileMDX<PageContent["frontmatter"]>({
      source: fileContents,
      options: { parseFrontmatter: true },
      components: {
        CustomMDX,
      },
    })

    return {
      frontmatter,
      content: <CustomMDX>{content}</CustomMDX>,
    }
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error)
    return {
      frontmatter: { title: "Error", description: "Unable to load content" },
      content: <p>There was an error loading the content.</p>,
    }
  }
}

export default getPageContent

