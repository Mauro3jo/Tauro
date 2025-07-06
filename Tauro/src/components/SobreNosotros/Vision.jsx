import './Vision.css';
import toroVerde from '../../assets/ToroVerde.png';

function Vision() {
  return (
    <section className="vision-section">
      <div className="vision-card">
        <img src={toroVerde} alt="Toro Tauro" className="toro-vision" draggable="false" />
        <div className="vision-card-content">
          <h3>NUESTRA VISIÓN</h3>
          <p>
            Tauro se visualiza como el <b>punto de encuentro</b> para una <b>comunidad de motociclistas</b> que valora la <b>seguridad y la calidad</b>.
          </p>
          <p>
            Aspiramos a <b>transformar la compra</b> de neumáticos en una <span className="destacado">experiencia de valor agregado</span>, donde el conocimiento y el producto adecuado potencien cada una de sus aventuras.
          </p>
        </div>
        <div className="degradado-verde"></div>
      </div>
    </section>
  );
}

export default Vision;
