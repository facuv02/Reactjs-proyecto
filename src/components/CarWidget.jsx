import React from 'react';

const CartWidget = ({ itemCount }) => {
  return (
    <div style={{ position: 'relative', cursor: 'pointer' }}>
      <svg
        width="24"
        height="24"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
     
        <path d="M7 4h-2l-3 9v2h2l3-9zM17 4h-2l-3 9v2h2l3-9z" />
      </svg>
      {itemCount > 0 && (
        <span
          style={{
            position: 'absolute',
            top: '-5px',
            right: '-5px',
            backgroundColor: 'red',
            borderRadius: '50%',
            padding: '2px 6px',
            color: 'white',
            fontSize: '12px',
          }}
        >
          {itemCount}
        </span>
      )}
    </div>
  );
};

export default CartWidget;