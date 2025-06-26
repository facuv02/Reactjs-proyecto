import React, { useState } from 'react';
import ItemCount from './ItemCount';

const ItemDetail = ({ detalle = {}, onAddToCart }) => {
  const [agregado, setAgregado] = useState(false);

  const handleAdd = cantidad => {
    onAddToCart(detalle, cantidad);
    setAgregado(true);
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ textAlign: 'center' }}>{detalle.nombre || 'Producto sin nombre'}</h2>
      <img
        src={detalle.imagen || detalle.Imagen || 'https://via.placeholder.com/400'}
        alt={detalle.nombre || 'Producto'}
        style={imageStyle}
      />
      <div style={textBlockStyle}>
        <p style={priceStyle}>Precio: ${detalle.precio || 'N/A'}</p>
        <p style={descStyle}>{detalle.descripcion || 'Sin descripción disponible.'}</p>

        {agregado ? (
          <p style={{ color: '#2e7d32', fontWeight: 'bold' }}>Producto agregado ✅</p>
        ) : (
          <ItemCount initial={1} stock={10} onAdd={handleAdd} />
        )}
      </div>
    </div>
  );
};

const containerStyle = {
  maxWidth: '800px',
  margin: '2rem auto',
  background: '#fff',
  padding: '2rem',
  borderRadius: '12px',
  boxShadow: '0 3px 15px rgba(0,0,0,0.1)',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
};

const imageStyle = {
  width: '100%',
  maxHeight: '400px',
  objectFit: 'contain',
  borderRadius: '10px',
};

const textBlockStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
};

const priceStyle = {
  fontWeight: 'bold',
  fontSize: '1.2rem',
  color: '#2e7d32',
};

const descStyle = {
  fontSize: '1rem',
  color: '#555',
};

export default ItemDetail;
