import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./index.scss"

const Header = props => (
  <header>
    <div className="content">
      <div className="brand">
        <Link to="/">
          <h1>EmNudge</h1>
          <small>Voice Over Artist</small>
        </Link>
      </div>
      <nav>
        {props.pages.map((page, index) => 
          <>
            <span key={page.route}>
              <Link to={page.route}>{page.name}</Link>
            </span> {index !== props.pages.length - 1 ? '/' : ''}
          </>
        )}
      </nav>
    </div>
  </header>
)

export default Header