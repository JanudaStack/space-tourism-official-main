import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import hamburgerIcon from '../../assets/shared/icon-hamburger.svg';
import siteLogo from '../../assets/shared/logo.svg';
import closeIcon from '../../assets/shared/icon-close.svg';
import './Navbar.css';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);

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
                    <button className="hamburger-menu" onClick={toggleMenu}>
                        <img
                            src={menuOpen ? closeIcon : hamburgerIcon}
                            alt="menu-icon"
                        />
                    </button>
                </div>
                <div
                    className={`mobile-navbar ${menuOpen ? 'open' : 'closed'}`}
                >
                    <ul className="nav-links-mobile">
                        <li>
                            <Link to="/" onClick={closeMenu}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/destination" onClick={closeMenu}>
                                Destination
                            </Link>
                        </li>
                        <li>
                            <Link to="/crew" onClick={closeMenu}>
                                Crew
                            </Link>
                        </li>
                        <li>
                            <Link to="/technology" onClick={closeMenu}>
                                Technology
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
