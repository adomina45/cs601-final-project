import React from 'react';
import HamburgerNav from './HamburgerNav';
import '../styles/main.css';

function Header() {
  return (
    <header>
        <HamburgerNav/>
        <h1>Alexander Domina Portfolio</h1>
    </header>
  );
}

export default Header;