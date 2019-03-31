import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Website" />
    <h1>You've Found A Secret Page!</h1>
    <div>
      <p>In addition to being a voice actor, I am also a web developer. 
      <br/>As such, I have built this website myself.</p>
      <p>Rather than using a web builder (such as <a href="https://www.squarespace.com/">Squarespace</a>, <a href="https://www.wix.com/">Wix</a>, <a href="https://wordpress.com/">Wordpress</a>), I used <a href="https://reactjs.org/">React.js</a> and <a href="https://www.gatsbyjs.org/">Gatsby.js</a> - a frontend framework used by web developers. <br/>React.js allows me to compartmentalize different parts of the website into components, while Gatsby allows me to render the Javascript-filled pages into lightning fast HTML/CSS wherever applicable.</p>
      <p>While no CSS library was used, as I like my css to be completely custom, I used <a href="https://sass-lang.com/">Scss</a>, a CSS preprocessor was used, in order to nest my CSS - making styling much cleaner.</p>
      <p>While this setup seems much more complicated (and definitely is) for anyone first starting to make a website, this allows to do what I love to do with my websites - make absolutely everything custom.</p>
      <p>Even small things, such as the audio player in the <Link to="/demos">Demos</Link> page, as well as both the tables in the <Link to="/portfolio">Portfolio</Link> and <Link to="/portfolio">Contact</Link> pages are completely custom.</p>
      <p>If you want a more in depth explanation or some source code, send me an email at <a href="mailto:contact@emnudge.com">contact@emnudge.com</a>!</p>
    </div>
  </Layout>
)

export default IndexPage
