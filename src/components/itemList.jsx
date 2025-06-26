import React from 'react';
import Item from './Item';
import './ItemList.css';

const ItemList = ({ productos }) => {
  return (
    <div className="item-list">
      {productos.map(prod => (
        <Item key={prod.id} prod={prod} />
      ))}
    </div>
  );
};

export default ItemList;
