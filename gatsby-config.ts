import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Infnet Frontend Jamstack com Gatsby`,
    siteUrl: `https://www.yourdomain.tld`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: ['gatsby-plugin-sass', 'gatsby-plugin-image', 'gatsby-plugin-mdx', 'gatsby-plugin-sharp', 'gatsby-transformer-sharp', {
    resolve: 'gatsby-source-filesystem',
    options: {
      'name': 'images',
      'path': './src/images/'
    },
    __key: 'images'
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      'name': 'pages',
      'path': './src/pages/'
    },
    __key: 'pages'
  }, {
    resolve: `gatsby-plugin-alias-imports`,
    options: {
      alias: {
        "@src": "src",
        "@components": "src/components",
        "@layouts": "src/layouts",
        "@pages": "src/pages",
        "@styles": "src/styles",
        "@templates": "src/templates",
      },
      extensions: ['js', 'css', 'scss', 'sass', 'less', 'png', 'jpg', 'jpeg', 'gif', 'svg', 'json']
    }
  }, {
    resolve: `gatsby-omni-font-loader`,
    options: {
      enableListener: true,
      preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
      web: [
        {
          name: `Open Sans`,
          file: `https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap`,
        },
      ],
    },
  },]
};

export default config;
