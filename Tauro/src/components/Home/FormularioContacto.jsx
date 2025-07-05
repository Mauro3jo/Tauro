import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './FormularioContacto.css';
import fondo from '../../assets/FormularioContactoFondo.png';

function FormularioContacto() {
  const [form, setForm] = useState({
    nombre: '',
    email: '',
    telefono: '',
    ciudad: '',
    mensaje: '',
  });
  const [errors, setErrors] = useState({});
  const [enviando, setEnviando] = useState(false);

  const handleTelefonoChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    setForm((prev) => ({ ...prev, telefono: value }));
  };

  function validarEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const USER_ID = import.meta.env.VITE_EMAILJS_USER_ID;


  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!form.nombre) newErrors.nombre = 'Campo requerido';
    if (!form.email) newErrors.email = 'Campo requerido';
    else if (!validarEmail(form.email)) newErrors.email = 'Email inválido';
    if (!form.telefono) newErrors.telefono = 'Campo requerido';
    else if (!/^\d+$/.test(form.telefono)) newErrors.telefono = 'Solo números';
    if (!form.ciudad) newErrors.ciudad = 'Campo requerido';
    if (!form.mensaje) newErrors.mensaje = 'Campo requerido';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setEnviando(true);
      emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          nombre: form.nombre,
          email: form.email,
          telefono: form.telefono,
          ciudad: form.ciudad,
          mensaje: form.mensaje,
        },
        USER_ID
      ).then((result) => {
        alert('¡Mensaje enviado!');
        setForm({
          nombre: '',
          email: '',
          telefono: '',
          ciudad: '',
          mensaje: '',
        });
        setEnviando(false);
      }, (error) => {
        alert('Ocurrió un error al enviar el mensaje.');
        setEnviando(false);
      });
    }
  };

  return (
    <section className="contacto-form-section">
      <div className="contacto-form-box">
        <div className="contacto-form-fondo">
          <img src={fondo} alt="Fondo formulario" />
        </div>
        <form className="contacto-form" autoComplete="off" onSubmit={handleSubmit}>
          <div className="form-header">
            <h2>¿Tenés alguna duda?</h2>
            <p>¡Contactate con nosotros!</p>
          </div>
          <div className="input-row">
            <div className="input-group">
              <label>Nombre</label>
              <input
                type="text"
                name="nombre"
                placeholder="Nombre"
                value={form.nombre}
                onChange={handleChange}
                disabled={enviando}
              />
              {errors.nombre && <span className="error">{errors.nombre}</span>}
            </div>
            <div className="input-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                disabled={enviando}
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>
          </div>
          <div className="input-row">
            <div className="input-group">
              <label>Teléfono</label>
              <input
                type="text"
                name="telefono"
                placeholder="Teléfono"
                value={form.telefono}
                onChange={handleTelefonoChange}
                inputMode="numeric"
                disabled={enviando}
              />
              {errors.telefono && <span className="error">{errors.telefono}</span>}
            </div>
            <div className="input-group">
              <label>Ciudad</label>
              <input
                type="text"
                name="ciudad"
                placeholder="Ciudad"
                value={form.ciudad}
                onChange={handleChange}
                disabled={enviando}
              />
              {errors.ciudad && <span className="error">{errors.ciudad}</span>}
            </div>
          </div>
          <div className="input-row">
            <div className="input-group" style={{ width: '100%' }}>
              <label>Mensaje</label>
              <textarea
                name="mensaje"
                placeholder="Mensaje"
                rows={3}
                value={form.mensaje}
                onChange={handleChange}
                disabled={enviando}
              ></textarea>
              {errors.mensaje && <span className="error">{errors.mensaje}</span>}
            </div>
          </div>
          <button className="enviar-btn" type="submit" disabled={enviando}>
            {enviando ? 'Enviando...' : 'ENVIAR'}
          </button>
        </form>
      </div>
    </section>
  );
}

export default FormularioContacto;
