export interface BlogPostCreate {
  title: string;
  content: string;
  image?: string;
  published?: boolean;
  authorId: string;
}
