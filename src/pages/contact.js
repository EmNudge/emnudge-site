import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Table from '../components/table'

import './contact.scss'

const Contact = () => (
  <Layout>
    <SEO title="Contact" styleTag={<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />} />

    <h1>How To Reach Me</h1>
    <main className="contact-content">
      <Table 
        head={['Type', 'Link', 'Use Case']}
        rows={[
          [
            { icon: 'fas fa-envelope', text: 'Email'},
            { link: 'mailto:contact@emnudge.com', text: 'Contact@EmNudge.com' }, 
            'For any inquiries regarding projects, price quotes, or general discussions.'
          ],
          [
            { icon: 'fab fa-imdb', text: 'IMDb'},
            { link: 'https://www.imdb.com/name/nm10664016/', text: 'Calvin Kipperman' }, 
            'To view recent titles I have lent my voice towards.'
          ],
          [
            { icon: 'fab fa-twitter', text: 'Twitter'},
            { link: 'https://twitter.com/emnudge', text: '@EmNudge' }, 
            'To find my poor social commentary and sub-par jokes.'
          ],
          [
            { icon: 'fab fa-steam', text: 'Steam'},
            { link: 'https://steamcommunity.com/id/eMnudge/', text: 'EmNudge' }, 
            'To see which games I\'ve been playing recently.'
          ],
          [
            { icon: 'fab fa-youtube', text: 'YouTube'},
            { link: 'https://www.youtube.com/channel/UCVfq6JUsVWVDg-1Ls0dW6ng', text: 'EmNudge' }, 
            'To watch some videos I\'ve made on various, completely arbitrary topics.'
          ],
        ]}
      />
      <div>
        <p>
          For any inquiries regarding projects, price quotes, or general discussions, send me an email to <a href="mailto:contact@emnudge.com">Contact@EmNudge.com</a>.
        </p>
        <p>
          You can also find me on <a href="https://www.imdb.com/name/nm10664016/">IMDb</a>, <a href="https://twitter.com/emnudge">Twitter</a>, <a href="https://steamcommunity.com/id/eMnudge/">Steam</a>, and <a href="https://www.youtube.com/channel/UCVfq6JUsVWVDg-1Ls0dW6ng">YouTube</a>!
        </p>
      </div> 
    </main>
  </Layout>
)

export default Contact
