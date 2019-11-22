import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "gatsby"
import Header from './header/';
import getCopyright from '../utils/getCopyright';
import './layout.scss';

const Layout = ({ children }) => {
  const copyright = getCopyright(2019);

	return (
		<React.Fragment>
			<Header
				pages={[
					{ name: 'About', route: '/' },
					{ name: 'Demos', route: '/demos' },
					{ name: 'Portfolio', route: '/portfolio' },
					{ name: 'Contact', route: '/contact' }
				]}
			/>
      <main className="main-container">{children}</main>
      <footer style={{ position: 'fixed', bottom: 20, left: 20 }}>
        © {copyright}, <Link to="/website">Built by EmNudge</Link>
      </footer>
		</React.Fragment>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired
};

export default Layout;
