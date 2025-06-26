import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/cart';
import CheckoutForm from './components/CheckoutForm';
import OrderSuccess from './components/OrderSuccess';
import ConsultaCompra from './components/ConsultaCompra';

import { CartProvider } from './components/CardContext';

const App = () => (
  <CartProvider>
    <Router>
      <Navbar />
      <div style={{ flex: 1, padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Navigate to="/productos" />} />
          <Route path="/productos" element={<ItemListContainer greeting="Todos los productos: " />} />
          <Route path="/categoria/:categoryId" element={<ItemListContainer greeting="Categoría: " />} />
          <Route path="/producto/:productoId" element={<ItemDetailContainer />} />
          <Route path="/carrito" element={<Cart />} />
          <Route path="/checkout" element={<CheckoutForm />} />
          <Route path="/orden-exitosa" element={<OrderSuccess />} />
          <Route path="/consulta" element={<ConsultaCompra />} />
          <Route path="*" element={<h2 style={{ textAlign: 'center' }}>404 - Página no encontrada</h2>} />
        </Routes>
      </div>
    </Router>
  </CartProvider>
);

export default App;
