import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import AudioPlayer from "../components/audio-player"
import demo from "../audio/demo_no_slate.mp3"

const Demos = () => (
  <Layout>
    <SEO title="Demos" />
    <h1>Demo Reels</h1>
    <main>
      <div className="demo-reel">
        <h3>Character Demo Reel</h3>
        <AudioPlayer name="Character Demo Reel" volume={0.7} file={demo} />
        <br/>
        <p>
          I have done voices that range from large, grungey monsters, to
          soft-spoken role models, as well as high-pitched, psychotic villians,
          to focused, battle-torn soldiers. You can find specifics on my
          characters in the <Link to="/portfolio">portfolio</Link> section of
          this website.
        </p>
      </div>
    </main>
  </Layout>
)

export default Demos
