import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import * as styles from './PostList.module.scss';
import { Post } from '../../types';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';

export default function PostList() {

    const data = useStaticQuery(graphql`{
        allMdx(sort: {frontmatter: {date: DESC}}) {
            nodes {
                frontmatter {
                    slug
                    date(formatString: "DD/MM/YYYY")
                    title
                    subtitle
                    hero_image {
                        childImageSharp {
                            gatsbyImageData(
                                width: 400
                                placeholder: BLURRED
                                formats: [AUTO, WEBP, AVIF, JPG]
                            )
                        }
                    }
                    hero_image_alt
                    hero_image_credit_link
                }
                id
                excerpt(pruneLength: 200)
            }
        }
    }`);

  return (
    <section className={styles.section}>
      <div className="container">
        <h1 className={styles.sectionTitle}>Latest News</h1>
        <ul className={styles.list}>
          {data.allMdx?.nodes && data.allMdx.nodes.map((post: Post) => (
            <li key={post.id} className={styles.card}>
              <Link to={`/${post.frontmatter.slug}`} className={styles.link}>
              <GatsbyImage image={getImage(post.frontmatter.hero_image) as IGatsbyImageData}
                           alt={post.frontmatter.hero_image_alt} className={styles.image}/>
              <div className={styles.content}>
                <p className={styles.date}>{post.frontmatter.date}</p>
                <h2 className={styles.title}>{post.frontmatter.title}</h2>
                <p className={styles.excerpt}>{post.excerpt}</p>
              </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}