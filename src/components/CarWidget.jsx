import React from 'react';

function CartWidget({ itemCount }) {
  return (
    <div>
      <span>🛒</span>
      <span>{itemCount}</span>
    </div>
  );
}

export default CartWidget;