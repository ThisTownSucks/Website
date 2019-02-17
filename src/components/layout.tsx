import React, { FC } from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import Footer from './footer'
import './layout.css'

interface LayoutProps {
  hideFooter?: boolean
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
            maxWidth: '42rem',
            paddingTop: 0,
            paddingRight: `1.0875rem`,
            paddingBottom: '1.45rem',
            paddingLeft: '1.0875rem',
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
