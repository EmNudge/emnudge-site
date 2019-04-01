import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Table from '../components/table'

const Contact = () => {
  const [screenWidth, setScreenWidth] = React.useState(800)

  React.useEffect(() => {
    setScreenWidth(window.innerWidth)
  });

  return (
    <Layout>
      <SEO title="Contact" />
      <h1>How To Reach Me</h1>
      {screenWidth > 750 
        ? <Table 
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
          : <div>
            <p>
              For any inquiries regarding projects, price quotes, or general discussions, send me an email to <a href="mailto:contact@emnudge.com">Contact@EmNudge.com</a>.
            </p>
            <p>
              You can also find me on <a href="https://twitter.com/emnudge">Twitter</a>, <a href="https://steamcommunity.com/id/eMnudge/">Steam</a>, and <a href="https://www.youtube.com/channel/UCVfq6JUsVWVDg-1Ls0dW6ng">YouTube</a>!
            </p>
            <p>

            </p>
          </div> 
      }
    </Layout>
  )
}

export default Contact
