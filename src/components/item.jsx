import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css';

const Item = ({ prod }) => {
  return (
    <div className="item-card">
      <img
        src={prod.Imagen || prod.imagen}
        alt={prod.nombre}
        className="item-card__img"
      />
      <div className="item-card__body">
        <h5 className="item-card__title">{prod.nombre}</h5>
        <p className="item-card__price">
          ${prod.precio.toLocaleString()},00
        </p>
        <Link to={`/producto/${prod.id}`} className="btn-primary">
          Ver más
        </Link>
      </div>
    </div>
  );
};

export default Item;
