import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import AudioPlayer from "../components/audio-player"
import demo from "../audio/demo_no_slate.mp3"
import tags from "../audio/tags_demo.mp3"

const Demos = () => (
  <Layout>
    <SEO title="Demos" />
    <h1>Demo Reels</h1>
    <main>
      <div className="demo-reel">
        <h3>Character Demo Reel</h3>
        <AudioPlayer name="Character Demo Reel" volume={0.7} file={demo} />
        <p>
          I have done voices that range from large, grungey monsters, to
          soft-spoken role models, as well as high-pitched, psychotic villians,
          to focused, battle-torn soldiers. You can find specifics on my
          characters in the <Link to="/portfolio">portfolio</Link> section of
          this website.
        </p>
      </div>
      <div className="demo-reel" style={{ marginTop: 30 }}>
        <h3>Producer Tags Demo Reel</h3>
        <AudioPlayer name="Producer Tags Reel" volume={0.7} file={tags} />
        <p>
          I both voice and engineer producer tags for use in beats and songs.
          For a personalized quote, shoot off an email to{" "}
          <a href="mailto:contact@emnudge.com">Contact@EmNudge.com</a>.
        </p>
      </div>
    </main>
  </Layout>
)

export default Demos
