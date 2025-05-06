// App.js
import React, { useState } from 'react';
import Navbar from './components/NavBar';
import CartWidget from './components/CarWidget';
import WelcomeMessage from './components/MensajeBienvenida';

const App = () => {
  const [cartItems, setCartItems] = useState(3);

  const links = [
    { href: '#home', label: 'Inicio' },
    { href: '#productos', label: 'Productos' },
    { href: '#contacto', label: 'Contacto' },
  ];

  return (
    <div>
      <Navbar links={links} />
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
        <WelcomeMessage name="Carlos" />
        <CartWidget itemCount={cartItems} />
      </div>
    </div>
  );
};

export default App;