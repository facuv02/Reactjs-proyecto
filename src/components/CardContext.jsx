import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const stored = localStorage.getItem('cart');
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product, cantidad) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, cantidad: item.cantidad + cantidad }
            : item
        );
      } else {
        return [...prev, { ...product, cantidad }];
      }
    });
  };

  const updateQuantity = (productId, nuevaCantidad) => {
    setCartItems(prev =>
      prev
        .map(item =>
          item.id === productId ? { ...item, cantidad: nuevaCantidad } : item
        )
        .filter(item => item.cantidad > 0)
    );
  };

  const removeFromCart = productId => {
    setCartItems(prev => prev.filter(item => item.id !== productId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.precio * item.cantidad,
    0
  );

  const totalItems = cartItems.reduce((acc, item) => acc + item.cantidad, 0);  

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        totalPrice,
        totalItems,  
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
