import React from 'react'
import Helmet from 'react-helmet'
import { Link,graphql } from 'gatsby'

import Layout from '../components/layout'

class WorkPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteDescription = post.excerpt
    const whatList = post.frontmatter.what_i_did
    const toolsList = post.frontmatter.tools

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
              <p className="post__callout">{post.frontmatter.one_liner}</p>
            </header>
            <div className="post__details">

              <div className="post__details-section">
                <h2 className="h5 post__details-heading">What I Did</h2>
                <ul className="post__details-list">
                  {whatList.map((item, index) => (
                    <li className="post__details-list-item" key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="post__details-section">
                <h2 className="h5 post__details-heading">Tools Used</h2>
                <ul className="post__details-list">
                  {toolsList.map((item, index) => (
                    <li className="post__details-list-item" key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="post__details-section">
                <h2 className="h5 post__details-heading">Link</h2>
                <a className="post__details-link" href={post.frontmatter.live_link} rel="noreferrer">Visit Website &rarr;</a>
              </div>

            </div>
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
        what_i_did
        tools
        live_link
        one_liner
      }
    }
  }
`
