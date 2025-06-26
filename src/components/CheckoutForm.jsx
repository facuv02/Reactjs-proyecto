import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from './CardContext';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { db } from '../service/Firebase';

const CheckoutForm = () => {
  const { cartItems, totalPrice, clearCart } = useCart();
  const [orderId, setOrderId] = useState('');
  const navigate = useNavigate();
  const [form, setForm] = useState({
    nombre: '', apellido: '', direccion: '', email: '', email2: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const errs = {};
    if (!form.nombre.trim()) errs.nombre = 'Requerido';
    if (!form.apellido.trim()) errs.apellido = 'Requerido';
    if (!form.direccion.trim()) errs.direccion = 'Requerido';
    if (!form.email) errs.email = 'Requerido';
    if (form.email !== form.email2) errs.email2 = 'Los correos no coinciden';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!validate()) return;
    try {
      const order = {
        buyer: {
          nombre: form.nombre,
          apellido: form.apellido,
          direccion: form.direccion,
          email: form.email
        },
        items: cartItems.map(i => ({ id: i.id, nombre: i.nombre, precio: i.precio, cantidad: i.cantidad })),
        total: totalPrice,
        date: Timestamp.now()
      };
      const docRef = await addDoc(collection(db, 'orders'), order);
      setOrderId(docRef.id);
      clearCart();
    } catch (error) {
      console.error('Error al crear la orden:', error);
      alert('Ocurrió un error. Intenta de nuevo.');
    }
  };

  const copyId = () => {
    navigator.clipboard.writeText(orderId);
    alert('ID copiado al portapapeles');
  };

  return (
    <div style={container}>
      <h2>Finalizar Compra</h2>
      {orderId ? (
        <div>
          <h3>¡Compra realizada con éxito!</h3>
          <p>ID de orden: <b>{orderId}</b></p>
          <button onClick={copyId} style={submitBtn}>Copiar ID</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={formStyle} noValidate>
          {[{ label: 'Nombre', name: 'nombre', type: 'text' },
            { label: 'Apellido', name: 'apellido', type: 'text' },
            { label: 'Dirección de envío', name: 'direccion', type: 'text' },
            { label: 'Correo', name: 'email', type: 'email' },
            { label: 'Repetir correo', name: 'email2', type: 'email' },
          ].map(field => (
            <div key={field.name} style={fieldStyle}>
              <label>{field.label}:</label>
              <input
                type={field.type}
                name={field.name}
                value={form[field.name]}
                onChange={handleChange}
                style={inputStyle}
              />
              {errors[field.name] && <span style={errorStyle}>{errors[field.name]}</span>}
            </div>
          ))}
          <button type="submit" style={submitBtn}>Enviar</button>
        </form>
      )}
    </div>
  );
};

const container = { maxWidth: '500px', margin: '2rem auto', padding: '2rem', background: '#fff', borderRadius: '8px', boxShadow: '0 3px 15px rgba(0,0,0,0.1)' };
const formStyle = { display: 'flex', flexDirection: 'column', gap: '1rem' };
const fieldStyle = { display: 'flex', flexDirection: 'column' };
const inputStyle = { padding: '0.5rem', fontSize: '1rem', borderRadius: '4px', border: '1px solid #ccc' };
const errorStyle = { color: 'red', fontSize: '0.85rem', marginTop: '0.25rem' };
const submitBtn = { padding: '0.75rem', fontSize: '1rem', backgroundColor: '#2e7d32', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer' };

export default CheckoutForm;