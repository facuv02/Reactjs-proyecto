import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import CartWidget from './CarWidget';

const NavBar = () => {
  const categorias = ['laptops', 'smartphones', 'tablets', 'smartwatches'];
  const { pathname } = useLocation();

  const navStyle = {
    backgroundColor: '#ffffff',
    borderBottom: '1px solidrgb(74, 61, 61)',
    position: 'sticky',
    top: 0,
    zIndex: 100,
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0.75rem 1rem',
  };

  const linksWrapper = {
    display: 'flex',
    gap: '2rem',
    flex: 1,
    justifyContent: 'center',
  };

  const linkBase = {
    textDecoration: 'none',
    color: '#333333',
    fontWeight: 500,
    fontSize: '1rem',
    padding: '0.25rem 0',
    position: 'relative',
    transition: 'color 0.2s ease',
  };

  const linkActive = {
    color: '#1976d2',
  };

  const underline = {
    content: "''",
    position: 'absolute',
    bottom: '-4px',
    left: 0,
    height: '2px',
    width: '100%',
    backgroundColor: '#1976d2',
  };

  return (
    <nav style={navStyle}>
      <div style={containerStyle}>
        {}
        <div style={{ width: '1rem' }} />

        {}
        <div style={linksWrapper}>
          <Link
            to="/productos"
            style={{
              ...linkBase,
              ...(pathname === '/productos' ? linkActive : {}),
            }}
          >
            Inicio
            {pathname === '/productos' && <span style={underline} />}
          </Link>

          {categorias.map(cat => {
            const path = `/categoria/${cat}`;
            const isActive = pathname === path;
            return (
              <Link
                key={cat}
                to={path}
                style={{
                  ...linkBase,
                  ...(isActive ? linkActive : {}),
                }}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
                {isActive && <span style={underline} />}
              </Link>
            );
          })}

          <Link
            to="/consulta"
            style={{
              ...linkBase,
              ...(pathname === '/consulta' ? linkActive : {}),
            }}
          >
            Consultar Compra
            {pathname === '/consulta' && <span style={underline} />}
          </Link>
        </div>

        {}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
