import './Footer.css';
import telefono from '../assets/telefono.png';
import mail from '../assets/mail.png';
import facebook from '../assets/facebook.png';
import instagram from '../assets/instagram.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-col">
          <h4>Información de contacto</h4>
          <div className="footer-item">
            <img src={mail} alt="Mail" />
            <span>contacto@cubiertastauro.com</span>
          </div>
          <div className="footer-item">
            <img src={telefono} alt="Teléfono" />
            <span>3854-972776</span>
          </div>
        </div>

        <div className="footer-col">
          <h4>Nuestras Redes</h4>
          <div className="footer-item">
            <img src={instagram} alt="Instagram" />
            <span>@CubiertasTauro</span>
          </div>
          <div className="footer-item">
            <img src={facebook} alt="Facebook" />
            <span>Cubiertastauro</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
