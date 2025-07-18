import './CalidadGarantizada.css';
// Cambiá las rutas para que apunten a los SVG
import isoImg from '../../assets/CertifiedIso.svg';
import eceImg from '../../assets/AprovedACE.svg';
import LogoDot from '../../assets/LogoDOT.svg';

function CalidadGarantizada() {
  return (
    <section className="calidad-garantizada">
      <div className="certificaciones">
        <div className="cert-card">
          <img src={isoImg} alt="Certificación ISO 9001" />
          <span className="cert-title">Certificación ISO 9001</span>
        </div>
        <div className="cert-card">
          <img src={LogoDot} alt="LogoDot" />
          <span className="cert-title">Certificación DOT</span>
        </div>
        <div className="cert-card">
          <img src={eceImg} alt="Certificación E-MARK" />
          <span className="cert-title">Certificación E-MARK</span>
        </div>
      </div>
    </section>
  );
}

export default CalidadGarantizada;
