import './Home.css';
import Hero from '../components/Home/Hero';
import Beneficios from '../components/Home/Beneficios';
import ProductosDestacados from '../components/Home/ProductosDestacados';
import FormularioContacto from '../components/Home/FormularioContacto';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <>
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
