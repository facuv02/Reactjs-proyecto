import React from 'react';

const Navbar = ({ links }) => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '60px',
      backgroundColor: '#333'
    }}>
      {links.map((link, index) => (
        <a
          key={index}
          href={link.href}
          style={{ color: '#fff', marginRight: '15px', textDecoration: 'none' }}
        >
          {link.label}
        </a>
      ))}
    </div>
  );
};

export default Navbar;