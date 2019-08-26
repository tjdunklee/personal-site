import React from 'react'
import Helmet from 'react-helmet'
import { Link,graphql } from 'gatsby'

import Layout from '../components/layout'

class WorkPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteDescription = post.excerpt

    return (
      <Layout location={this.props.location}>
        <Helmet
          meta={[{ name: 'description', content: siteDescription }]}
          title={`${post.frontmatter.title}`}
        />
        <article className="post">
          <div className="wrap wrap--narrow">
            <header className="post__header">
              <h1 className="h2 post__title">{post.frontmatter.title}</h1>
              <p className="post__meta">{post.frontmatter.date}</p>
            </header>
            <div className="post__content" dangerouslySetInnerHTML={{ __html: post.html }} />
          </div>
        </article>
      </Layout>
    )
  }
}

export default WorkPostTemplate

export const pageQuery = graphql`
  query WorkPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
