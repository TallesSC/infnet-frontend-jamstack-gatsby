import PageLayout from '../layouts/PageLayout/PageLayout';
import { graphql, PageProps } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import React from 'react';
import { PostQuery } from '../types';
import Post from '../components/Post/Post';

export default function PostPage({data} : PageProps<PostQuery>) {
  const image = getImage(data.mdx.frontmatter.hero_image)

    console.log(data);

  return (
    <PageLayout>
      <Post post={data.mdx} />
    </PageLayout>
  )
}


export const query = graphql`
    query($id: String) {
        mdx(id: {eq: $id}) {
            frontmatter {
                slug
                date(formatString: "DD/MM/YYYY")
                title
                subtitle
                hero_image {
                    childImageSharp {
                        gatsbyImageData(
                            width: 1350
                            placeholder: BLURRED
                            formats: [AUTO, WEBP, AVIF, JPG]
                        )
                    }
                }
                hero_image_alt
                hero_image_credit_link
            }
            id
            excerpt
        }
    }
`

export const Head = ({ data }: PageProps<PostQuery>) => <title>{data.mdx.frontmatter.title}</title>