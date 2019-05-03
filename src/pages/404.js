import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Whoops! Page Not Found</h1>
    <main>
      <p>You have just gone to a page that doesn't exist.</p>
      <p>
        Either you typed the URL incorrectly, or this is an in-site bug.
        <br/>
        If it's the latter, shoot me an email at <a href="mailto:contact@emnudge.com">contact@emnudge.com</a> and I'll fix it ASAP.
      </p>
    </main>
  </Layout>
)

export default NotFoundPage
