module.exports = {
  siteMetadata: {
    title: 'Tim Dunklee',
    author: 'Tim Dunklee',
    description: 'The personal portfolio of front-end web developer and boardsports enthusiast Tim Dunklee.',
    siteUrl: 'https://www.timdunklee.com',
  },
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/notes`,
        name: 'notes',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/work`,
        name: 'work',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets/images`,
        name: 'images',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          'gatsby-remark-copy-linked-files',
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              quality: 80,
              withWebp: {
                quality: 90,
              },
              linkImagesToOriginal: false
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-smartypants',
          {
            resolve: "gatsby-plugin-react-svg",
            options: {
              rule: {
                include: /\.inline\.svg$/
              }
            }
          },
        ],
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-7004294-1`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Tim Dunklee's Portfolio`,
        short_name: `Tim Dunklee`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#333333`,
        display: `minimal-ui`,
        icon: `src/assets/images/favicon-512x512.png`,
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ "content:encoded": edge.node.html }],
                })
              })
            },
            query: `
              {
                allMarkdownRemark(
                  filter: {frontmatter: {layout: {eq: "post"}}},
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: "/feed.xml",
            title: "TimDunklee.com",
          },
        ],
      },
    },
  ],
}
