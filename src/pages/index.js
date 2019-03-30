import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>My Name Is EmNudge</h1>
    <div style={{ maxWidth: 600 }}>
      <p>Okay, well, not my <i>real</i> name. It's just something I have gone by online for quite some time. My real, legal name is Calvin Kipperman. You can call me whichever feels easier to pronounce.</p>
      <p>I'm a voice actor and voice over artist with years of experience in the industry.</p>
    </div>
    
    <br/> <br/>
    <br/> <br/>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
