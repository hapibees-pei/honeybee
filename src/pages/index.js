import React from "react"
import { Link } from "gatsby"

import Layout from "../layout/layout"
import Image from "../layout/image"
import SEO from "../components/seo"
import Home from "../components/Home"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Home />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
