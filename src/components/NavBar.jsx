// components/NavBar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CarWidget';

const navbarStyle = {
  display: 'flex',
  justifyContent: 'center', // Centra horizontalmente
  alignItems: 'center',
  padding: '10px 30px',
  backgroundColor: '#ffffff',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  position: 'sticky',
  top: 0,
  zIndex: 10,
};

const contentContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '40px', // Espacio entre enlaces y carrito
};

const linksContainerStyle = {
  display: 'flex',
  gap: '20px',
};

const linkStyle = {
  textDecoration: 'none',
  color: '#000', // Texto negro
  fontWeight: '500',
};

const cartStyle = {
  position: 'relative',
};

const Navbar = () => {
  const categorias = ['laptops', 'smartphones', 'tablets', 'smartwatches'];

  return (
    <nav style={navbarStyle}>
      <div style={contentContainerStyle}>
        <div style={linksContainerStyle}>
          <Link to="/productos" style={linkStyle}>Inicio</Link>
          {categorias.map(cat => (
            <Link key={cat} to={`/categoria/${cat}`} style={linkStyle}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </Link>
          ))}
        </div>
        <div style={cartStyle}>
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
