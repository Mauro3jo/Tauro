import './ProductosPremiumGrid.css';

import marca from '../../assets/ProductosPremiunMarca.png';

import hdma001 from '../../assets/ProductoPremiunHDMA001-1.png';
import hdma006 from '../../assets/ProductoPremiunHDMA006-1.png';
import hdma239 from '../../assets/ProductoPremiunHDMA239.png';
import hdma040 from '../../assets/ProductoPremiunHDMA040.png';
import hdma183 from '../../assets/ProductoPremiunHDMA183.png';
import hdma087 from '../../assets/ProductoPremiunHDMA087.png';
import hdma005 from '../../assets/ProductoPremiunHDMA005.png';

const productos = [
  hdma001,
  hdma006,
  hdma239,
  hdma040,
  hdma183,
  hdma087,
  hdma005,
];

function ProductosPremiumGrid() {
  return (
    <section className="premium-bg-global">
      <div className="premium-marca-top-wrap">
        <img
          src={marca}
          alt="Marca Tauro"
          className="premium-marca-top"
          draggable={false}
        />
      </div>
      <h2 className="premium-main-title">
        ¡Hecha un vistazo a nuestros neumáticos premium!
      </h2>
      <div className="premium-carta-blanca">
        <div className="premium-card-list">
          {productos.map((img, idx) => (
            <img
              src={img}
              alt={`Neumático premium ${idx + 1}`}
              className="premium-product-img"
              key={idx}
              draggable={false}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductosPremiumGrid;
