import './HeroProductos.css';
import fondoMoto from '../../assets/FondoHeroProductos.png';
import marcaRueda from '../../assets/MarcaRuedaHero.png';
import toro from '../../assets/ToroProductosHero.png';
import neumatico from '../../assets/Rueda de moto random para Pág de productos 1.png';

const HeroProductos = () => (
  <>
    <section className="hero-productos">
      <img src={fondoMoto} alt="Fondo moto" className="fondo-moto" />
      <div className="hero-inner">
        <div className="visual-col">
          <img src={marcaRueda} alt="Marca rueda" className="marca-horizontal" />
          <div className="figura">
            <img src={toro} alt="Toro Tauro" className="toro-fondo" />
            <img src={neumatico} alt="Neumático" className="neumatico" />
          </div>
        </div>
        <div className="texto-hero">
          <h1>Nuestros productos</h1>
          <p>
            En <b>Tauro</b> te ofrecemos un agarre excepcional, calidad y seguridad,
            asegurando el rendimiento que necesitás en cada uno de tus viajes.
          </p>
        </div>
      </div>
    </section>

    <section className="quality-banner">
      <h2>Calidad garantizada</h2>
      <p>Contamos con productos de la <b>mejor calidad</b></p>
    </section>
  </>
);

export default HeroProductos;
