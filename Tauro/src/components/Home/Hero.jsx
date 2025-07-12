import './Hero.css';
import fondo from '../../assets/Mask group.png';
import titulo from '../../assets/Elegí Calidad.png';
import toroHeroHome from '../../assets/ToroHeroHome.png'; // Toro blanco

import { useState, useEffect } from 'react';

function Hero() {
  const [mostrar, setMostrar] = useState(false);
  const [animar, setAnimar] = useState(false);

  useEffect(() => {
    // Primero montamos el toro (invisible)
    const timeoutMostrar = setTimeout(() => setMostrar(true), 200);
    // Luego, activamos el fade-in
    const timeoutAnimar = setTimeout(() => setAnimar(true), 500);
    return () => {
      clearTimeout(timeoutMostrar);
      clearTimeout(timeoutAnimar);
    };
  }, []);

  return (
    <section className="hero">
      <img src={fondo} alt="Fondo" className="hero-bg" />

      {/* Monta el toro blanco apenas entra, fade-in después */}
      {mostrar && (
        <img
          src={toroHeroHome}
          alt="Toro Blanco"
          className={`toro-izquierda${animar ? ' fade-in-up' : ''}`}
        />
      )}

      <img src={titulo} alt="Elegí Calidad" className="hero-title-img" />

      <p className="hero-subtitle">
        Nuestros neumáticos de alta calidad te ofrecen un agarre excepcional y la<br />
        seguridad que merecés.
      </p>
    </section>
  );
}

export default Hero;
