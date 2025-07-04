import './Beneficios.css';
import confianza from '../../assets/confianza.png';
import calidad from '../../assets/calidad premium.png';
import seguridad from '../../assets/seguridad.png';
import precios from '../../assets/beneficios.png';


function Beneficios() {
  return (
    <section className="beneficios">
      <h2 className="beneficios-titulo">¿Qué te ofrecemos?</h2>
      <div className="beneficios-box">
        <div className="beneficio-item">
          <img src={confianza} alt="Confianza" />
          <p>Confianza</p>
        </div>
        <div className="beneficio-item">
          <img src={calidad} alt="Calidad Premium" />
          <p>Calidad Premium</p>
        </div>
        <div className="beneficio-item">
          <img src={seguridad} alt="Seguridad" />
          <p>Seguridad</p>
        </div>
        <div className="beneficio-item">
          <img src={precios} alt="Buenos Precios" />
          <p>Buenos Precios</p>
        </div>
      </div>
    </section>
  );
}

export default Beneficios;
