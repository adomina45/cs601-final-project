import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/main.css';

function HamburgerIcon() {
    return (
        <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#000"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        >
        <line x1="3" y1="6" x2="21" y2="6" />
        <line x1="3" y1="12" x2="21" y2="12" />
        <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
    );
}

function HamburgerNav() {
    const [clicked, setClicked] = useState<boolean>(false);

    return (
        <div className="hamburger-nav">
            <div className="hamburger-container">
                <div onClick={() => setClicked(!clicked)} className="hamburger">
                    <HamburgerIcon />
                </div>
            </div>
            {clicked && (
                <div className="nav">
                    <nav>
                        <Link to="/">Home</Link>
                        <Link to="/photos">Photos</Link>
                        <Link to="/contact">Contact</Link>
                        <Link to="/portfolio">Portfolio</Link>
                        <Link to="/resume">Resume</Link>
                    </nav>
                </div>
            )}
        </div>
    );
}

export default HamburgerNav;