import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import AudioPlayer from "../components/audio-player"
import demo from '../audio/demo_no_slate.mp3'

const Demos = () => (
  <Layout>
    <SEO title="Demos" />
    <h1>Demo Reels</h1>
    <AudioPlayer name="Character Demo Reel" volume={.7} file={demo} />
  </Layout>
)

export default Demos
