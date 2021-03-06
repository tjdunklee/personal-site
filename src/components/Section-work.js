import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'

import LogoLSI from '../assets/images/client-logos/client-logo-lsi.inline.svg'
import LogoBWW from '../assets/images/client-logos/client-logo-bww.inline.svg'
import LogoNike from '../assets/images/client-logos/client-logo-nike.inline.svg'
import LogoCambria from '../assets/images/client-logos/client-logo-cambria.inline.svg'

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/work/"}}, sort: { fields: [frontmatter___date], order: DESC }) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                date(formatString: "DD MMMM, YYYY")
                title
                thumbnail {
                  childImageSharp {
                    fluid(maxWidth: 600, webpQuality: 90) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const workItems = data.allMarkdownRemark.edges;

      return (
        <section className="section work" id="work">
          <div className="wrap">
            <div className="section-header">
              <h2 className="section-header__heading">Work</h2>
            </div>
            <div className="work-items">

              {workItems.map((item, index) => (
                <div key={index} className="work-item">
                  <div className="work-item__img">
                    <Img
                      fluid={item.node.frontmatter.thumbnail.childImageSharp.fluid}
                      alt={'Screenshot of the ' + item.node.frontmatter.title + ' website'}
                    />
                  </div>

                  <h3 className="work-item__title">{ item.node.frontmatter.title }</h3>
                  <Link className="work-item__cta" to={'/work' + item.node.fields.slug}>
                    See Details &rarr;
                  </Link>
                </div>
              ))}

            </div>
            <div className="work-logos">
              <h3 className="work-logos__heading">Previous Clients</h3>
              <ul className="work-logos__grid">
                <li className="work-logos__grid-item">
                  <LogoLSI/>
                </li>
                <li className="work-logos__grid-item">
                  <LogoBWW/>
                </li>
                <li className="work-logos__grid-item">
                  <LogoNike/>
                </li>
                <li className="work-logos__grid-item">
                  <LogoCambria/>
                </li>
              </ul>
            </div>
          </div>
        </section>
      )
    }}
  />
)
