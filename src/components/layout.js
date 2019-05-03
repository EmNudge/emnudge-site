import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql, Link } from "gatsby"

import Header from "./header/"
import "./globals.scss"
import "./layout.scss"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => {
      const currentYear = new Date().getFullYear();
      const copDate = 2019 + (2019 !== currentYear ? ` - ${currentYear}` : '');

      return (
        <React.Fragment>
          <Header pages={[
            { name: 'About', route: '/' },
            { name: 'Demos', route: '/demos' },
            { name: 'Portfolio', route: '/portfolio' },
            { name: 'Contact', route: '/contact' },
          ]}/>
  
          <main className="main-container">{children}</main>
  
          <footer style={{ position: 'fixed', bottom: 20, left: 20 }}>
            © {copDate}, <Link to="/website">Built by EmNudge</Link>
          </footer>
        </React.Fragment>
      )
    }}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
