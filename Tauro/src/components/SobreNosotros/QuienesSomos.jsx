import './QuienesSomos.css';
import motoImg from '../../assets/QuienesSomosSuperiorIzquierda.png';
import franjaVerde from '../../assets/FranjaVerdeDiagonalQuienesSomos.png';
import toroImg from '../../assets/ToroQuienesSomos.png';

function QuienesSomos() {
  return (
    <section className="quienes-somos-section">
      <div className="quienes-somos-bg">
        {/* Imagen moto */}
        <img src={motoImg} alt="Moto" className="moto-img" />
        {/* Franja verde alineada */}
        <img src={franjaVerde} alt="Franja verde" className="franja-verde" />
        {/* Toro decorativo */}
        <img src={toroImg} alt="Toro Tauro" className="toro-bg" />
        {/* Contenido de texto */}
        <div className="quienes-somos-content">
          <h2>¿Quiénes somos?</h2>
          <p className="primer-parrafo">
            En <b>Tauro</b>, hacemos que tu moto se sienta <b>más segura</b>
            <br />
            y con <b>mejor agarre</b> en cada kilómetro.
          </p>
          <p>
            Nos especializamos en seleccionar neumáticos de <b>alta calidad</b> que te den la <b>confianza</b> que necesitás, ya sea para el día a día en la ciudad o para esas escapadas de fin de semana.
          </p>
          <p>
            Nos encargamos de entender qué tipo de moto tenés y cómo te gusta manejar, para recomendarte el <b>neumático perfecto</b>. Así, cada vez que salgas, sabés que contás con el mejor agarre y una respuesta segura bajo tus ruedas.
          </p>
        </div>
      </div>
    </section>
  );
}

export default QuienesSomos;
