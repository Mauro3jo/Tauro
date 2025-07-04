import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductosDestacados.css';

import HDMA05 from '../../assets/HDMA05.png';
import HDMA087 from '../../assets/HDMA087.png';
import HDMA183 from '../../assets/HDMA183.png';
import fondoIzquierda from '../../assets/esquina-izquierda.png';
import fondoDerecha from '../../assets/esquina-derecha.png';

const productos = [
  { nombre: 'HDMA05', img: HDMA05 },
  { nombre: 'HDMA183', img: HDMA183 },
  { nombre: 'HDMA087', img: HDMA087 },
];

function getOrder(center, total) {
  return [
    (center - 1 + total) % total,
    center,
    (center + 1) % total,
  ];
}

function ProductosDestacados() {
  const [center, setCenter] = useState(0);
  const intervalRef = useRef(null);
  const navigate = useNavigate();

  const resetInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCenter(c => (c + 1) % productos.length);
    }, 5000);
  };

  useEffect(() => {
    resetInterval();
    return () => clearInterval(intervalRef.current);
  }, [center]);

  const handlePrev = () => {
    setCenter((c) => (c - 1 + productos.length) % productos.length);
    resetInterval();
  };
  const handleNext = () => {
    setCenter((c) => (c + 1) % productos.length);
    resetInterval();
  };

  const order = getOrder(center, productos.length);
  const seleccionado = productos[center].nombre;

  return (
    <section className="destacados">
      <img src={fondoIzquierda} alt="Fondo izquierdo" className="fondo-izquierda" />
      <img src={fondoDerecha} alt="Fondo derecho" className="fondo-derecha" />
      <h2 className="titulo">Nuestros productos</h2>
      <div className="carrusel-outer">
        <div className="carrusel">
          <button className="nav-btn nav-btn-left" onClick={handlePrev}>&lt;</button>
          {order.map((prodIndex, idx) => {
            let className = "item";
            if (idx === 0) className += " left";
            else if (idx === 1) className += " activo";
            else if (idx === 2) className += " right";
            const producto = productos[prodIndex];
            return (
              <div className={className} key={producto.nombre}>
                <img src={producto.img} alt={producto.nombre} />
              </div>
            );
          })}
          <button className="nav-btn nav-btn-right" onClick={handleNext}>&gt;</button>
        </div>
      </div>
      <div className="nombre-central">{seleccionado}</div>
      <div className="indicadores">
        {productos.map((_, i) => (
          <span key={i} className={`punto ${i === center ? 'activo' : ''}`} />
        ))}
      </div>
      {/* El botón va último para que siempre quede arriba */}
      <button className="btn-saber-mas" style={{zIndex: 100}} onClick={() => navigate('/productos')}>
        Saber más
      </button>
    </section>
  );
}

export default ProductosDestacados;
