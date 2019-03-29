import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AudioPlayer from "../components/audio-player"

import demo from '../audio/demo_no_slate.mp3'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Demo Reels</h1>
    <p>This is a web development test of a custom React.js audio player in Gatsby</p>
    <AudioPlayer name="Character Demo Reel" volume={.7} file={demo} />
    <br/> <br/>
    <br/> <br/>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
