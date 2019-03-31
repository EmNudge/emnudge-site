import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>My Name Is EmNudge</h1>
    <div>
      <p>Okay, well, not my <i>real</i> name. It's just something I have gone by online for quite some time. My real, legal name is Calvin Kipperman. You can call me whichever feels easier to pronounce.</p>
      <p>I'm a voice actor and voice over artist with years of experience in the industry. My voice is generally describes as smooth, deep, rough, and authorative. My usual roles consist of large villians, soft-spoken role models, and battle-worn soldiers.</p>
      <p>You can hear samples over at the <Link to="/demos">Voice Demos</Link> page</p>
      <p>For voice work, I use a CAD E 100s with an Audient ID22 for an interface. This is routed into a Macbook Pro running REAPER where any requested post-processing is done.</p>
    </div>
  </Layout>
)

export default IndexPage
