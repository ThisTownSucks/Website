import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout hideFooter>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>This Town Sucks</h1>
    <Link to='/manifesto/'>+</Link>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
