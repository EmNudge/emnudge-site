import { Link } from "gatsby"
import HamburgerIcon from './hamburger-icon';
import React, { useState } from "react"
import "./index.scss"

const Header = ({ pages }) => {
  const [navIsOpen, setNavIsOpen] = useState(false)

  return (
    <header>
      <div className="content">
        <Link className="brand" to="/">
          <h1>EmNudge</h1>
          <small>Voice Over Artist</small>
        </Link>

        <HamburgerIcon 
          onClick={() => setNavIsOpen(!navIsOpen)} 
          isOpen={navIsOpen} 
        />
        
        <nav className={navIsOpen ? 'open' : 'closed'}>
          {pages.map(page => 
            <React.Fragment key={page.route}>
              <span>
                <Link to={page.route} activeClassName="active">{page.name}</Link>
              </span>
            </React.Fragment>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Header