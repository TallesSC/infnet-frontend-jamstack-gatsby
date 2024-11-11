import { ImageDataLike } from 'gatsby-plugin-image';

export interface Post {
  frontmatter: {
    slug: string;
    date: string;
    title: string;
    subtitle: string;
    hero_image: ImageDataLike;
    hero_image_alt: string;
    hero_image_credit_link: string;
  };
  id: string;
  excerpt: string;
}

export interface PostQuery {
    mdx: Post;
}