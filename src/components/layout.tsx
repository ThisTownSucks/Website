import React, { FC } from 'react'
import { bool, node } from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import Footer from './footer'
import './layout.css'

interface LayoutProps {
  hideFooter: boolean
}

const Layout: FC<LayoutProps> = ({ children, hideFooter }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          {children}
          {!hideFooter && <Footer />}
        </div>
      </>
    )}
  />
)

export default Layout
