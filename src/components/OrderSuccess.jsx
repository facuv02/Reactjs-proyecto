import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const OrderSuccess = () => {
  const location = useLocation();
  const orderId = location.state?.orderId;

  return (
    <div style={containerStyle}>
      <h2>¡Gracias por tu compra! 🎉</h2>
      {orderId ? (
        <>
          <p>Tu ID de orden es:</p>
          <p style={idStyle}>{orderId}</p>
        </>
      ) : (
        <p>No se encontró una orden reciente.</p>
      )}
      <Link to="/productos" style={linkStyle}>Volver al inicio</Link>
    </div>
  );
};

//Estilos 
const containerStyle = {
  textAlign: 'center',
  marginTop: '3rem',
  padding: '2rem',
  backgroundColor: '#f0f8ff',
  borderRadius: '12px',
  maxWidth: '600px',
  margin: '3rem auto',
  boxShadow: '0 3px 15px rgba(0,0,0,0.1)',
};

const idStyle = {
  fontSize: '1.4rem',
  fontWeight: 'bold',
  color: '#2e7d32',
  marginTop: '1rem',
};

const linkStyle = {
  display: 'inline-block',
  marginTop: '2rem',
  padding: '0.5rem 1.2rem',
  backgroundColor: '#1976d2',
  color: 'white',
  textDecoration: 'none',
  borderRadius: '8px',
};

export default OrderSuccess;
