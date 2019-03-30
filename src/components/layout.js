/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

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
          <footer style={{ position: 'fixed', bottom: 20, left: 20, color: 'black' }}>
            © {2019 === new Date().getFullYear() ? '2019' : `2019 - ${new Date().getFullYear()}`}, Built by EmNudge
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
