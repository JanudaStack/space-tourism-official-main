import React from 'react';
import { Link } from 'react-router-dom';
import hamburgerIcon from '../../assets/shared/icon-hamburger.svg';
import siteLogo from '../../assets/shared/logo.svg';
import './Navbar.css';

function Navbar() {
    return (
        <header className="site-header">
            <nav className="navigation-bar">
                <div className="site-logo">
                    <Link to="/">
                        <img src={siteLogo} alt="site-logo" />
                    </Link>
                </div>
                <div className="tablet-navbar">
                    <ul className="nav-links-tablet">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/destination">Destination</Link>
                        </li>
                        <li>
                            <Link to="/crew">Crew</Link>
                        </li>
                        <li>
                            <Link to="/technology">Technology</Link>
                        </li>
                    </ul>
                </div>
                <div className="desktop-navbar">
                    <ul className="nav-links-desktop">
                        <li>
                            <Link to="/">00 Home</Link>
                        </li>
                        <li>
                            <Link to="/destination">01 Destination</Link>
                        </li>
                        <li>
                            <Link to="/crew">02 Crew</Link>
                        </li>
                        <li>
                            <Link to="/technology">03 Technology</Link>
                        </li>
                    </ul>
                </div>
                <div className="menu-btn-mobile">
                    <button className="hamburger-menu">
                        <img src={hamburgerIcon} alt="hamburger-icon" />
                    </button>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
