import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/Logo.png';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* Logo a la izquierda */}
        <div className="navbar-left">
          <div className="logo-wrapper">
            <img src={logo} alt="Logo Tauro" className="logo" />
          </div>
        </div>

        {/* Botón hamburguesa solo visible en mobile */}
        <button className="hamburger" onClick={toggleMenu}>
          ☰
        </button>

        {/* Menú alineado a la derecha */}
        <nav className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
          <Link
            to="/"
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Menú
          </Link>
          <Link
            to="/productos"
            className={`nav-link ${location.pathname === '/productos' ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Productos
          </Link>
          <Link
            to="/sobre-nosotros"
            className={`nav-link ${location.pathname === '/sobre-nosotros' ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Sobre nosotros
          </Link>
          <span className="nav-importador">Importado por Nome tires SRL</span>
        </nav>

      </div>
    </header>
  );
}

export default Navbar;
