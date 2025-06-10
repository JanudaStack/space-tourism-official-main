import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
        <>
            <header className="site-header">
                <nav className="navigation-bar">
                    <div className="site-logo">
                        <a href="#">
                            <img
                                src="/src/assets/shared/logo.svg"
                                alt="site-logo"
                            />
                        </a>
                    </div>
                    <div className="desktop-navbar">
                        <ul className="nav-links-desktop">
                            <li>
                                <a href="#">00 Home</a>
                            </li>
                            <li>
                                <a href="#">01 Destination</a>
                            </li>
                            <li>
                                <a href="#">02 Crew</a>
                            </li>
                            <li>
                                <a href="#">03 Technology</a>
                            </li>
                        </ul>
                    </div>
                    <div className="mobile-navbar">
                        <ul className="nav-links-mobile">
                            <li>
                                <a href="#">00 Home</a>
                            </li>
                            <li>
                                <a href="#">01 Destination</a>
                            </li>
                            <li>
                                <a href="#">02 Crew</a>
                            </li>
                            <li>
                                <a href="#">03 Technology</a>
                            </li>
                        </ul>
                    </div>
                    <div className="menu-btn-mobile">
                        <button className="hamburger-menu">
                            <img
                                src="src/assets/shared/icon-hamburger.svg"
                                alt="hamburger-icon"
                            />
                        </button>
                    </div>
                </nav>
            </header>
        </>
    );
}

export default Navbar;
