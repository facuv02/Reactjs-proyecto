import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemCount from './ItemCount';

const detailStyle = {
  maxWidth: '600px',
  margin: '2rem auto',
  background: '#fff',
  padding: '2rem',
  borderRadius: '12px',
  boxShadow: '0 3px 15px rgba(0,0,0,0.05)'
};

const imageStyle = {
  width: '100%',
  height: 'auto',
  borderRadius: '10px'
};

const priceStyle = {
  fontWeight: 'bold',
  color: '#2e7d32'
};

const descStyle = {
  fontSize: '0.95rem',
  color: '#555'
};

const mockProductos = [
  {
    id: 1,
    nombre: 'Laptop',
    categoria: 'laptops',
    precio: 999,
    imagen: 'https://via.placeholder.com/200x150?text=Laptop',
    descripcion: 'Laptop de alto rendimiento con pantalla HD de 15", SSD de 512GB y 16GB de RAM. Perfecta para tareas intensivas, edición de video y multitarea.'
  },
  {
    id: 2,
    nombre: 'Smartphone',
    categoria: 'smartphones',
    precio: 599,
    imagen: 'https://via.placeholder.com/200x150?text=Smartphone',
    descripcion: 'Smartphone con cámara cuádruple de 108MP, procesador de última generación y carga ultra rápida. Ideal para fotografía y entretenimiento.'
  },
  {
    id: 3,
    nombre: 'Tablet',
    categoria: 'tablets',
    precio: 399,
    imagen: 'https://via.placeholder.com/200x150?text=Tablet',
    descripcion: 'Tablet ligera y portátil con pantalla de 10.5", perfecta para leer, estudiar, y ver series. Compatible con stylus y teclado externo.'
  },
  {
    id: 4,
    nombre: 'Smartwatch',
    categoria: 'smartwatches',
    precio: 199,
    imagen: 'https://via.placeholder.com/200x150?text=Smartwatch',
    descripcion: 'Smartwatch moderno con monitoreo de salud, notificaciones, GPS y resistencia al agua. Batería de larga duración y múltiples correas intercambiables.'
  }
];

const ItemDetailContainer = () => {
  const { productoId } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    const getProducto = () =>
      new Promise(resolve =>
        setTimeout(() => {
          resolve(mockProductos.find(p => p.id === parseInt(productoId)));
        }, 500)
      );

    getProducto().then(setProducto);
  }, [productoId]);

  if (!producto) return <p style={{ textAlign: 'center', marginTop: '2rem' }}>Cargando detalle del producto...</p>;

  return (
    <div style={detailStyle}>
      <h2>{producto.nombre}</h2>
      <img src={producto.imagen} alt={producto.nombre} style={imageStyle} />
      <p style={priceStyle}>Precio: ${producto.precio}</p>
      <p style={descStyle}>{producto.descripcion}</p>
      <ItemCount initial={1} stock={10} onAdd={count => console.log(`Agregaste ${count} al carrito`)} />
    </div>
  );
};

export default ItemDetailContainer;
