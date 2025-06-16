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
        id='hamburger-svg'
        >
            <line x1="3" y1="6" x2="21" y2="6" id='hamburger-svg-line1'/>
            <line x1="3" y1="12" x2="21" y2="12" id='hamburger-svg-line2'/>
            <line x1="3" y1="18" x2="21" y2="18" id='hamburger-svg-line3'/>
        </svg>
    );
}

function HamburgerNav() {
    const [clicked, setClicked] = useState<boolean>(false);

    return (
        <div className="hamburger-nav" id='hamburger-nav'>
            <div className="hamburger-container" id='hamburger-container'>
                <div onClick={() => setClicked(!clicked)} className="hamburger" id='hamburger'>
                    <HamburgerIcon aria-label="Website Navigation Button" />
                </div>
            </div>
            {clicked && (
                <div className="nav" id='nav-div'>
                    <nav id='nav'>
                        <Link to="/" id='home-link'>Home</Link>
                        <Link to="/photos" id='photos-link'>Photos</Link>
                        <Link to="/contact" id='contact-link'>Contact</Link>
                        <Link to="/portfolio" id='portfolio-link'>Portfolio</Link>
                        <Link to="/resume" id='resume-link'>Resume</Link>
                    </nav>
                </div>
            )}
        </div>
    );
}

export default HamburgerNav;