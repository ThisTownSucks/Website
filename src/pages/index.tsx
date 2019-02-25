import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Aberration from '../components/aberration'

const IndexPage = () => {
  return (
    <Layout hideFooter>
      <SEO
        title="Home"
        keywords={[`gatsby`, `application`, `react`]}
        description="Example description"
      />
      <h1>Landing Page</h1>
      <Aberration>
        <h2>This Town Sucks</h2>
      </Aberration>
    </Layout>
  )
}

export default IndexPage
