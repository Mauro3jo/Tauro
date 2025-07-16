import './QuienesSomos.css';
import fondoDiagonal from '../../assets/Fondo_rueda_moto_-_sobre_nosotros.png';
import toroImg from '../../assets/ToroQuienesSomos.png';

function QuienesSomos() {
  return (
    <section className="quienes-somos-section">
      <div className="quienes-somos-bg">
        {/* Imagen de fondo diagonal */}
        <img src={fondoDiagonal} alt="Fondo diagonal" className="fondo-diagonal-bg" />
        {/* Toro decorativo, por encima del fondo */}
        <img src={toroImg} alt="Toro Tauro" className="toro-bg" />
        <div className="quienes-somos-content">
          <h2>¿Quiénes somos?</h2>
          <p className="primer-parrafo">
            En <b>Tauro</b> hacemos que tu moto se sienta <b>más segura</b>
            <br />
            y con <b>mejor agarre</b> en cada kilómetro.
          </p>
          <p>
            Nos especializamos en neumáticos de <b>alta calidad</b>, que te brindan la <b>confianza</b> que necesitas, ya sea para el día a día en la ciudad, o para esas escapadas de fin de semana.
          </p>
          <p>
            Nos esforzamos por entender cuál es tu experiencia de manejo anhelada y el tipo de moto que tenés para recomendarte el <b>neumático perfecto</b>. Así, cada vez que salgas a rodar en tu moto, sabés que contás con el mejor agarre y una respuesta segura bajo tus ruedas.
          </p>
        </div>
      </div>
    </section>
  );
}

export default QuienesSomos;
