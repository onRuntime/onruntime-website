export { DocsSidebar } from "./sidebar";
export { TableOfContents } from "./table-of-contents";
export { PageNavigation } from "./page-navigation";
export { DocsBreadcrumb } from "./breadcrumb";
export { DocsSwitcher } from "./docs-switcher";

// Re-export shared config (can be used in server components)
export { projects, getProjectFromSlug } from "./docs-config";
export type { DocsProject, ProjectInfo } from "./docs-config";
