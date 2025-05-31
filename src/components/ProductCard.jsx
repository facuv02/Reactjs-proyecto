import React from 'react';

const cardStyle = {
  background: '#fff',
  borderRadius: '12px',
  boxShadow: '0 3px 10px rgba(0,0,0,0.05)',
  padding: '1rem',
  textAlign: 'center',
  transition: 'transform 0.2s ease-in-out',
  cursor: 'pointer'
};

const imgStyle = {
  width: '100%',
  height: '160px',
  objectFit: 'cover',
  borderRadius: '8px'
};

const priceStyle = {
  fontWeight: 'bold',
  color: '#2e7d32'
};

const descStyle = {
  fontSize: '0.9rem',
  color: '#666'
};

const ProductCard = ({ nombre, precio, imagen, descripcion, onViewDetails }) => {
  return (
    <div style={cardStyle} onClick={onViewDetails} title={`Ver detalle de ${nombre}`}>
      <img src={imagen} alt={nombre} style={imgStyle} />
      <h3>{nombre}</h3>
      <p style={priceStyle}>Precio: ${precio}</p>
      <p style={descStyle}>{descripcion}</p>
    </div>
  );
};

export default ProductCard;
