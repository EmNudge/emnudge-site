import React from 'react';
import './index.scss'

const HamburgerIcon = ({ onClick, isOpen }) => (
    <div className="hamburger-container" onClick={onClick}>
        <div className={"hamburger" + (isOpen ? " close" : "")}></div>
    </div>
);

export default HamburgerIcon;