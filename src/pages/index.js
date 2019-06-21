import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'

import Work from '../components/Section-work'
import About from '../components/Section-about'
import Layout from '../components/layout'

class BlogIndex extends React.Component {
  render() {
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <Layout location={this.props.location}>
        <Work />
        <About />
        <section className="section" id="notes">
          <div className="wrap">
            <div className="section-header">
              <h2 className="section-header__heading">Notes</h2>
            </div>
            <ul className="notes-list">
              {posts.map(({ node }) => {
                const title = get(node, 'frontmatter.title') || node.fields.slug
                return (
                  <li className="notes-list__item" key={node.fields.slug}>
                    <span className="note-meta">{node.frontmatter.date}</span>
                    <h3>
                      <Link className="note-link" to={'/notes' + node.fields.slug}>
                        {title}
                      </Link>
                    </h3>
                  </li>
                )
              })}
            </ul>
          </div>
        </section>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
        }
      }
    }
  }
`
