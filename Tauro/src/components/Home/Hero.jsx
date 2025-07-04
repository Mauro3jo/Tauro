import './Hero.css';
import fondo from '../../assets/Mask group.png';
import titulo from '../../assets/Elegí Calidad.png';

function Hero() {
  return (
    <section className="hero" style={{ backgroundImage: `url(${fondo})` }}>
      <img src={titulo} alt="Elegí Calidad" className="hero-title-img" />
      <p className="hero-subtitle">
        Nuestros neumáticos de alta calidad te ofrecen un agarre excepcional y la<br />
        seguridad que merecés.
      </p>
    </section>
  );
}

export default Hero;
