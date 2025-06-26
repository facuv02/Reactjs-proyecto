import React from 'react';
import { useCart } from './CardContext';
import { Link } from 'react-router-dom';

const wrapperStyle = {
  display: 'flex',
  alignItems: 'center',
  color: '#fff',        
  textDecoration: 'none'
};

const iconStyle = {
  fontSize: '1.6rem'
};

const countStyle = {
  marginLeft: '6px',
  background: '#e53935',  
  color: '#fff',
  borderRadius: '50%',
  padding: '2px 6px',
  fontSize: '0.9rem',
  fontWeight: 'bold'
};

function CartWidget() {
  const { totalItems } = useCart();

  return (
    <Link to="/carrito" style={wrapperStyle}>
      <span style={iconStyle}>🛒</span>
      {totalItems > 0 && (
        <span style={countStyle}>{totalItems}</span>
      )}
    </Link>
  );
}

export default CartWidget;
