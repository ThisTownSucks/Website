import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'

export default ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark

  return (
    <Layout>
      <div className="blog-posts">
        {posts.map(({ node: post }) => {
          return (
            <div className="blog-post-listing" key={post.id}>
              <h2>
                <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
              </h2>
              <h3>{post.frontmatter.date}</h3>
              <p>{post.excerpt}</p>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MM DD, YYYY")
            path
          }
        }
      }
    }
  }
`
