import React, { useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../service/Firebase';

const ConsultaCompra = () => {
  const [id, setId] = useState('');
  const [orden, setOrden] = useState(null);
  const [error, setError] = useState('');

  const handleConsulta = async () => {
    if (!id.trim()) return;
    try {
      const docRef = doc(db, 'orders', id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setOrden(docSnap.data());
        setError('');
      } else {
        setError('No se encontró la orden.');
        setOrden(null);
      }
    } catch (e) {
      setError('Error al buscar la orden.');
      console.error(e);
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '2rem auto' }}>
      <h2>Consultar Compra</h2>
      <input
        type="text"
        placeholder="Ingrese ID de orden"
        value={id}
        onChange={e => setId(e.target.value)}
        style={{ padding: '0.5rem', width: '100%', marginBottom: '1rem' }}
      />
      <button onClick={handleConsulta} style={{ padding: '0.5rem 1rem', marginBottom: '1rem' }}>Consultar</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {orden && (
        <div style={{ background: '#f9f9f9', padding: '1rem', borderRadius: '6px' }}>
          <h3>Datos del comprador</h3>
          <p><b>Nombre:</b> {orden.buyer.nombre} {orden.buyer.apellido}</p>
          <p><b>Dirección:</b> {orden.buyer.direccion}</p>
          <p><b>Email:</b> {orden.buyer.email}</p>
          <h3>Productos:</h3>
          <ul>
            {orden.items.map((item, idx) => (
              <li key={idx}>{item.nombre} x{item.cantidad} - ${item.precio}</li>
            ))}
          </ul>
          <p><b>Total:</b> ${orden.total}</p>
        </div>
      )}
    </div>
  );
};

export default ConsultaCompra;
