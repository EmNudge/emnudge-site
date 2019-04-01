import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import "./index.scss"

const Header = props => {
  const [navIsOpen, setNavIsOpen] = useState(false)
  const [clickedOnce, setclickedOnce] = useState(false)

  function toggleNavVisibility() {
    setclickedOnce(true)
    setNavIsOpen(!navIsOpen)
  }

  return (
    <header>
      <div className="content">
        <div className="brand">
          <Link to="/">
            <h1>EmNudge</h1>
            <small>Voice Over Artist</small>
          </Link>
        </div>
        <div className="hamburger-container" onClick={toggleNavVisibility}>
          <div className={"hamburger " + (navIsOpen ? "close" : "")}></div>
        </div>
        <nav className={navIsOpen && clickedOnce ? 'open' : clickedOnce ? 'closed' : ''}>
          {props.pages.map((page, index) => 
            <React.Fragment key={page.route}>
              <span>
                <Link to={page.route}>{page.name}</Link>
              </span>
            </React.Fragment>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Header