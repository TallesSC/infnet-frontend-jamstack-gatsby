import { Post as PostProps } from '../../types';
import React from 'react';
import * as styles from './Post.module.scss';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';

interface PostPageProps {
  post: PostProps;
}

export default function Post({post}: PostPageProps) {

  const image = getImage(post.frontmatter.hero_image);

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <GatsbyImage className={styles.image} alt={post.frontmatter.hero_image_alt} image={image as IGatsbyImageData}/>
          <h1 className={styles.title}>{post.frontmatter.title}</h1>
        </div>
        <p className={styles.date}>{post.frontmatter.date}</p>
        <h2 className={styles.subtitle}>{post.frontmatter.subtitle}</h2>
        <p className={styles.excerpt}>{post.excerpt}</p>
      </div>
    </section>
  );
}