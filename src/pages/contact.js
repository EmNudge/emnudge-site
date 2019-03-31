import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Table from '../components/table'

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <h1>How To Reach Me</h1>
    <Table 
      head={['Type', 'Link', 'Use Case']}
      rows={[
        [
          'Email', 
          { link: 'mailto:contact@emnudge.com', text: 'Contact@EmNudge.com' }, 
          'for any inquiries regarding projects, price quotes, or general discussions.'
        ],
        [
          'Twitter', 
          { link: 'https://twitter.com/emnudge', text: '@EmNudge' }, 
          'To find my poor social commentary and sub-par jokes.'
        ],
        [
          'Steam', 
          { link: 'https://steamcommunity.com/id/eMnudge/', text: 'EmNudge' }, 
          'To see which games I\'ve been playing recently'
        ],
        [
          'YouTube', 
          { link: 'https://www.youtube.com/channel/UCVfq6JUsVWVDg-1Ls0dW6ng', text: 'EmNudge' }, 
          'To watch some videos I\'ve made on various, completely arbitrary topics'
        ],
      ]}
    />
  </Layout>
)

export default Contact
