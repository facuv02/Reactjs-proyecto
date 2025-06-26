import React from 'react';
import { useCart } from './CardContext';
import { Link, useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, totalPrice, updateQuantity, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();  
  const handleIncrement = (id, currentQty) => {
    updateQuantity(id, currentQty + 1);
  };

  const handleDecrement = (id, currentQty) => {
    if (currentQty > 1) {
      updateQuantity(id, currentQty - 1);
    } else {
      removeFromCart(id);
    }
  };

  if (cartItems.length === 0) {
    return (
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <h2>Tu carrito está vacío 😅</h2>
        <Link to="/productos" style={{ textDecoration: 'none', color: '#0077cc' }}>
          Volver al catálogo
        </Link>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '800px', margin: '2rem auto' }}>
      <h2>Tu Carrito</h2>

      {cartItems.map(item => (
        <div key={item.id} style={itemContainer}>
          <div style={{ flex: 1 }}>
            <h4>{item.nombre}</h4>
            <p>Precio unitario: ${item.precio}</p>
            <div style={cantidadControl}>
              <button onClick={() => handleDecrement(item.id, item.cantidad)} style={btn}>-</button>
              <span style={{ fontWeight: 'bold', margin: '0 10px' }}>{item.cantidad}</span>
              <button onClick={() => handleIncrement(item.id, item.cantidad)} style={btn}>+</button>
            </div>
            <p>Subtotal: ${item.precio * item.cantidad}</p>
          </div>
          <button onClick={() => removeFromCart(item.id)} style={removeBtn}>
            Eliminar
          </button>
        </div>
      ))}

      <h3 style={{ marginTop: '2rem' }}>Total a pagar: ${totalPrice}</h3>

      <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
        <button onClick={clearCart} style={clearBtn}>
          Vaciar carrito
        </button>
        <button onClick={() => navigate('/checkout')} style={checkoutBtn}>
          TERMINAR COMPRA
        </button>
      </div>
    </div>
  );
};

//Estilos
const itemContainer = {
  borderBottom: '1px solid #ccc',
  padding: '1rem 0',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};
const cantidadControl = {
  display: 'flex',
  alignItems: 'center',
  marginTop: '10px',
};
const btn = {
  padding: '0.3rem 0.8rem',
  fontSize: '1rem',
  backgroundColor: '#0077cc',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};
const removeBtn = {
  backgroundColor: 'red',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  padding: '0.5rem 1rem',
  cursor: 'pointer',
};
const clearBtn = {
  padding: '0.7rem 1.5rem',
  backgroundColor: '#444',
  color: '#fff',
  border: 'none',
  borderRadius: '6px',
  fontSize: '1rem',
  cursor: 'pointer',
};
const checkoutBtn = {
  padding: '0.7rem 1.5rem',
  backgroundColor: '#2e7d32',
  color: '#fff',
  border: 'none',
  borderRadius: '6px',
  fontSize: '1rem',
  cursor: 'pointer',
};

export default Cart;
