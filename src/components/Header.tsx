import HamburgerNav from './HamburgerNav';
import '../styles/main.css';

function Header() {
  return (
    <header id='header'>
        <HamburgerNav/>
        <h1 id='header-text'>Alexander Domina Portfolio</h1>
    </header>
  );
}

export default Header;