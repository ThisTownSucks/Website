import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout hideFooter>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} description="Example description" />
    <h1>Landing Page</h1>
  </Layout>
)

export default IndexPage
