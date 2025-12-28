import fs from "fs"
import path from "path"
import { evaluate } from "next-mdx-remote-client/rsc"
import { CustomMDX, MDXProps } from "@/components/custom-mdx"
import React from "react"

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
    const { frontmatter, content } = await evaluate<PageContent["frontmatter"]>({
      source: fileContents,
      options: { parseFrontmatter: true },
    })

    const mdxProps: MDXProps = {
      components: {},
      ...((content as React.ReactElement).props || {}),
    }

    const clonedContent = React.cloneElement(content as React.ReactElement<MDXProps>, mdxProps)

    return {
      frontmatter,
      content: <CustomMDX>{clonedContent}</CustomMDX>,
    }
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error)
    return {
      frontmatter: {
        title: "Error",
        description: "Unable to load content",
        lastUpdated: new Date().toISOString(),
      },
      content: <p>There was an error loading the content.</p>,
    }
  }
}

export default getPageContent

