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
    render={data => (
      <>
        <Header pages={[
          { name: 'About', route: '/' },
          { name: 'Demos', route: '/demos' },
          { name: 'Portfolio', route: '/portfolio' },
          { name: 'Contact', route: '/contact' },
        ]}/>
        <div className="main-container">
          <main>{children}</main>
          <footer style={{ position: 'fixed', bottom: 20, left: 20, color: '#000a' }}>
            © {2019 === new Date().getFullYear() ? '2019' : `2019 - ${new Date().getFullYear()}`}, <Link to="/website">Built by EmNudge </Link>
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
