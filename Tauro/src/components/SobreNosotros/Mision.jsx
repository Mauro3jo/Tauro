import './Mision.css';
import toroRojo from '../../assets/ToroRojo.png';

function Mision() {
  return (
    <section className="mision-section">
      <div className="mision-card">
        <div className="mision-card-content">
          <h3>NUESTRA MISIÓN</h3>
          <p>
            En Tauro, nuestra misión es <b>potenciar la experiencia</b> de cada motociclista
            ofreciendo <span className="destacado">neumáticos de la más alta calidad.</span>
          </p>
          <p>
            Nos comprometemos a brindar <b>seguridad superior</b> y un <b>rendimiento excepcional</b> en cada curva y recta,
            asegurando que cada viaje sea tan emocionante como seguro.
          </p>
        </div>
        <img src={toroRojo} alt="Toro Tauro" className="toro-mision" draggable="false" />
        <div className="degradado-rojo"></div>
      </div>
    </section>
  );
}

export default Mision;
