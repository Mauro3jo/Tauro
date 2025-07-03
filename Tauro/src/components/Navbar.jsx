import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '1rem', background: '#000', color: '#fff' }}>
      <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none' }}>
        <li><Link to="/" style={{ color: '#fff' }}>Inicio</Link></li>
        <li><Link to="/productos" style={{ color: '#fff' }}>Productos</Link></li>
        <li><Link to="/sobre-nosotros" style={{ color: '#fff' }}>Sobre nosotros</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
