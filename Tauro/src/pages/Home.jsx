import './Home.css';
import Hero from '../components/Home/Hero';
import Beneficios from '../components/Home/Beneficios';
import ProductosDestacados from '../components/Home/ProductosDestacados';
import FormularioContacto from '../components/Home/FormularioContacto';
import lineasConRueda from '../assets/Lineas_con_rueda.png';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  // Para la animación del fade-in
  const [mostrar, setMostrar] = useState(false);
  const [animar, setAnimar] = useState(false);

  useEffect(() => {
    const timeoutMostrar = setTimeout(() => setMostrar(true), 200);
    const timeoutAnimar = setTimeout(() => setAnimar(true), 500);
    return () => {
      clearTimeout(timeoutMostrar);
      clearTimeout(timeoutAnimar);
    };
  }, []);

  return (
    <>
      {/* TORO FURRO FLOTANTE */}
      {mostrar && (
        <img
          src={lineasConRueda}
          alt="Toro Furro"
          className={`toro-furro-home${animar ? ' fade-in-up' : ''}`}
          draggable="false"
        />
      )}

      <Hero />
      <Beneficios />

      <div className="puente-boton-outer">
        <ProductosDestacados />
        <button
          className="puente-boton"
          onClick={() => navigate('/productos')}
        >
          Saber más
        </button>
      </div>
      <FormularioContacto />
    </>
  );
}

export default Home;
