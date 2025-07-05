import './CalidadGarantizada.css';
// Usá la ruta real de tus imágenes según dónde las tengas en el proyecto
import isoImg from '../../assets/CertifiedIso.png';
import eceImg from '../../assets/AprovedACE.png';

function CalidadGarantizada() {
  return (
    <section className="calidad-garantizada">
      <div className="certificaciones">
        <div className="cert-card">
          <img src={isoImg} alt="Certificación ISO 9001" />
          <span className="cert-title">Certificación ISO 9001</span>
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
