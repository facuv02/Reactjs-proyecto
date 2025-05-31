import React, { useState } from 'react';

const countContainerStyle = {
  display: 'flex',
  gap: '10px',
  alignItems: 'center',
  marginTop: '1rem'
};

const buttonStyle = {
  padding: '0.5rem 1rem',
  backgroundColor: '#0077cc',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer'
};

const spanStyle = {
  fontSize: '1.1rem',
  fontWeight: 'bold'
};

const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(initial);

  const handleAdd = () => {
  if (count > 0 && count <= stock) onAdd(count);
};
  return (
    <div style={countContainerStyle}>
      <button style={buttonStyle} onClick={() => setCount(count > 1 ? count - 1 : 1)}>-</button>
      <span style={spanStyle}>{count}</span>
      <button style={buttonStyle} onClick={() => setCount(count < stock ? count + 1 : stock)}>+</button>
      <button style={buttonStyle} onClick={handleAdd}>Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;
